"use client";

import { useMemo, useState } from "react";
import { programs } from "@/data/programs";
import Chip from "@/components/ui/Chip";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const filters = ["All", "Explore", "Build", "Scale"] as const;

export default function ProgramsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const shown = useMemo(() => {
    if (active === "All") return programs;
    return programs.filter((p) => p.stage === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold",
              "transition-colors",
              active === f
                ? "border-signal-cyan/40 bg-signal-cyan/10"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {f}
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
            {shown.map((p) => (
              <motion.a
                key={p.slug}
                href={`/programs/${p.slug}`}
                layout="position"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                style={{ willChange: "transform" }}
                className={[
                  "rounded-2xl border border-white/10 bg-white/5 p-6",
                  "transition-colors",
                  "hover:border-white/20 hover:bg-white/[0.06]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <Chip tone="blue">{p.stage}</Chip>
                </div>
                <p className="mt-3 text-white/70">{p.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>{p.duration}</Chip>
                  <Chip>Intensity {p.intensity}/3</Chip>
                </div>
                <div className="mt-5 text-sm font-semibold text-white/80">
                  Open <span className="text-white/40">↗</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}