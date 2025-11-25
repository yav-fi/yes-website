"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Container className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="flex flex-wrap gap-2">
            <Chip tone="blue">Yale Builders</Chip>
            <Chip tone="neutral">Student-run</Chip>
            <Chip tone="cyan">Ship fast</Chip>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Where Yale builds what’s next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-white/75"
          >
            Programs, mentorship, and events built for founders, builders, and
            operators — designed to turn momentum into outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/join" variant="primary">
              Join YES
            </Button>
            <Button href="/programs" variant="secondary">
              Explore Programs
            </Button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <div>
              <span className="text-white">450+</span> members
            </div>
            <div>
              <span className="text-white">60+</span> events/year
            </div>
            <div>
              <span className="text-white">∞</span> builder energy
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[360px] rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/15 via-transparent to-signal-cyan/10" />
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/brand/yes-logo.webp"
              alt="Yale Entrepreneurial Society"
              width={560}
              height={280}
              className="opacity-90"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}