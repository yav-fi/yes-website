"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Program } from "@/data/programs";

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProgramDetail({ program }: { program: Program }) {
  const sections = useMemo(() => program.sections ?? [], [program.sections]);
  const { scrollY } = useScroll();
  const stickyY = useTransform(scrollY, [0, 140], [16, 0]);
  const stickyOpacity = useTransform(scrollY, [0, 140], [0, 1]);
  const heroOpacity = useTransform(scrollY, [0, 140], [1, 0]);
  const heroY = useTransform(scrollY, [0, 140], [0, -18]);
  const [isCompact, setIsCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCompact(latest > 140);
  });

  return (
    <div className="relative">
      <div className="sticky top-20 z-40">
        <motion.div
          style={{ y: stickyY, opacity: stickyOpacity }}
          className={[
            "rounded-2xl border border-white/10 bg-black/60 px-5 py-3",
            "backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
            "transition-opacity",
            isCompact ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 text-lg font-semibold">{program.name}</div>
            {program.ctas && program.ctas.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {program.ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant ?? (index === 0 ? "primary" : "secondary")}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div style={{ opacity: heroOpacity, y: heroY }}>
        <div className="mt-4">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            PROGRAM
          </div>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {program.name}
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">{program.description}</p>
          <p className="mt-4 max-w-2xl text-white/70">{program.oneLiner}</p>
          {program.ctas && program.ctas.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {program.ctas.map((cta, index) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant ?? (index === 0 ? "primary" : "secondary")}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_220px]">
        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.title}
              id={sectionId(section.title)}
              className="scroll-mt-28 border-t border-white/10 pt-8"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.body && (
                <p className="mt-3 max-w-2xl text-white/70">{section.body}</p>
              )}
              {section.items && (
                <ul className="mt-4 space-y-2 text-white/70">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
              {section.links && (
                <ul className="mt-4 space-y-2 text-white/70">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className="underline decoration-white/30 underline-offset-4 transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {sections.length > 0 && (
          <aside className="hidden md:block">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
                ON THIS PAGE
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {sections.map((section) => (
                  <li key={section.title}>
                    <a
                      href={`#${sectionId(section.title)}`}
                      className="transition hover:text-white"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>

      <div className="mt-12">
        <Button href="/programs" variant="secondary">
          Back to programs
        </Button>
      </div>
    </div>
  );
}
