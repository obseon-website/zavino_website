"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CaretDown, List, X } from "@phosphor-icons/react";
import { Brand } from "./brand";

const capabilities = [
  { href: "/services/ai-automation", label: "AI automation", detail: "Connect data to useful action." },
  { href: "/services/saas-development", label: "SaaS development", detail: "Build the product behind the work." },
  { href: "/services/web-development", label: "Web development", detail: "Create a stronger digital foundation." },
];
const links = [{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => { if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) servicesRef.current.open = false; };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const elements = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a") || [])].filter(Boolean) as HTMLElement[];
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const mq = window.matchMedia("(min-width: 900px)");
    const onResize = () => { if (mq.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onResize); };
  }, [open]);
  return <header className={`site-header${open ? " menu-is-open" : ""}`}>
    <div className="header-inner section-shell"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        <details ref={servicesRef} className="services-menu" onKeyDown={(event)=>{if(event.key==="Escape" && servicesRef.current){servicesRef.current.open=false;servicesRef.current.querySelector("summary")?.focus();}}}>
          <summary className={path.startsWith("/services")?"is-current":""}>Services <CaretDown size={12}/></summary>
          <div className="services-dropdown">{capabilities.map(item=><Link key={item.href} href={item.href} onClick={()=>{if(servicesRef.current)servicesRef.current.open=false;}}><span><strong>{item.label}</strong><small>{item.detail}</small></span><ArrowUpRight size={18}/></Link>)}<Link className="all-services" href="/services" onClick={()=>{if(servicesRef.current)servicesRef.current.open=false;}}>All capabilities <ArrowUpRight size={16}/></Link></div>
        </details>
        {links.map(link=><Link key={link.href} href={link.href} aria-current={path===link.href?"page":undefined}>{link.label}</Link>)}
      </nav>
      <Link className="button button-small header-cta" href="/contact">Discuss your project <ArrowUpRight size={16}/></Link>
      <button type="button" className="menu-toggle" ref={toggleRef} onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close menu":"Open menu"}>{open?<X size={25}/>:<List size={25}/>}</button>
    </div>
    {open && <div id="mobile-menu" ref={menuRef} className="mobile-menu"><nav aria-label="Mobile navigation"><span className="mobile-menu-label">What we build</span>{capabilities.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}<ArrowUpRight size={20}/></Link>)}<div className="mobile-secondary">{[{href:"/services",label:"All services"},...links].map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</Link>)}</div><Link className="button" href="/contact" onClick={()=>setOpen(false)}>Discuss your project <ArrowUpRight size={19}/></Link></nav></div>}
  </header>;
}
