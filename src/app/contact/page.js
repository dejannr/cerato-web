import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/site-components";
import { Reveal } from "@/components/shared/reveal";
export const metadata = { title: "Start a Logistics Software Project — Cerato Systems", description: "Talk to Cerato Systems about logistics automation, transportation operations software, TMS and ERP integrations, or custom workflow tools." };
export default function ContactPage() { return <><PageHero eyebrow="Start a project" title="Tell us where the operation is getting stuck." primary={false}><p>You do not need a finished specification.</p><p>Tell us how the workflow works today, where manual work is happening, which systems are involved, and what you would like to improve.</p></PageHero><Reveal as="section" className="container contact-section"><ContactForm /></Reveal></>; }
