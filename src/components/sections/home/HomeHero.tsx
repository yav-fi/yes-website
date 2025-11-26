"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Members", value: "450+" },
  { label: "Events / year", value: "60+" },
  { label: "Builder energy", value: "∞" },
];

const heroEase = [0.16, 1, 0.3, 1] as const;
const heroImageEase = [0.22, 1, 0.36, 1] as const;

export default function HomeHero({ play }: { play: boolean }) {
  const reduce = useReducedMotion();

  const parent = {
    hidden: { opacity: 0, y: 20, filter: "blur(18px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: 0.12, delayChildren: 0.08, duration: 0.5, ease: heroEase },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduce
        ? { duration: 0.01 }
        : { duration: 0.8, ease: heroEase },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background (no blur animation; just static glows) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-electric-blue/12 blur-3xl" />
        <div className="absolute -bottom-64 left-1/2 h-[520px] w-[950px] -translate-x-1/2 rounded-full bg-signal-cyan/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <Container className="relative grid items-center gap-10 py-24 md:grid-cols-2 md:py-36">
        <motion.div variants={parent} initial="hidden" animate={play ? "show" : "hidden"}>
          

          <motion.h1 variants={item} className="mt-7 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Where Yalies build what’s next.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/75 md:text-xl">
            Programs, mentorship, and events built for founders, builders, and operators —
            designed to turn momentum into outcomes.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Button href="/join" variant="primary">
              Join YES
            </Button>
            <Button href="/programs" variant="secondary">
              Explore Programs
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-8 text-sm text-white/70"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(16px)" }}
          animate={
            play
              ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, y: 40, scale: 0.96, filter: "blur(16px)" }
          }
          transition={reduce ? { duration: 0.01 } : { duration: 1, ease: heroEase }}
          className="rounded-3xl p-[1px] bg-gradient-to-br from-electric-blue/40 via-white/10 to-signal-cyan/35 shadow-[0_40px_120px_rgba(12,20,43,0.45)]"
        >
          <motion.div
            className="relative h-[440px] rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
            animate={reduce ? {} : { y: [0, -6, 0] }}
            transition={reduce ? {} : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-blue/10 via-transparent to-signal-cyan/10" />
            <div className="relative flex h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={reduce ? { duration: 0.01 } : { duration: 1, ease: heroImageEase }}
              >
                <Image
                  src="/brand/yes-logo.webp"
                  alt="Yale Entrepreneurial Society"
                  width={680}
                  height={340}
                  className="opacity-95"
                  priority
                  sizes="(max-width: 768px) 90vw, 560px"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
