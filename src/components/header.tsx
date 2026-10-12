"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { Brand } from "./brand";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "Studio" },
];

export function Header() {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu(instant = false) {
    if (!dialog.current) return;
    dialog.current.dataset.instant = String(instant);
    dialog.current.close();
  }

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                path === link.href ||
                (link.href === "/services" && path.startsWith("/services/"))
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact text-link" href="/contact">
          Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle icon-button"
          ref={toggle}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          onClick={(event) => {
            if (!dialog.current) return;
            dialog.current.dataset.instant = String(event.detail === 0);
            dialog.current.showModal();
            setOpen(true);
          }}
        >
          <List size={24} aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onClose={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
        onCancel={() => {
          if (dialog.current) dialog.current.dataset.instant = "true";
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span id="mobile-menu-title">Explore Zavino</span>
            <button
              autoFocus
              className="icon-button"
              type="button"
              aria-label="Close menu"
              onClick={(event) => closeMenu(event.detail === 0)}
            >
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {[
              ...navigation,
              { href: "/zavino-owned-products", label: "Our products" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={path === link.href ? "page" : undefined}
                onClick={() => closeMenu(true)}
              >
                {link.label}
                <ArrowUpRight size={24} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <Link
            className="button"
            href="/contact"
            onClick={() => closeMenu(true)}
          >
            Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </dialog>
    </header>
  );
}
