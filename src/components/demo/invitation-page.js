"use client";

import { useEffect, useState } from "react";
import { api, json } from "@/lib/demo-api";

export default function InvitationPage({ token }) {
  const [invitation, setInvitation] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState("register");

  useEffect(() => {
    Promise.all([
      api(`/public/invitations/${token}`),
      api("/auth/me").catch(() => null),
    ]).then(([invite, current]) => { setInvitation(invite); setSession(current); }).catch((e) => setError(e.message)).finally(() => setLoading(false));
  }, [token]);

  async function accept(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (session) {
        await api(`/company/invitations/${token}/accept`, json({}));
      } else if (mode === "login") {
        const form = new FormData(event.currentTarget);
        await api("/auth/login", json({ email: invitation.email, password: form.get("password") }));
        await api(`/company/invitations/${token}/accept`, json({}));
      } else {
        const form = new FormData(event.currentTarget);
        await api("/auth/register", json({
          name: form.get("name"),
          email: invitation.email,
          password: form.get("password"),
          company_name: invitation.company_name,
          invite_token: token,
        }));
      }
      const onDemoHost = window.location.hostname.startsWith("demo1.") || window.location.hostname === "demo1.localhost";
      window.location.assign(onDemoHost ? "/" : "/demo1");
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  const wrongAccount = session && session.user.email.toLowerCase() !== invitation?.email.toLowerCase();

  return <main className="public-page"><header className="public-brand"><span className="brand-symbol">C</span><span>Cerato Systems</span><span className="public-brand-divider" />Company invitation</header>{loading ? <div className="public-card"><p>Checking invitation…</p></div> : invitation ? <section className="public-card invite-card"><p className="kicker">TEAM INVITATION</p><h1>Join {invitation.company_name}.</h1><p className="public-intro">This invitation was sent to <strong>{invitation.email}</strong>. It expires on {new Date(invitation.expires_at).toLocaleDateString()}.</p>{wrongAccount ? <><p className="form-error">You are signed in as {session.user.email}. Sign out and open the invitation again to continue.</p><button className="quiet-button" onClick={async () => { await api("/auth/logout", json({})); setSession(null); }}>Sign out</button></> : <><form className="request-form" onSubmit={accept}>{!session && <>{mode === "register" ? <label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label> : <label>Email<input type="email" value={invitation.email} readOnly /></label>}<label>{mode === "register" ? "Set a password" : "Password"}<input name="password" type="password" autoComplete={mode === "register" ? "new-password" : "current-password"} minLength={mode === "register" ? 12 : 1} required /></label></>}{error && <p className="form-error" role="alert">{error}</p>}<button className="primary-button full-width" disabled={busy}>{busy ? "Joining…" : session ? `Join ${invitation.company_name}` : mode === "register" ? "Create account and join company" : "Sign in and join company"}<span>→</span></button></form>{!session && <button className="text-button" onClick={() => { setMode((value) => value === "register" ? "login" : "register"); setError(""); }}>{mode === "register" ? "Already have an account? Sign in" : "New to Cerato Demo 1? Create an account"}</button>}</>}</section> : <section className="public-card error-card"><p className="kicker">INVITATION UNAVAILABLE</p><h1>This invitation can’t be used.</h1><p>{error || "Ask the company owner to send a new invitation."}</p></section>}<footer className="public-footer">Powered by Cerato Systems</footer></main>;
}
