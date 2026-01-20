"use client";

import Link from "next/link";
import { programs } from "@/data/programs";

export default function ProgramsGrid() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {programs.map((p) => (
          <Link
            key={p.slug}
            href={`/programs/${p.slug}`}
            className={[
              "rounded-2xl border border-white/10 bg-white/5 p-6",
              "transition-transform transition-colors duration-200 ease-out",
              "hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06]",
            ].join(" ")}
          >
            <div className="text-lg font-semibold">{p.name}</div>
            <p className="mt-3 text-white/70">{p.oneLiner}</p>
            <div className="mt-5 text-sm font-semibold text-white/80">
              {p.cardCtaLabel ?? "Learn more"}{" "}
              <span className="text-white/40">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
