"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Program } from "@/data/programs";

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type DetailSection = {
  id: string;
  title: string;
  body?: string;
  extra?: string;
  items?: string[];
  links?: { label: string; href?: string }[];
};

export default function ProgramDetail({ program }: { program: Program }) {
  const { scrollY } = useScroll();
  const sections = useMemo<DetailSection[]>(() => {
    const overview = {
      id: sectionId("Overview"),
      title: "Overview",
      body: program.description,
      extra: program.oneLiner,
    };
    const rest =
      program.sections?.map((section) => ({
        ...section,
        id: sectionId(section.title),
      })) ?? [];
    return [overview, ...rest];
  }, [program.description, program.oneLiner, program.sections]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!sections.length) return;
    const offset = 140;
    let currentIndex = 0;
    sections.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const top = el.getBoundingClientRect().top - offset;
      if (top <= 0) currentIndex = index;
    });
    if (latest < 8) currentIndex = 0;
    setActiveIndex(currentIndex);
  });

  const progress =
    sections.length > 1
      ? Math.min(100, (activeIndex / (sections.length - 1)) * 100)
      : 0;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      <div className="mt-4">
        <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
          PROGRAM
        </div>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {program.name}
        </h1>
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

      {sections.length > 0 && (
        <div className="mt-10 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
              ON THIS PAGE
            </div>
            <div className="mt-5 flex gap-4">
              <div className="relative">
                <div className="relative flex flex-col items-center gap-4 py-1">
                  <div className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-white/15" />
                  <motion.div
                    className="absolute left-1/2 top-1 w-px -translate-x-1/2 bg-signal-cyan/70"
                    animate={{ height: `${progress}%` }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                  {sections.map((section, index) => {
                    const active = index <= activeIndex;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="relative z-10 flex h-5 w-5 items-center justify-center"
                        aria-label={`Jump to ${section.title}`}
                      >
                        <motion.span
                          className={[
                            "h-2.5 w-2.5 rounded-full border",
                            active
                              ? "border-signal-cyan/80 bg-signal-cyan/70"
                              : "border-white/25 bg-black/60",
                          ].join(" ")}
                          animate={{ scale: active ? 1.15 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <ul className="space-y-4 text-sm text-white/70">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={[
                        "text-left transition hover:text-white",
                        index === activeIndex ? "text-white" : "",
                      ].join(" ")}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {program.ctas && program.ctas.length > 0 && (
              <div className="mt-6 flex flex-col gap-2">
                {program.ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant ?? (index === 0 ? "primary" : "secondary")}
                    className="w-full"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_220px]">
        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.title}
              id={section.id}
              className="scroll-mt-28 border-t border-white/10 pt-8"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.body && (
                <p className="mt-3 max-w-2xl text-white/70">{section.body}</p>
              )}
              {section.extra && (
                <p className="mt-3 max-w-2xl text-white/70">{section.extra}</p>
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
              <div className="mt-5 flex gap-4">
                <div className="relative">
                  <div className="relative flex flex-col items-center gap-4 py-1">
                    <div className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-white/15" />
                    <motion.div
                      className="absolute left-1/2 top-1 w-px -translate-x-1/2 bg-signal-cyan/70"
                      animate={{ height: `${progress}%` }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                    {sections.map((section, index) => {
                      const active = index <= activeIndex;
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className="relative z-10 flex h-5 w-5 items-center justify-center"
                          aria-label={`Jump to ${section.title}`}
                        >
                          <motion.span
                            className={[
                              "h-2.5 w-2.5 rounded-full border",
                              active
                                ? "border-signal-cyan/80 bg-signal-cyan/70"
                                : "border-white/25 bg-black/60",
                            ].join(" ")}
                            animate={{ scale: active ? 1.15 : 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-white/70">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={[
                          "text-left transition hover:text-white",
                          index === activeIndex ? "text-white" : "",
                        ].join(" ")}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {program.ctas && program.ctas.length > 0 && (
                <div className="mt-6 flex flex-col gap-2">
                  {program.ctas.map((cta, index) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={cta.variant ?? (index === 0 ? "primary" : "secondary")}
                      className="w-full"
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              )}
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
