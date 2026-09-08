"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function Reveal({ children, className, delay = 0, amount = 0.2 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount }} variants={fadeUp} transition={{ delay }}>{children}</motion.div>;
}
