"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}
