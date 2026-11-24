"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/lib/demo-api";

export default function MyDemosPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [demoHref, setDemoHref] = useState("/demo1");

  useEffect(() => {
    api("/auth/me").then(setSession).catch(() => setSession(null)).finally(() => setLoading(false));
    if (window.location.hostname !== "localhost" && !window.location.hostname.endsWith(".localhost")) {
      setDemoHref("https://demo1.ceratosystems.com");
    }
  }, []);

  if (loading) return <main className="demos-page container"><p className="eyebrow">CERATO DEMO LIBRARY</p><h1>Loading your demos<span className="loading-dots">…</span></h1><div className="demos-loading-line" /></main>;
  if (!session) return <main className="demos-page container"><p className="eyebrow">CERATO DEMO LIBRARY</p><h1>Sign in to see your demos.</h1><p className="demos-lede">Your Cerato account gives you access to the demo workspaces available to your company.</p><Link className="button-primary" href="/sign-in">Sign in <span aria-hidden="true">→</span></Link></main>;

  const frozen = session.company?.state === "frozen";
  const trialEnd = session.company?.trial_ends_at
    ? new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(session.company.trial_ends_at))
    : null;

  return <main className="demos-page container">
    <header className="demos-page-heading">
      <div><p className="eyebrow">CERATO DEMO LIBRARY</p><h1>Your demos<span>.</span></h1><p className="demos-lede">A single place to open the tools available to your company.</p></div>
      <div className="demos-workspace"><span className="demos-overline">COMPANY WORKSPACE</span><strong>{session.company?.name || "No company workspace"}</strong><span className="demos-account-email">Signed in as {session.user.email}</span></div>
    </header>

    <section className="demos-available" aria-labelledby="available-demos-title">
      <div className="demos-section-heading"><div><p className="eyebrow">AVAILABLE TO YOU</p><h2 id="available-demos-title">Explore your demos</h2></div><span className="demos-count"><i /> 01 MODULE</span></div>
      <article className="demo-library-card">
        <div className="demo-library-visual" aria-hidden="true">
          <div className="demo-preview-window"><div className="demo-preview-toolbar"><span className="demo-preview-mark">C</span><span>REQUEST QUEUE</span><i>•••</i></div>
            <div className="demo-preview-record"><span className="demo-preview-record-icon">↗</span><div><strong>SR-1048</strong><small>Shipment request · Today</small></div><span className="demo-preview-status">READY</span></div>
            <div className="demo-preview-record demo-preview-record--muted"><span className="demo-preview-record-icon">↗</span><div><strong>SR-1047</strong><small>Waiting for customer details</small></div><span className="demo-preview-waiting">WAITING</span></div>
            <div className="demo-preview-footer"><span>Workflow progress</span><div><i /><i /><i /><i /></div><b>03 / 04</b></div>
          </div>
          <span className="demo-visual-caption">FROM INTAKE TO HANDOFF</span>
        </div>
        <div className="demo-library-content">
          <div className="demo-library-meta"><span>DEMO 01 <i>/</i> SHIPMENT OPERATIONS</span><span className={frozen ? "demo-trial-state demo-trial-state--frozen" : "demo-trial-state"}><i />{frozen ? "TRIAL ENDED" : "30-DAY TRIAL"}</span></div>
          <h3>Shipment Request Intake</h3>
          <p className="demo-library-description">Turn scattered shipment requests into complete, trackable jobs. Collect details, follow up on missing information, and hand ready requests to your team.</p>
          <div className="demo-workflow-steps"><span>Request intake</span><span>Completeness check</span><span>Customer follow-up</span><span>Team handoff</span></div>
          <div className="demo-library-bottom"><div className="demo-trial-detail"><span>{frozen ? "Access paused" : "Trial includes all features"}</span>{trialEnd && <small>{frozen ? "Ended" : "Through"} {trialEnd}</small>}</div><a className="button-primary" href={demoHref}>{frozen ? "View access notice" : "Open Demo 1"}<span aria-hidden="true">↗</span></a></div>
        </div>
      </article>
    </section>
    <footer className="demos-page-footer"><span>MORE DEMOS WILL APPEAR HERE AS THEY BECOME AVAILABLE</span><span>01 <i>/</i> 01</span></footer>
  </main>;
}
