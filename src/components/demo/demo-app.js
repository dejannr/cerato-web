"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { File06, Mail01, Settings01, ArrowUpRight } from "@untitledui/icons";
import { api, json } from "@/lib/demo-api";

const filters = ["all", "new", "needs_information", "ready_for_review", "accepted", "closed"];
const readinessFieldIds = {
  "Pickup location": "pickup_location",
  "Delivery location": "delivery_location",
  "Pickup date": "pickup_date",
  "Delivery date": "delivery_date",
  "Cargo description": "cargo_description",
};

function labelStatus(value = "needs_information") {
  return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function dateLabel(value) {
  if (!value) return "Not set";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function AppLogo() {
  return <div className="brand-mark"><span>C</span><div><strong>cerato</strong><small>SHIPMENT WORKSPACE</small></div></div>;
}

export default function DemoApp() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [authError, setAuthError] = useState("");
  const [busy, setBusy] = useState(false);
  const [requests, setRequests] = useState([]);
  const [members, setMembers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [requestFormOpen, setRequestFormOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [requestError, setRequestError] = useState("");
  const [notice, setNotice] = useState("");
  const [noteText, setNoteText] = useState("");
  const [teamOpen, setTeamOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteError, setInviteError] = useState("");
  const [inviteBusy, setInviteBusy] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState("");
  const [workspaceTab, setWorkspaceTab] = useState("requests");

  const loadWorkspace = useCallback(async () => {
    const me = await api("/auth/me");
    setSession(me);
    if (me.company && me.company.state !== "frozen") {
      const [rows, people] = await Promise.all([api("/requests"), api("/company/members")]);
      setRequests(rows);
      setMembers(people);
    } else {
      setRequests([]);
      setMembers([]);
    }
    return me;
  }, []);

  useEffect(() => {
    loadWorkspace().catch(() => setSession(null)).finally(() => setLoading(false));
  }, [loadWorkspace]);

  useEffect(() => {
    const freeze = () => setSession((current) => current ? { ...current, company: { ...current.company, state: "frozen" } } : current);
    window.addEventListener("cerato-trial-expired", freeze);
    return () => window.removeEventListener("cerato-trial-expired", freeze);
  }, []);

  useEffect(() => {
    if (session?.company?.state !== "trial") return undefined;
    const checkTrial = () => {
      if (Date.now() >= new Date(session.company.trial_ends_at).getTime()) {
        setSession((current) => current ? { ...current, company: { ...current.company, state: "frozen" } } : current);
      }
    };
    const timer = window.setInterval(checkTrial, 15000);
    return () => window.clearInterval(timer);
  }, [session?.company?.state, session?.company?.trial_ends_at]);

  const visibleRequests = useMemo(() => requests.filter((item) => {
    const statusMatch = filter === "all" || item.status === filter;
    const needle = search.trim().toLowerCase();
    const textMatch = !needle || [item.request_number, item.requester_name, item.requester_company, item.requester_email, item.reference_number, item.pickup_location, item.delivery_location].filter(Boolean).join(" ").toLowerCase().includes(needle);
    return statusMatch && textMatch;
  }), [requests, filter, search]);

  async function authenticate(event) {
    event.preventDefault();
    setBusy(true);
    setAuthError("");
    const form = new FormData(event.currentTarget);
    try {
      const payload = authMode === "register"
        ? { name: form.get("name"), email: form.get("email"), password: form.get("password"), company_name: form.get("company") }
        : { email: form.get("email"), password: form.get("password") };
      await api(authMode === "register" ? "/auth/register" : "/auth/login", json(payload));
      await loadWorkspace();
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function createCompany(event) {
    event.preventDefault();
    setBusy(true);
    setAuthError("");
    try {
      await api("/company", json({ name: new FormData(event.currentTarget).get("company_name") }));
      await loadWorkspace();
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    await api("/auth/logout", json({})).catch(() => {});
    setSession(null);
    setRequests([]);
    setSelected(null);
  }

  async function openRequest(id) {
    try {
      setSelected(await api(`/requests/${id}`));
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function createRequest(event) {
    event.preventDefault();
    setBusy(true);
    setRequestError("");
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    for (const field of ["pickup_date", "delivery_date", "pieces", "weight_kg"]) {
      if (!values[field]) values[field] = null;
    }
    if (values.pieces) values.pieces = Number(values.pieces);
    if (values.weight_kg) values.weight_kg = Number(values.weight_kg);
    try {
      const editing = editingRequest;
      if (editing) delete values.source;
      const saved = editing
        ? await api(`/requests/${editing.id}`, json(values, "PATCH"))
        : await api("/requests", json(values));
      if (editing) {
        setRequests((items) => items.map((item) => item.id === saved.id ? saved : item));
        await loadWorkspace();
      } else {
        setRequests((items) => [saved, ...items]);
      }
      setEditingRequest(null);
      setRequestFormOpen(false);
      await openRequest(saved.id);
    } catch (error) {
      setRequestError(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function changeStatus(status, extra = {}) {
    if (!selected) return;
    try {
      await api(`/requests/${selected.id}/status`, json({ status, ...extra }));
      await loadWorkspace();
      await openRequest(selected.id);
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function assignTo(value) {
    if (!selected) return;
    try {
      await api(`/requests/${selected.id}/assignment`, json({ membership_id: value || null }));
      await loadWorkspace();
      await openRequest(selected.id);
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function addNote(event) {
    event.preventDefault();
    if (!selected || !noteText.trim()) return;
    try {
      await api(`/requests/${selected.id}/notes`, json({ body: noteText.trim() }));
      setNoteText("");
      await openRequest(selected.id);
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function askForMissingInformation() {
    if (!selected?.readiness?.length) return;
    const fields = selected.readiness.map((label) => readinessFieldIds[label]).filter(Boolean);
    if (!fields.length) {
      setNotice("There are no missing shipment details to request.");
      return;
    }
    try {
      await api(`/requests/${selected.id}/request-information`, json({ fields }));
      setNotice(`Secure update link sent to ${selected.requester_email}.`);
      await openRequest(selected.id);
    } catch (error) {
      setNotice(error.message);
    }
  }

  function openInvite() {
    setTeamOpen(false);
    setInviteOpen(true);
    setInviteEmail("");
    setInviteError("");
    setInviteSuccess("");
  }

  async function inviteMember(event) {
    event.preventDefault();
    const email = inviteEmail.trim();
    if (!email || inviteBusy) return;
    setInviteBusy(true);
    setInviteError("");
    setInviteSuccess("");
    try {
      await api("/company/invitations", json({ email }));
      setInviteEmail("");
      setInviteSuccess(`Invitation sent to ${email}.`);
      await loadWorkspace();
    } catch (error) {
      setInviteError(error.message);
    } finally {
      setInviteBusy(false);
    }
  }

  async function removeMember(member) {
    if (!window.confirm(`Remove ${member.name} from this company?`)) return;
    try {
      await api(`/company/members/${member.id}`, { method: "DELETE" });
      setMembers((items) => items.filter((item) => item.id !== member.id));
      setNotice(`${member.name} was removed from the company.`);
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function leaveCompany() {
    if (!window.confirm("Leave this company? You will need an invitation to join it again.")) return;
    try {
      await api("/company/members/me", { method: "DELETE" });
      setSession(null);
      window.location.reload();
    } catch (error) {
      setNotice(error.message);
    }
  }

  if (loading) return <div className="loading-screen"><span className="loader" />Opening your workspace…</div>;

  if (!session) return <main className="auth-layout">
    <div className="auth-story">
      <AppLogo />
      <div className="auth-story-copy">
        <p className="kicker">SHIPMENT REQUEST INTAKE</p>
        <h1>Keep every request moving.</h1>
        <p>Gather the details, follow up on what’s missing, and hand complete requests to your operations team.</p>
      </div>
      <div className="auth-story-foot"><span>30-day full-feature trial</span><span>No payment method</span></div>
    </div>
    <section className="auth-panel">
      <div className="auth-card">
        <div className="auth-switch"><button className={authMode === "login" ? "active" : ""} onClick={() => { setAuthMode("login"); setAuthError(""); }}>Sign in</button><button className={authMode === "register" ? "active" : ""} onClick={() => { setAuthMode("register"); setAuthError(""); }}>Create company</button></div>
        <h2>{authMode === "register" ? "Start your company trial" : "Welcome back"}</h2>
        <p className="muted">{authMode === "register" ? "Create your account and your company workspace." : "Sign in to your shipment request workspace."}</p>
        <form className="stack-form" onSubmit={authenticate}>
          {authMode === "register" && <><label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={120} /></label><label>Company name<input name="company" autoComplete="organization" placeholder="Company name" required maxLength={160} /></label></>}
          <label>Work email<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required /></label>
          <label>Password<input name="password" type="password" autoComplete={authMode === "register" ? "new-password" : "current-password"} placeholder={authMode === "register" ? "At least 12 characters" : "Your password"} minLength={authMode === "register" ? 12 : 1} required /></label>
          {authError && <p className="form-error" role="alert">{authError}</p>}
          <button className="primary-button full-width" disabled={busy}>{busy ? "Please wait…" : authMode === "register" ? "Create company and start trial" : "Sign in"}<span aria-hidden="true">→</span></button>
        </form>
        {authMode === "register" && <p className="terms-note">One account can create one company. Trial lasts 30 days and freezes at expiry.</p>}
      </div>
    </section>
  </main>;

  if (!session.company) return <main className="expired-page"><AppLogo /><div className="expired-card"><p className="kicker">COMPANY SETUP</p><h1>{session.can_create_company ? "Create your company." : "Join a company."}</h1><p>{session.can_create_company ? "Your account is not currently in a company. Create your one company to begin a 30-day trial." : "This account has already created its company. Ask a company owner to invite you, then open the invitation link."}</p>{session.can_create_company ? <form className="stack-form" onSubmit={createCompany}><label>Company name<input name="company_name" required maxLength={160} /></label>{authError && <p className="form-error">{authError}</p>}<button className="primary-button full-width" disabled={busy}>{busy ? "Creating…" : "Create company and start trial"}</button></form> : <button className="quiet-button" onClick={signOut}>Sign out</button>}</div></main>;

  if (session.company.state === "frozen") return <main className="expired-page"><AppLogo /><div className="expired-card"><div className="expired-icon">!</div><p className="kicker">TRIAL ENDED</p><h1>Your trial has expired.</h1><p>Your company workspace is frozen. Its data is retained, but it isn’t available while the workspace is frozen.</p><p className="muted">The company owner can contact Cerato Systems to discuss restoring access.</p><button className="quiet-button" onClick={signOut}>Sign out</button></div></main>;

  const counts = requests.reduce((acc, item) => { acc[item.status] = (acc[item.status] || 0) + 1; return acc; }, {});
  const due = Math.max(0, Math.ceil((new Date(session.company.trial_ends_at).getTime() - Date.now()) / 86400000));
  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${typeof window !== "undefined" && !window.location.hostname.startsWith("demo1.") && window.location.hostname !== "demo1.localhost" ? "/demo1" : ""}/request/${session.company.public_form_token}`;

  async function copyCustomerFormLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setNotice("Customer form link copied.");
    } catch {
      setNotice("Could not copy the link. Open the form to copy its address.");
    }
  }

  return <div className="app-shell">
    <aside className="sidebar"><AppLogo /><div className="company-switcher"><span className="company-avatar">{session.company.name.slice(0, 1).toUpperCase()}</span><div><strong>{session.company.name}</strong><small>Company workspace</small></div></div>
      <p className="side-label">WORKSPACE</p><nav className="side-nav" aria-label="Workspace navigation"><button className={workspaceTab === "requests" ? "selected" : ""} onClick={() => setWorkspaceTab("requests")}><File06 className="side-nav-icon" aria-hidden="true" />Requests<span className="nav-count">{requests.length}</span></button><button className={workspaceTab === "customer_form" ? "selected" : ""} onClick={() => setWorkspaceTab("customer_form")}><Mail01 className="side-nav-icon" aria-hidden="true" />Customer form</button><button onClick={() => setTeamOpen(true)}><Settings01 className="side-nav-icon" aria-hidden="true" />Team &amp; settings<span className="nav-count">{members.length}</span></button></nav>
      <div className="sidebar-bottom"><div className="trial-mini"><span className="trial-mini-dot" /><div><strong>{due} days left</strong><small>Full-feature trial</small></div></div><div className="user-row"><span className="user-avatar">{session.user.name.slice(0, 1).toUpperCase()}</span><div className="user-meta"><strong>{session.user.name}</strong><small>{session.role === "owner" ? "Company owner" : "Member"}</small></div><button className="icon-button" onClick={signOut} aria-label="Sign out" title="Sign out">↗</button></div></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div><p className="kicker">{workspaceTab === "requests" ? "OPERATIONS / REQUESTS" : "WORKSPACE / CUSTOMER FORM"}</p><h1>{workspaceTab === "requests" ? "Shipment requests" : "Customer form"}</h1></div><div className="top-actions">{workspaceTab === "requests" ? <><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search requests" /></label><button className="quiet-button invite-button" onClick={() => setTeamOpen(true)}>Team · {members.length}</button>{session.role === "owner" && <button className="quiet-button invite-button" onClick={openInvite}>Invite teammate</button>}<button className="primary-button" onClick={() => { setEditingRequest(null); setRequestError(""); setRequestFormOpen(true); }}>New request <span>＋</span></button></> : <><a className="quiet-button invite-button" href={shareUrl} target="_blank" rel="noreferrer">Preview form <ArrowUpRight aria-hidden="true" /></a><button className="primary-button" onClick={copyCustomerFormLink}>Copy form link</button></>}</div></header>
      {session.reminders?.map((day) => <div className="trial-banner" key={day}><span className="banner-icon">◷</span><span>Your trial ends in {day} days. All features remain available until then.</span><button onClick={(event) => event.currentTarget.parentElement.remove()} aria-label="Dismiss reminder">×</button></div>)}
      {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")}>×</button></div>}
      {workspaceTab === "requests" ? <><section className="queue-overview"><section className="summary-grid"><article><span>Total requests</span><strong>{requests.length}</strong><small>All time in this company</small></article><article><span>Needs information</span><strong>{counts.needs_information || 0}</strong><small>Waiting on missing details</small></article><article><span>Ready for review</span><strong>{counts.ready_for_review || 0}</strong><small>Complete and awaiting a decision</small></article><article><span>Unassigned</span><strong>{requests.filter((row) => !row.assignee_membership_id && row.status !== "closed").length}</strong><small>Needs a team owner</small></article></section>
      <nav className="status-tabs" aria-label="Filter requests by status">{filters.map((value) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{value === "all" ? "All requests" : labelStatus(value)}<span>{value === "all" ? requests.length : counts[value] || 0}</span></button>)}</nav></section>
      <section className="requests-card"><div className="table-heading"><div><h2>Request queue</h2><p>Review incoming work and keep each request moving.</p></div><div className="table-meta"><span className="live-dot" />Live workspace</div></div>
        {visibleRequests.length ? <div className="table-wrap"><table><thead><tr><th>REQUEST</th><th>ROUTE</th><th>PICKUP</th><th>STATUS</th><th>UPDATED</th><th /></tr></thead><tbody>{visibleRequests.map((item) => <tr key={item.id} onClick={() => openRequest(item.id)}><td><strong>{item.request_number}</strong><span>{item.requester_name}{item.requester_company ? ` · ${item.requester_company}` : ""}</span></td><td><span className="route-text">{item.pickup_location || "Pickup pending"}</span><span className="route-arrow">↓</span><span className="route-text">{item.delivery_location || "Delivery pending"}</span></td><td>{dateLabel(item.pickup_date)}</td><td><span className={`status-pill status-${item.status}`}>{labelStatus(item.status)}</span></td><td>{dateLabel(item.updated_at?.slice(0, 10))}</td><td><span className="row-arrow">↗</span></td></tr>)}</tbody></table></div> : <div className="empty-state"><div className="empty-art"><span>SR</span><i /><i /><i /></div><h3>{search || filter !== "all" ? "No matching requests" : "Your queue is clear"}</h3><p>{search || filter !== "all" ? "Try another search or status." : "Create your first request or share your customer form to start the workflow."}</p>{!search && filter === "all" && <div className="empty-actions"><button className="primary-button" onClick={() => setRequestFormOpen(true)}>Create a request</button><button className="quiet-button" onClick={async () => { await navigator.clipboard.writeText(shareUrl); setNotice("Customer request link copied."); }}>Copy customer form link</button></div>}</div>}
      </section></> : <section className="customer-form-page"><div className="customer-form-intro"><p className="kicker">CUSTOMER-FACING PAGE</p><h2>Let customers send shipment requests directly.</h2><p>Customers can submit the shipment details they have without creating an account. The request joins your queue for review.</p></div><div className="customer-form-layout"><article className="customer-link-card"><div className="customer-form-icon"><Mail01 aria-hidden="true" /></div><p className="side-label">YOUR CUSTOMER FORM</p><h3>Share your intake form</h3><p>Use this link on your website, in an email, or with customers who need to submit a shipment.</p><label className="customer-link-field"><span>FORM LINK</span><input readOnly value={shareUrl} onFocus={(event) => event.currentTarget.select()} /></label><div className="customer-link-actions"><button className="primary-button" onClick={copyCustomerFormLink}>Copy form link</button><a className="quiet-button" href={shareUrl} target="_blank" rel="noreferrer">Preview form <ArrowUpRight aria-hidden="true" /></a></div></article><article className="customer-form-details"><div className="customer-detail-heading"><div><p className="side-label">WHAT THE FORM COLLECTS</p><h3>Only the details needed to get started</h3></div><span className="customer-detail-count">01</span></div><ul><li><span>01</span><div><strong>Customer contact</strong><small>Name, company, email and phone</small></div></li><li><span>02</span><div><strong>Shipment route</strong><small>Pickup and delivery locations and dates</small></div></li><li><span>03</span><div><strong>Cargo details</strong><small>Description, references, pieces and weight</small></div></li><li><span>04</span><div><strong>Special handling</strong><small>Additional instructions for your team</small></div></li></ul><p className="customer-form-note">Incomplete submissions are still captured. Your team can follow up for missing information.</p></article></div></section>}
    </main>
      {requestFormOpen && <div className="overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) { setRequestFormOpen(false); setEditingRequest(null); } }}><section className="dialog"><div className="dialog-head"><div><p className="kicker">{editingRequest ? `EDIT ${editingRequest.request_number}` : "NEW SHIPMENT REQUEST"}</p><h2>{editingRequest ? "Update shipment details" : "Capture the request"}</h2><p>Missing operational details can be added later.</p></div><button className="icon-button" onClick={() => { setRequestFormOpen(false); setEditingRequest(null); }} aria-label="Close">×</button></div><form className="request-form" onSubmit={createRequest}>
      <div className="field-grid"><label>Requester name<input name="requester_name" required defaultValue={editingRequest?.requester_name || ""} /></label><label>Company<input name="requester_company" defaultValue={editingRequest?.requester_company || ""} /></label><label>Requester email<input name="requester_email" type="email" required defaultValue={editingRequest?.requester_email || ""} /></label><label>Phone<input name="requester_phone" type="tel" defaultValue={editingRequest?.requester_phone || ""} /></label><label>Pickup location<input name="pickup_location" defaultValue={editingRequest?.pickup_location || ""} /></label><label>Delivery location<input name="delivery_location" defaultValue={editingRequest?.delivery_location || ""} /></label><label>Pickup date<input name="pickup_date" type="date" defaultValue={editingRequest?.pickup_date || ""} /></label><label>Delivery date<input name="delivery_date" type="date" defaultValue={editingRequest?.delivery_date || ""} /></label><label>Cargo description<input name="cargo_description" defaultValue={editingRequest?.cargo_description || ""} /></label><label>Reference number<input name="reference_number" defaultValue={editingRequest?.reference_number || ""} /></label><label>Pieces<input name="pieces" type="number" min="0" defaultValue={editingRequest?.pieces ?? ""} /></label><label>Weight (kg)<input name="weight_kg" type="number" min="0" step="0.1" defaultValue={editingRequest?.weight_kg ?? ""} /></label></div>
      <label>Special handling<textarea name="special_handling" rows="3" defaultValue={editingRequest?.special_handling || ""} /></label>{!editingRequest && <label>Request received by<select name="source"><option value="manual">Manual entry</option><option value="phone">Phone</option><option value="email">Email</option><option value="other">Other</option></select></label>}{requestError && <p className="form-error">{requestError}</p>}<div className="dialog-actions"><button type="button" className="quiet-button" onClick={() => { setRequestFormOpen(false); setEditingRequest(null); }}>Cancel</button><button className="primary-button" disabled={busy}>{busy ? "Saving…" : editingRequest ? "Save changes" : "Create request"}</button></div>
    </form></section></div>}
    {selected && <div className="overlay detail-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><aside className="detail-panel"><div className="detail-header"><div><p className="kicker">REQUEST {selected.request_number}</p><h2>{selected.requester_name}</h2><span>{selected.requester_company || selected.requester_email}</span></div><button className="icon-button" onClick={() => setSelected(null)} aria-label="Close details">×</button></div>
      <div className="detail-status"><span className={`status-pill status-${selected.status}`}>{labelStatus(selected.status)}</span><span>Created {dateLabel(selected.created_at?.slice(0, 10))}</span></div>
      {selected.readiness?.length > 0 && <div className="missing-box"><strong>Still needed</strong><ul>{selected.readiness.map((value) => <li key={value}>{value}</li>)}</ul></div>}
      <div className="detail-fields"><h3>Shipment details</h3><div className="detail-grid"><Detail label="Pickup" value={selected.pickup_location} /><Detail label="Delivery" value={selected.delivery_location} /><Detail label="Pickup date" value={dateLabel(selected.pickup_date)} /><Detail label="Delivery date" value={dateLabel(selected.delivery_date)} /><Detail label="Cargo" value={selected.cargo_description} /><Detail label="Pieces / weight" value={[selected.pieces, selected.weight_kg && `${selected.weight_kg} kg`].filter(Boolean).join(" · ")} /><Detail label="Reference" value={selected.reference_number} /><Detail label="Special handling" value={selected.special_handling} /></div></div>
      <label className="assignee-field">Owner<select value={selected.assignee_membership_id || ""} onChange={(event) => assignTo(event.target.value)}><option value="">Unassigned</option>{members.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}</select></label>
      <div className="detail-actions">{!["accepted", "closed"].includes(selected.status) && <button className="quiet-button" onClick={() => { setEditingRequest(selected); setRequestError(""); setRequestFormOpen(true); }}>Edit details</button>}{selected.readiness?.length > 0 && ["new", "needs_information"].includes(selected.status) && <button className="quiet-button" onClick={askForMissingInformation}>Ask for missing information</button>}{selected.readiness?.length === 0 && ["new", "needs_information"].includes(selected.status) && <button className="primary-button" onClick={() => changeStatus("ready_for_review")}>Mark ready for review</button>}{selected.readiness?.length > 0 && session.role === "owner" && ["new", "needs_information"].includes(selected.status) && <button className="primary-button" onClick={() => { const reason = window.prompt("What is the reason for overriding the missing-information check?"); if (reason?.trim()) changeStatus("ready_for_review", { override_reason: reason.trim() }); }}>Override and mark ready</button>}{selected.status === "ready_for_review" && <button className="primary-button" onClick={() => changeStatus("accepted")}>Accept request</button>}{selected.status !== "closed" && <button className="quiet-button" onClick={() => { const reason = window.prompt("Why are you closing this request?"); if (reason?.trim()) changeStatus("closed", { close_reason: reason.trim() }); }}>Close request</button>}</div>
      <form className="note-form" onSubmit={addNote}><label>Internal note<textarea value={noteText} onChange={(event) => setNoteText(event.target.value)} placeholder="Add a note for your team…" rows="2" /></label><button className="quiet-button" disabled={!noteText.trim()}>Add note</button></form>
      <div className="activity-list"><h3>Activity</h3>{[...(selected.events || []).map((event) => ({ ...event, kind: "event" })), ...(selected.notes || []).map((note) => ({ ...note, kind: "note", summary: note.body }))].sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime()).map((event) => <div className="activity-item" key={`${event.kind}-${event.id}`}><span className={event.kind === "note" ? "activity-icon note-icon" : "activity-icon"}>{event.kind === "note" ? "N" : "·"}</span><div><p>{event.summary}</p><time>{new Date(event.at).toLocaleString()}</time></div></div>)}</div>
      {selected.messages?.length > 0 && <div className="activity-list"><h3>Customer messages</h3>{selected.messages.map((message) => <div className="activity-item" key={message.id}><span className="activity-icon">↗</span><div><p>{message.subject} · {message.delivery_state}</p><time>{new Date(message.at).toLocaleString()}</time></div></div>)}</div>}
    </aside></div>}
    {inviteOpen && <div className="overlay" onMouseDown={(event) => { if (event.target === event.currentTarget && !inviteBusy) setInviteOpen(false); }}><section className="dialog invite-dialog" role="dialog" aria-modal="true" aria-labelledby="invite-dialog-title"><div className="dialog-head"><div><p className="kicker">COMPANY SETTINGS</p><h2 id="invite-dialog-title">Invite a teammate</h2><p>Invite someone to join {session.company.name}.</p></div><button className="icon-button" type="button" onClick={() => setInviteOpen(false)} disabled={inviteBusy} aria-label="Close invitation">×</button></div><form className="invite-form" onSubmit={inviteMember}><p className="invite-description">They’ll receive an email with a link to join your company as a member.</p><label>Email address<input type="email" value={inviteEmail} onChange={(event) => setInviteEmail(event.target.value)} placeholder="teammate@company.com" autoComplete="email" required disabled={inviteBusy} /></label>{inviteError && <p className="invite-error" role="alert">{inviteError}</p>}{inviteSuccess && <p className="invite-success" role="status">{inviteSuccess}</p>}<div className="invite-actions"><button type="button" className="quiet-button" onClick={() => { setInviteOpen(false); setTeamOpen(true); }} disabled={inviteBusy}>Back to team</button><button className="primary-button" disabled={inviteBusy}>{inviteBusy ? "Sending…" : "Send invitation"}</button></div></form></section></div>}
    {teamOpen && <div className="overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setTeamOpen(false); }}><section className="dialog team-dialog"><div className="dialog-head"><div><p className="kicker">COMPANY SETTINGS</p><h2>People in {session.company.name}</h2><p>The company owner manages membership.</p></div><button className="icon-button" onClick={() => setTeamOpen(false)} aria-label="Close team">×</button></div><div className="team-list">{members.map((member) => <div className="team-member" key={member.id}><span className="user-avatar">{member.name.slice(0, 1).toUpperCase()}</span><div><strong>{member.name}</strong><small>{member.email}</small></div><span className={`role-tag ${member.role}`}>{member.role}</span>{session.role === "owner" && member.role !== "owner" && <button className="quiet-button" onClick={() => removeMember(member)}>Remove</button>}</div>)}</div><div className="team-footer"><span>One company per account · One active company per member</span>{session.role === "member" && <button className="quiet-button" onClick={leaveCompany}>Leave company</button>}{session.role === "owner" && <button className="primary-button" onClick={openInvite}>Invite teammate</button>}</div></section></div>}
  </div>;
}

function Detail({ label, value }) {
  return <div><small>{label}</small><strong>{value || "Not provided"}</strong></div>;
}
