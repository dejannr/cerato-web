"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@untitledui/icons/ArrowRight";
import { ArrowUpRight } from "@untitledui/icons/ArrowUpRight";
import { motionTokens } from "@/lib/motion";

function useRevealTransition() {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.32 },
    transition: { duration: reduceMotion ? motionTokens.duration.sm : motionTokens.duration.lg, ease: motionTokens.ease.out },
  };
}

export function PageHero({ eyebrow, title, children, primary = true }) {
  const reveal = useRevealTransition();
  return <motion.section className="page-hero container" initial={reveal.initial} animate={reveal.whileInView} transition={{ duration: motionTokens.duration.md, ease: motionTokens.ease.out }}><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="page-hero-copy">{children}</div>}{primary && <Link className="button-primary" href="/contact">Start a project <ArrowUpRight /></Link>}</motion.section>;
}

export function SectionHeading({ eyebrow, title, children }) {
  const reveal = useRevealTransition();
  return <motion.div className="section-heading" {...reveal}><p className="eyebrow">{eyebrow}</p><div><h2>{title}</h2>{children}</div></motion.div>;
}

export function FinalCta({ title, body }) {
  const reveal = useRevealTransition();
  return <motion.section className="final-cta" {...reveal}><div className="container"><h2>{title}</h2>{body && <p>{body}</p>}<Link className="button-primary" href="/contact">Start a project <ArrowUpRight /></Link></div></motion.section>;
}

export function PlaceholderVisual({ label, className = "" }) { return <div className={`placeholder-visual ${className}`}><div className="placeholder-label"><span>PLACEHOLDER</span><strong>{label}</strong></div><div className="placeholder-grid" /></div>; }

export function CaseStudyCard({ study }) {
  const reveal = useRevealTransition();
  return <motion.article className="case-card" {...reveal}><PlaceholderVisual label={`CASE STUDY / ${study.slug.replaceAll("-", " ")}`} /><div className="case-card-copy"><p className="eyebrow">{study.industry}</p><h3>{study.title}</h3><p>{study.summary}</p><Link className="text-link" href={`/customers/${study.slug}`}>Read case study <ArrowRight /></Link></div></motion.article>;
}
