import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/site-components";
export const metadata = { title: "Start a Project — Cerato Systems", description: "Tell Cerato Systems about the workflow, process, or operational problem you want to improve." };
export default function ContactPage() { return <><PageHero eyebrow="Start a project" title="Tell us what your business is trying to solve." primary={false}><p>You do not need a finished specification.</p><p>Tell us how the process works today, where it is causing problems, and what you would like to improve. We can take the conversation from there.</p></PageHero><section className="container contact-section"><ContactForm /></section></>; }
