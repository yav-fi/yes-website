"use client";

import { useMemo, useState } from "react";
import { team } from "@/data/team";

const groups = ["All", "Exec", "Programs", "Events", "Tech", "Finance", "Community"] as const;

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
            className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
              active === g
                ? "border-signal-cyan/40 bg-signal-cyan/10"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {shown.map((m) => (
          <div
            key={m.name + m.role}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
          >
            <div className="text-lg font-semibold">{m.name}</div>
            <div className="mt-1 text-sm text-white/70">{m.role}</div>
            <div className="mt-3 text-sm text-white/70">{m.bio}</div>

            {m.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {m.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}