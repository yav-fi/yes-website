"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { team } from "@/data/team";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const groups = ["All", "Exec", "Programs", "Events", "Tech", "Finance", "Community"] as const;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export default function TeamGrid() {
  const [active, setActive] = useState<(typeof groups)[number]>("All");

  const shown = useMemo(() => {
    if (active === "All") return team;
    return team.filter((m) => m.group === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold",
              "transition-colors",
              active === g
                ? "border-signal-cyan/40 bg-signal-cyan/10"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {g}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div
          layout
          transition={{ layout: { duration: 0.26, ease: "easeOut" } }}
          className="mt-7 grid gap-5 md:grid-cols-3"
        >
          <AnimatePresence initial={false} mode="sync">
            {shown.map((m) => (
              <motion.div
                key={m.name + m.role}
                layout="position"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                style={{ willChange: "transform" }}
                className={[
                  "rounded-2xl border border-white/10 bg-white/5 p-6",
                  "transition-colors hover:border-white/20 hover:bg-white/[0.06]",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    {m.image ? (
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white/80">
                        {initials(m.name)}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="text-lg font-semibold leading-tight">{m.name}</div>
                    <div className="mt-1 text-sm text-white/70">{m.role}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70">{m.bio}</p>

                {m.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {m.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}