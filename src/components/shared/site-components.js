import Link from "next/link";
import { ArrowRight } from "@untitledui/icons/ArrowRight";
import { ArrowUpRight } from "@untitledui/icons/ArrowUpRight";

export function PageHero({ eyebrow, title, children, primary = true }) { return <section className="page-hero container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="page-hero-copy">{children}</div>}{primary && <Link className="button-primary" href="/contact">Start a project <ArrowUpRight /></Link>}</section>; }
export function SectionHeading({ eyebrow, title, children }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><div><h2>{title}</h2>{children}</div></div>; }
export function FinalCta({ title, body }) { return <section className="final-cta"><div className="container"><h2>{title}</h2>{body && <p>{body}</p>}<Link className="button-primary" href="/contact">Start a project <ArrowUpRight /></Link></div></section>; }
export function PlaceholderVisual({ label, className = "" }) { return <div className={`placeholder-visual ${className}`}><div className="placeholder-label"><span>PLACEHOLDER</span><strong>{label}</strong></div><div className="placeholder-grid" /></div>; }
export function CaseStudyCard({ study }) { return <article className="case-card"><PlaceholderVisual label={`CASE STUDY / ${study.slug.replaceAll("-", " ")}`} /><div className="case-card-copy"><p className="eyebrow">{study.industry}</p><h3>{study.title}</h3><p>{study.summary}</p><Link className="text-link" href={`/customers/${study.slug}`}>Read case study <ArrowRight /></Link></div></article>; }
