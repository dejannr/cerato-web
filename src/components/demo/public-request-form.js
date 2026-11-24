"use client";

import { useEffect, useState } from "react";
import { api, json } from "@/lib/demo-api";

export default function PublicRequestForm({ token }) {
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api(`/public/forms/${token}`).then(setCompany).catch((e) => setError(e.message)).finally(() => setLoading(false));
  }, [token]);

  async function submit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    for (const field of ["pickup_date", "delivery_date", "pieces", "weight_kg"]) if (!values[field]) values[field] = null;
    if (values.pieces) values.pieces = Number(values.pieces);
    if (values.weight_kg) values.weight_kg = Number(values.weight_kg);
    try {
      const response = await api(`/public/forms/${token}/requests`, json(values));
      setSent(response.request_number);
      formElement.reset();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return <main className="public-page"><header className="public-brand"><span className="brand-symbol">C</span><span>Cerato Systems</span><span className="public-brand-divider" />Shipment request</header>{loading ? <div className="public-card"><p>Loading request form…</p></div> : sent ? <section className="public-card success-card"><div className="success-icon">✓</div><p className="kicker">REQUEST RECEIVED</p><h1>Thanks. We have your request.</h1><p>Your reference is <strong>{sent}</strong>. The operations team will review the details and follow up if anything else is needed.</p></section> : company ? <section className="public-card"><p className="kicker">{company.company_name}</p><h1>Tell us about your shipment.</h1><p className="public-intro">Share the details you have. The operations team can follow up if anything is missing.</p><form className="request-form public-form" onSubmit={submit}><div className="field-grid"><label>Your name<input name="requester_name" autoComplete="name" required /></label><label>Company<input name="requester_company" autoComplete="organization" /></label><label>Email<input name="requester_email" type="email" autoComplete="email" required /></label><label>Phone<input name="requester_phone" type="tel" /></label><label>Pickup location<input name="pickup_location" /></label><label>Delivery location<input name="delivery_location" /></label><label>Pickup date<input name="pickup_date" type="date" /></label><label>Delivery date<input name="delivery_date" type="date" /></label><label>Cargo description<input name="cargo_description" /></label><label>Reference number<input name="reference_number" /></label><label>Pieces<input name="pieces" type="number" min="0" /></label><label>Weight (kg)<input name="weight_kg" type="number" min="0" step="0.1" /></label></div><label>Special handling<textarea name="special_handling" rows="3" /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="primary-button full-width" disabled={busy}>{busy ? "Sending request…" : "Submit shipment request"}<span>→</span></button><p className="privacy-hint">Your details will be shared with {company.company_name} to process this shipment request.</p></form></section> : <section className="public-card error-card"><p className="kicker">FORM UNAVAILABLE</p><h1>This request form isn’t available.</h1><p>{error || "Please contact the company that shared this link."}</p></section>}<footer className="public-footer">Powered by Cerato Systems</footer></main>;
}
