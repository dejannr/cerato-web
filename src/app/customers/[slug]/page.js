import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { FinalCta } from "@/components/shared/site-components";
import { Reveal } from "@/components/shared/reveal";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return { title: study.meta?.title || `${study.title} — Cerato Systems`, description: study.meta?.description || study.summary, openGraph: { title: study.meta?.ogTitle || study.title, description: study.meta?.ogDescription || study.summary } };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <>
    <article className="case-study container">
      <Reveal className="case-study-intro" amount={0.1}><Link className="back-link" href="/customers">← Back to Customers</Link><p className="eyebrow">{study.eyebrow || study.industry}</p><h1>{study.title}.</h1><div className="case-summary">{(study.heroBody || [study.summary]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{study.facts?.length > 0 && <dl className="facts">{study.facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}</Reveal>
      <CaseVisual visual={study.heroVisual} hero />
      <CaseBlock {...study.challenge} />
      <CaseBlock {...study.goal} />
      <CaseBlock {...study.solution} />
      {study.sections?.map((section) => <CaseBlock key={section.heading} {...section} />)}
      <CaseBlock {...study.outcome} outcome />
      <CaseBlock {...study.closing} />
    </article>
    <FinalCta title="Has your operation outgrown the tools holding it together?" body="If important parts of your business still depend on spreadsheets, messages, repeated calculations, or processes that only a few people know how to run, let's talk about what a system built around the operation could look like." />
  </>;
}

function CaseVisual({ visual, hero = false }) {
  if (!visual?.image) return null;
  return <Reveal className={`case-visual ${hero ? "case-visual--hero" : ""} ${visual.orientation ? `case-visual--${visual.orientation}` : ""}`}><div className="case-screenshot"><img src={visual.image} alt={visual.alt || visual.label} /></div>{visual.caption && <p>{visual.caption}</p>}</Reveal>;
}

function CaseBlock({ eyebrow, heading, body, callout, capabilities, bullets, groups, subheading, supportingCopy, visual, additionalVisual, technologies, ownership, closing, layout, outcome = false }) {
  if (!heading) return null;
  const headingContent = <>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{heading}</h2></>;
  const detailContent = <>
    {body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {callout && <blockquote className="case-callout">{callout}</blockquote>}
    {capabilities?.length > 0 && <CompactList items={capabilities} className="case-capabilities" />}
    {bullets?.length > 0 && <CompactList items={bullets} />}
    {subheading && <h3>{subheading}</h3>}{supportingCopy && <p>{supportingCopy}</p>}
    {technologies?.length > 0 && <><h3>Technology</h3><CompactList items={technologies} className="case-technologies" /></>}
    {ownership?.length > 0 && <><h3>Scope of ownership</h3><CompactList items={ownership} className="case-ownership" /></>}
    {closing && <p className="case-closing">{closing}</p>}
  </>;
  const content = <>{headingContent}{detailContent}</>;
  return <Reveal as="section" className={`case-block ${outcome ? "case-block--outcome" : ""} ${layout ? `case-block--${layout}` : ""}`}>
    {layout === "split" ? <>{headingContent}<div className="case-split"><div className="case-split-copy">{detailContent}</div><CaseVisual visual={visual} /></div></> : <>{content}<CaseVisual visual={visual} />{groups?.length > 0 && <div className="case-feature-groups">{groups.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>}<CaseVisual visual={additionalVisual} /></>}
  </Reveal>;
}

function CompactList({ items, className = "" }) { return <ul className={`case-list ${className}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
