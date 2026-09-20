"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { Brand } from "./brand";
import { site } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "Agency" },
  { href: "/services", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const elements = [
          toggleRef.current,
          ...Array.from(
            menuRef.current?.querySelectorAll<HTMLElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0],
          last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 800px)");
    const onResize = () => {
      if (mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className={`site-header${open ? " menu-is-open" : ""}`}>
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-small header-cta"
        >
          Let’s talk <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-toggle"
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mobile-menu" ref={menuRef}>
          <nav aria-label="Mobile navigation">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span className="mono">0{i + 1}</span>
                {link.label}
                <ArrowUpRight size={28} />
              </Link>
            ))}
          </nav>
          <a className="mobile-phone" href={site.phoneLink}>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Let’s talk <ArrowUpRight size={20} />
          </a>
        </div>
      )}
    </header>
  );
}
