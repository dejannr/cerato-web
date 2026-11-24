"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, json } from "@/lib/demo-api";

export default function SignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const registering = mode === "register";
    const payload = registering
      ? { name: form.get("name"), email: form.get("email"), password: form.get("password"), company_name: form.get("company_name") }
      : { email: form.get("email"), password: form.get("password") };
    try {
      await api(registering ? "/auth/register" : "/auth/login", json(payload));
      window.dispatchEvent(new Event("cerato-auth-changed"));
      router.push("/demos");
      router.refresh();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  return <section className="account-page account-page--auth container">
    <div className="account-copy">
      <p className="eyebrow">ONE CERATO ACCOUNT</p>
      <h1>{mode === "login" ? "Sign in once. Open your demos." : "Start your 30-day demo trial."}</h1>
      <p className="account-intro">Use one account to access the Cerato demo workspaces available to your company.</p>
      <div className="account-benefits"><p><span>01</span>One sign-in across Cerato demos</p><p><span>02</span>Your workspace and trial stay together</p></div>
      <Link className="account-back-link" href="/">Back to Cerato Systems</Link>
    </div>
    <div className="account-card">
      <div className="account-card-heading"><p className="eyebrow">ACCOUNT ACCESS</p><h2>{mode === "login" ? "Welcome back." : "Create your account."}</h2><p>{mode === "login" ? "Sign in to continue to your demos." : "Set up your company workspace to begin."}</p></div>
      <div className="account-tabs"><button className={mode === "login" ? "active" : ""} type="button" onClick={() => { setMode("login"); setError(""); }}>Sign in</button><button className={mode === "register" ? "active" : ""} type="button" onClick={() => { setMode("register"); setError(""); }}>Create account</button></div>
      <form className="account-form" onSubmit={submit}>
        {mode === "register" && <label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label>}
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        {mode === "register" && <label>Company name<input name="company_name" autoComplete="organization" required maxLength={180} /></label>}
        <label>Password<input name="password" type="password" autoComplete={mode === "register" ? "new-password" : "current-password"} minLength={mode === "register" ? 12 : 1} required /></label>
        {error && <p className="account-error" role="alert">{error}</p>}
        <button className="button-primary account-submit" disabled={busy}>{busy ? "Please wait…" : mode === "login" ? "Sign in" : "Create account and continue"}</button>
      </form>
      <p className="account-footnote">No payment method is required for the 30-day trial.</p>
    </div>
  </section>;
}
