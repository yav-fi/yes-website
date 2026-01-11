"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Program, ProgramSection } from "@/data/programs";

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type DetailSection = Omit<ProgramSection, "subsections"> & {
  id: string;
  extra?: string;
  subsections?: DetailSection[];
};

type NavItem = {
  id: string;
  title: string;
  depth: number;
};

export default function ProgramDetail({ program }: { program: Program }) {
  const { scrollY } = useScroll();
  const sections = useMemo<DetailSection[]>(() => {
    const addIds = (section: ProgramSection, trail: string[]): DetailSection => {
      const id = sectionId(trail.join("-"));
      const subsections = section.subsections?.map((sub) =>
        addIds(sub, [...trail, sub.title])
      );
      return { ...section, id, subsections };
    };

    const overview: DetailSection = {
      id: "overview",
      title: "Overview",
      body: program.description,
      extra: program.oneLiner,
    };

    const rest =
      program.sections?.map((section) => addIds(section, [section.title])) ?? [];
    return [overview, ...rest];
  }, [program.description, program.oneLiner, program.sections]);
  const navItems = useMemo<NavItem[]>(() => {
    const items: NavItem[] = [];
    const walk = (section: DetailSection, depth: number) => {
      items.push({ id: section.id, title: section.title, depth });
      section.subsections?.forEach((sub) => walk(sub, depth + 1));
    };
    sections.forEach((section) => walk(section, 0));
    return items;
  }, [sections]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!navItems.length) return;
    const offset = 140;
    let currentIndex = 0;
    navItems.forEach((item, index) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const top = el.getBoundingClientRect().top - offset;
      if (top <= 0) currentIndex = index;
    });
    if (latest < 8) currentIndex = 0;
    setActiveIndex(currentIndex);
  });

  const progress =
    navItems.length > 1
      ? Math.min(100, (activeIndex / (navItems.length - 1)) * 100)
      : 0;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderSectionContent = (section: DetailSection) => (
    <>
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
      {section.actions && (
        <div className="mt-5 flex flex-wrap gap-2">
          {section.actions.map((action, index) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? (index === 0 ? "primary" : "secondary")}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </>
  );

  const renderSections = (items: DetailSection[], depth = 0) =>
    items.map((section) => {
      const HeadingTag = depth === 0 ? "h2" : depth === 1 ? "h3" : "h4";
      const headingClass =
        depth === 0
          ? "text-2xl font-semibold"
          : depth === 1
          ? "text-lg font-semibold text-white/90"
          : "text-base font-semibold text-white/85";
      const sectionClass =
        depth === 0
          ? "scroll-mt-28 border-t border-white/10 pt-8"
          : "scroll-mt-28 pt-4";
      const childSpacing = depth === 0 ? "mt-6 space-y-8" : "mt-5 space-y-6";

      return (
        <section key={section.id} id={section.id} className={sectionClass}>
          <HeadingTag className={headingClass}>{section.title}</HeadingTag>
          {renderSectionContent(section)}
          {section.subsections && section.subsections.length > 0 && (
            <div className={childSpacing}>
              {renderSections(section.subsections, depth + 1)}
            </div>
          )}
        </section>
      );
    });

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

      <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_220px]">
        <div className="space-y-12">{renderSections(sections)}</div>

        {navItems.length > 0 && (
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
                    {navItems.map((item, index) => {
                      const active = index <= activeIndex;
                      const dotSize =
                        item.depth === 0 ? "h-2.5 w-2.5" : item.depth === 1 ? "h-2 w-2" : "h-1.5 w-1.5";
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className="relative z-10 flex h-5 w-5 items-center justify-center"
                          aria-label={`Jump to ${item.title}`}
                        >
                          <motion.span
                            className={[
                              "rounded-full border",
                              dotSize,
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

                <ul className="space-y-3 text-sm text-white/70">
                  {navItems.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={[
                          "text-left transition hover:text-white",
                          item.depth === 0
                            ? "text-sm text-white/80"
                            : item.depth === 1
                            ? "text-xs text-white/60"
                            : "text-[11px] text-white/50",
                          index === activeIndex ? "text-white" : "",
                        ].join(" ")}
                        style={{ paddingLeft: item.depth * 12 }}
                      >
                        {item.title}
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
