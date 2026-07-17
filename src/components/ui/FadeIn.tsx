"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

export function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const variants =
    direction === "left" ? fadeLeft : direction === "right" ? fadeRight : fadeUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
