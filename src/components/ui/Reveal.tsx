"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 16,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
