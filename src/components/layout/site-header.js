"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight } from "@untitledui/icons/ArrowUpRight";
import { Menu01 } from "@untitledui/icons/Menu01";
import { XClose } from "@untitledui/icons/XClose";

const navItems = [["Customers", "/customers"], ["Services", "/services"], ["Company", "/company"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const isActive = (href) => pathname === href || (href === "/customers" && pathname.startsWith("/customers/"));

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <header className="site-header"><div className="container nav-inner">
    <Link className={pathname === "/" ? "wordmark wordmark--active" : "wordmark"} href="/" aria-label="Cerato Systems home" aria-current={pathname === "/" ? "page" : undefined}><img src="/brand/cerato-systems-logo.png" alt="Cerato Systems" /></Link>
    <nav id={menuId} className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">{navItems.map(([label, href]) => <Link className={isActive(href) ? "nav-link nav-link--active" : "nav-link"} href={href} key={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link className={pathname === "/contact" ? "mobile-project-link nav-link--active" : "mobile-project-link"} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Start a project <ArrowUpRight /></Link></nav>
    <Link className={pathname === "/contact" ? "nav-cta nav-cta--active" : "nav-cta"} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Start a project <ArrowUpRight /></Link>
    <button className="menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls={menuId} aria-label={open ? "Close menu" : "Open menu"}>{open ? <XClose aria-hidden="true" /> : <Menu01 aria-hidden="true" />}</button>
  </div></header>;
}
