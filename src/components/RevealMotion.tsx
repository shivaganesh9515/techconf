"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealMotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealMotion({
  children,
  delay = 0,
  className,
}: RevealMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
