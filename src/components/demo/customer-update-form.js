"use client";

import { useEffect, useState } from "react";
import { api, json } from "@/lib/demo-api";

export default function CustomerUpdateForm({ token }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api(`/public/updates/${token}`).then(setData).catch((e) => setError(e.message)).finally(() => setLoading(false));
  }, [token]);

  async function submit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const values = Object.fromEntries(form.entries());
    for (const field of ["pieces", "weight_kg"]) if (values[field] !== undefined && values[field] !== "") values[field] = Number(values[field]);
    setBusy(true);
    setError("");
    try {
      await api(`/public/updates/${token}`, json({ values }));
      setSent(true);
      formElement.reset();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return <main className="public-page"><header className="public-brand"><span className="brand-symbol">C</span><span>Cerato Systems</span><span className="public-brand-divider" />Secure update</header>{loading ? <div className="public-card"><p>Loading your update link…</p></div> : sent ? <section className="public-card success-card"><div className="success-icon">✓</div><p className="kicker">DETAILS RECEIVED</p><h1>Thank you for the update.</h1><p>The operations team has received your information for request <strong>{data?.request_number}</strong>.</p></section> : data ? <section className="public-card"><p className="kicker">{data.company_name} · {data.request_number}</p><h1>Complete the shipment details.</h1><p className="public-intro">Only the requested details for this shipment are available through this secure link.</p><form className="request-form public-form" onSubmit={submit}><div className="field-grid">{data.fields.map((field) => <label key={field.id}>{field.label}<input name={field.id} type={field.id.endsWith("date") ? "date" : field.id === "pieces" || field.id === "weight_kg" ? "number" : "text"} step={field.id === "weight_kg" ? "0.1" : undefined} min={field.id === "pieces" || field.id === "weight_kg" ? "0" : undefined} defaultValue={field.value ?? ""} /></label>)}</div>{error && <p className="form-error" role="alert">{error}</p>}<button className="primary-button full-width" disabled={busy}>{busy ? "Sending update…" : "Send updated details"}<span>→</span></button></form></section> : <section className="public-card error-card"><p className="kicker">UPDATE LINK UNAVAILABLE</p><h1>This link can’t be used.</h1><p>{error || "Please contact the company that sent it."}</p></section>}<footer className="public-footer">Powered by Cerato Systems</footer></main>;
}
