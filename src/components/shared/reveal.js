"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function Reveal({ children, className, delay = 0, amount = 0.32, as = "div", ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion[as] || motion.div;
  return <MotionElement className={className} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount }} variants={fadeUp} transition={{ delay }} {...props}>{children}</MotionElement>;
}
