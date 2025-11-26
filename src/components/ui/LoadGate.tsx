"use client";

import { useEffect, useRef, useState } from "react";
import Portal from "@/components/ui/Portal";
import YESLoader from "@/components/ui/YESLoader";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForDecode(src: string) {
  try {
    const img = new Image();
    img.src = src;
    if (typeof img.decode === "function") {
      await img.decode();
    } else {
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    }
  } catch {}
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function LoadGate({
  children,
  minMs = 1400, // minimum loader time (so it never flashes)
  finishMs = 520, // animate 0.90 -> 1.00 over this duration
  fadeMs = 650, // overlay fade duration
  onceKey,
}: {
  children: (play: boolean) => React.ReactNode;
  minMs?: number;
  finishMs?: number;
  fadeMs?: number;
  onceKey?: string;
}) {
  const [phase, setPhase] = useState<"loading" | "finishing" | "fading" | "done">("loading");
  const [mountContent, setMountContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<"initial" | "repeat" | null>(() =>
    onceKey ? null : "initial"
  );

  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (!onceKey || mode !== null) return;
    let next: "initial" | "repeat" = "initial";
    try {
      if (sessionStorage.getItem(onceKey)) {
        next = "repeat";
      } else {
        sessionStorage.setItem(onceKey, "1");
      }
    } catch {
      next = "initial";
    }
    setMode(next);
  }, [onceKey, mode]);

  // keep a ref in sync so we can tween from current value
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    if (mode === "repeat") {
      setProgress(0.45);
      progressRef.current = 0.45;
    }
  }, [mode]);

  const resolvedMode = mode ?? "initial";
  const fastTrack = resolvedMode === "repeat";
  const effectiveMin = fastTrack ? Math.min(minMs, 550) : minMs;
  const effectiveFinish = fastTrack ? Math.min(finishMs, 360) : finishMs;
  const effectiveFade = fastTrack ? Math.min(fadeMs, 420) : fadeMs;

  useEffect(() => {
    if (mode === null) return;
    let cancelled = false;

    let fontsDone = false;
    let decodeDone = false;
    let loadDone = false;

    startRef.current = performance.now();

    const fontSet = fastTrack ? undefined : (document as Document & { fonts?: FontFaceSet }).fonts;
    const fontsReady =
      fontSet?.ready
        ?.then(() => {
          fontsDone = true;
        })
        .catch(() => null) ?? Promise.resolve(null);
    if (fastTrack) {
      fontsDone = true;
    }

    const decodeReady = (fastTrack ? Promise.resolve(null) : waitForDecode("/brand/yes-logo.webp")).then(() => {
      decodeDone = true;
    });

    const onLoad = () => {
      loadDone = true;
    };
    if (document.readyState === "complete") loadDone = true;
    window.addEventListener("load", onLoad, { once: true });

    const tickLoading = () => {
      const now = performance.now();
      const elapsed = now - startRef.current;

      const t = Math.min(1, elapsed / effectiveMin);
      const allReady = fontsDone && decodeDone && loadDone && t >= 1;

      // approach 0.90 smoothly during loading
      const targetLoading = 0.08 + 0.82 * t; // ~0.90 when t==1
      const target = allReady ? 0.9 : Math.min(0.9, targetLoading);

      setProgress((p) => {
        const next = Math.max(p, p + (target - p) * 0.12);
        return Math.min(next, 0.9);
      });

      if (!cancelled && !allReady) {
        rafRef.current = requestAnimationFrame(tickLoading);
      }
    };

    rafRef.current = requestAnimationFrame(tickLoading);

    const animateToOne = (durationMs: number) =>
      new Promise<void>((resolve) => {
        const from = progressRef.current;
        const start = performance.now();

        const step = () => {
          const now = performance.now();
          const u = Math.min(1, (now - start) / durationMs);
          const e = easeOutCubic(u);
          const next = from + (1 - from) * e;

          setProgress(next);

          if (cancelled) return;
          if (u < 1) requestAnimationFrame(step);
          else {
            setProgress(1);
            resolve();
          }
        };

        requestAnimationFrame(step);
      });

    (async () => {
      await Promise.all([sleep(effectiveMin), fontsReady, decodeReady]);
      if (!loadDone && !fastTrack) await sleep(180);

      if (cancelled) return;

      // Finish animation from ~0.90 -> 1.00 (visible!)
      setPhase("finishing");
      await animateToOne(effectiveFinish);

      if (cancelled) return;

      // Only now reveal page
      setMountContent(true);
      setPhase("fading");
      await sleep(effectiveFade);

      if (cancelled) return;
      setPhase("done");
    })();

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mode, effectiveMin, effectiveFinish, effectiveFade, fastTrack]);

  const play = mountContent; // hero animation starts as overlay fades

  return (
    <>
      {mountContent ? children(play) : null}

      {phase !== "done" && (
        <Portal>
          <div
            className={[
              "fixed inset-0 z-[9999] flex items-center justify-center bg-background",
              "transition-opacity",
              phase === "fading" ? "opacity-0" : "opacity-100",
            ].join(" ")}
            style={{ transitionDuration: `${effectiveFade}ms` }}
          >
            <YESLoader progress={progress} />
          </div>
        </Portal>
      )}
    </>
  );
}
