"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";


export default function HomeHero({ play }: { play: boolean }) {
  const reduce = useReducedMotion();

  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: 0.10, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.01 }
        : { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
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
        <motion.div
          variants={parent}
          initial="hidden"
          animate={play ? "show" : "hidden"}
        >
          {/* <motion.div variants={item} className="flex flex-wrap gap-2">
            <Chip tone="blue">Yale Builders</Chip>
            <Chip tone="neutral">Student-run</Chip>
            <Chip tone="cyan">Ship fast</Chip>
          </motion.div> */}

          <motion.h1
            className="mt-7 text-balance text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Where Yalies build what’s next.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-white/75 md:text-xl"
          >
            Programs, mentorship, and events built for founders, builders, and operators —
            designed to turn momentum into outcomes.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-3">
            <Button href="/join" variant="primary">Join YES</Button>
            <Button href="/programs" variant="secondary">Explore Programs</Button>
          </motion.div>

          <motion.div className="mt-12 flex flex-wrap gap-8 text-sm text-white/70">
            <div><span className="text-white">450+</span> members</div>
            <div><span className="text-white">60+</span> events/year</div>
            <div><span className="text-white">∞</span> builder energy</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={
            play
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 26, scale: 0.98 }
          }
          transition={reduce ? { duration: 0.01 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-[1px] bg-gradient-to-br from-electric-blue/40 via-white/10 to-signal-cyan/35"
        >
          <motion.div
            className="relative h-[440px] rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
            animate={reduce ? {} : { y: [0, -6, 0] }}
            transition={reduce ? {} : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-blue/10 via-transparent to-signal-cyan/10" />
            <div className="relative flex h-full items-center justify-center">
              <Image
                src="/brand/yes-logo.webp"
                alt="Yale Entrepreneurial Society"
                width={680}
                height={340}
                className="opacity-95"
                priority
                sizes="(max-width: 768px) 90vw, 560px"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}