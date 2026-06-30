"use client";

import { motion } from "framer-motion";

interface PageSectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageSectionHeader({
  title,
  description,
  centered = false,
}: PageSectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
