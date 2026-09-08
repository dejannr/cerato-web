"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@untitledui/icons/ArrowUpRight";
import { Menu01 } from "@untitledui/icons/Menu01";
import { XClose } from "@untitledui/icons/XClose";
import { motionTokens } from "@/lib/motion";

const navItems = [["Customers", "/customers"], ["Services", "/services"], ["Company", "/company"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const isActive = (href) => pathname === href || (href === "/customers" && pathname.startsWith("/customers/"));

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.classList.remove("menu-is-open"); window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 28);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const mobileItem = reduceMotion ? {} : { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -2 }, transition: { duration: motionTokens.duration.sm, ease: motionTokens.ease.out } };

  return <header className={`site-header${open ? " site-header--menu-open" : ""}${scrolled ? " site-header--scrolled" : ""}`}><div className="container nav-inner">
    <Link className={pathname === "/" ? "wordmark wordmark--active" : "wordmark"} href="/" aria-label="Cerato Systems home" aria-current={pathname === "/" ? "page" : undefined}><img src="/brand/cerato-systems-logo.png" alt="Cerato Systems" /></Link>
    <nav className="nav-links desktop-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <Link className={isActive(href) ? "nav-link nav-link--active" : "nav-link"} href={href} key={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}</nav>
    <Link className={pathname === "/contact" ? "nav-cta nav-cta--active" : "nav-cta"} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Start a project <ArrowUpRight /></Link>
    <button className="menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls={menuId} aria-label={open ? "Close menu" : "Open menu"}>{open ? <XClose aria-hidden="true" /> : <Menu01 aria-hidden="true" />}</button>
  </div><AnimatePresence initial={false}>{open && <motion.nav id={menuId} className="mobile-menu" aria-label="Main navigation" initial={reduceMotion ? false : { opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }} transition={{ duration: reduceMotion ? motionTokens.duration.xs : motionTokens.duration.md, ease: motionTokens.ease.out }}>{navItems.map(([label, href], index) => <motion.div {...mobileItem} transition={{ ...mobileItem.transition, delay: reduceMotion ? 0 : index * 0.025 }} key={href}><Link className={isActive(href) ? "nav-link nav-link--active" : "nav-link"} href={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></motion.div>)}<motion.div {...mobileItem} transition={{ ...mobileItem.transition, delay: reduceMotion ? 0 : 0.09 }}><Link className="mobile-project-link" href="/contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight /></Link></motion.div></motion.nav>}</AnimatePresence></header>;
}
