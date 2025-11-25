"use client";

import { useMemo, useState } from "react";
import { programs } from "@/data/programs";
import Chip from "@/components/ui/Chip";

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
            className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
              active === f
                ? "border-signal-cyan/40 bg-signal-cyan/10"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.slug}
            href={`/programs/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
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
              Open → <span className="text-white/40 group-hover:text-white/70 transition">↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}