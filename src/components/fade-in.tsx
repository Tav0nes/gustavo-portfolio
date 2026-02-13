"use client";
import { motion } from "motion/react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden w-full"
    >
      {children}
    </motion.div>
  );
}