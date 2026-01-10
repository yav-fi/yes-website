"use client";

import Link from "next/link";
import { programs } from "@/data/programs";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const MotionLink = motion(Link);

export default function ProgramsGrid() {
  return (
    <div>
      <LayoutGroup>
        <motion.div
          layout
          transition={{ layout: { duration: 0.26, ease: "easeOut" } }}
          className="grid gap-5 md:grid-cols-3"
        >
          <AnimatePresence initial={false} mode="sync">
            {programs.map((p) => (
              <MotionLink
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
                <div className="text-lg font-semibold">{p.name}</div>
                <p className="mt-3 text-white/70">{p.oneLiner}</p>
                <div className="mt-5 text-sm font-semibold text-white/80">
                  {p.cardCtaLabel ?? "Learn more"}{" "}
                  <span className="text-white/40">↗</span>
                </div>
              </MotionLink>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
