export default function YESLoader({ progress }: { progress: number }) {
  const p = Math.max(0, Math.min(1, progress));

  // Visual track config
  const W = 240;          // container width
  const pad = 14;         // left/right padding for nodes
  const track = W - pad * 2;

  const headX = pad + track * p; // moving dot position (0..1 across)

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-[240px]">
        {/* base trace */}
        <div className="absolute left-[14px] right-[14px] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-white/25" />

        {/* filled trace (left -> head) */}
        <div
          className="absolute left-[14px] top-1/2 h-[2px] -translate-y-1/2 rounded-full"
          style={{
            width: `${Math.max(0, headX - pad)}px`,
            background:
              "linear-gradient(90deg, rgba(56,232,255,0.45) 0%, rgba(13,107,255,0.70) 70%, rgba(255,255,255,0.92) 100%)",
            boxShadow: "0 0 18px rgba(56,232,255,0.16), 0 0 26px rgba(13,107,255,0.12)",
            willChange: "width",
          }}
        />

        {/* left node */}
        <div
          className="absolute top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-white/90"
          style={{
            left: `${pad - 3}px`,
            boxShadow: "0 0 10px rgba(255,255,255,0.10)",
          }}
        />

        {/* right node */}
        <div
          className="absolute top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-white/90"
          style={{
            left: `${W - pad - 3}px`,
            boxShadow: "0 0 10px rgba(255,255,255,0.10)",
          }}
        />

        {/* moving dot (the progress driver) */}
        <div
          className="absolute top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full"
          style={{
            left: `${Math.min(W - pad - 4, Math.max(pad - 4, headX - 4))}px`,
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 0 18px rgba(56,232,255,0.22), 0 0 26px rgba(255,255,255,0.14)",
            willChange: "left",
          }}
        />
      </div>
    </div>
  );
}