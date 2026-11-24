"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api, json } from "@/lib/demo-api";

export function AccountActions({ mobile = false }) {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let active = true;
    const refresh = () => api("/auth/me").then((session) => {
      if (active) setUser(session.user);
    }).catch(() => {
      if (active) setUser(null);
    }).finally(() => {
      if (active) setChecked(true);
    });
    const changed = () => { setChecked(false); refresh(); };
    refresh();
    window.addEventListener("cerato-auth-changed", changed);
    return () => {
      active = false;
      window.removeEventListener("cerato-auth-changed", changed);
    };
  }, []);

  const linkClass = mobile ? "mobile-project-link account-mobile-link" : "nav-cta account-link";
  if (!checked) return null;
  return user
    ? <><Link className={linkClass} href="/demos">My demos</Link><button className={mobile ? "account-mobile-signout" : "nav-cta account-signout"} onClick={async () => { await signOut(); setUser(null); }} type="button">Sign out</button></>
    : <Link className={linkClass} href="/sign-in">Sign in</Link>;
}

export async function signOut() {
  await api("/auth/logout", json({}));
  window.dispatchEvent(new Event("cerato-auth-changed"));
}
