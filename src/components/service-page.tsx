import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import "@/app/service-pages.css";

export function ServiceHero({
  number,
  label,
  title,
  description,
  focus,
  action,
  facts,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description: string;
  focus: string;
  action: string;
  facts: string[];
}) {
  return (
    <section className="sp-hero section-shell">
      <div className="sp-hero-top">
        <Link href="/services" className="sp-back"><ArrowLeft size={15} /> All capabilities</Link>
        <span className="sp-folio">CAPABILITY {number} / 03</span>
      </div>
      <div className="sp-hero-grid">
        <div>
          <span className="eyebrow">{label}</span>
          <h1>{title}</h1>
        </div>
        <div className="sp-hero-aside">
          <p>{description}</p>
          <Link className="button" href={`/contact?focus=${focus}&source=/services/${focus}`}>
            {action} <ArrowUpRight size={18} />
          </Link>
          <a className="sp-down" href={site.auditBooking} target="_blank" rel="noopener noreferrer">Book a 30-minute call <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="sp-hero-facts">
        {facts.map((fact, index) => <span key={fact}><i aria-hidden="true">0{index + 1}</i>{fact}</span>)}
      </div>
    </section>
  );
}

export function ServiceSectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="sp-section-heading">
      <span className="eyebrow">{label}</span>
      <div><h2>{title}</h2>{children && <p>{children}</p>}</div>
    </div>
  );
}

export function ServiceScope({
  label = "WHAT TAKES SHAPE",
  title,
  description,
  items,
}: {
  label?: string;
  title: ReactNode;
  description: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="sp-scope section-shell">
      <div className="sp-scope-lead">
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="sp-scope-list">
        {items.map((item, index) => (
          <article key={item.title}>
            <span className="sp-number">0{index + 1}</span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServiceProcess({
  title = "A clear route to a working system.",
  stages,
}: {
  title?: string;
  stages: { title: string; description: string; artifact: string }[];
}) {
  return (
    <section className="sp-process section-shell">
      <ServiceSectionHeading label="HOW THE WORK MOVES" title={title} />
      <ol className="sp-process-list">
        {stages.map((stage, index) => (
          <li key={stage.title}>
            <div className="sp-process-line"><span>0{index + 1}</span><ArrowRight size={16} aria-hidden="true" /></div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <span className="sp-artifact-label">{stage.artifact}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ServiceFaq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="sp-faq section-shell">
      <div><span className="eyebrow">BEFORE WE BEGIN</span><h2>A few good questions.</h2></div>
      <div className="sp-faq-list">
        {items.map((item) => (
          <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>
        ))}
      </div>
    </section>
  );
}

export function ServiceRelated({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <aside className="sp-related section-shell">
      <span className="eyebrow">THE CONNECTED PICTURE</span>
      <div><h2>{title}</h2><p>{description}</p></div>
      <Link href={href} className="text-link">{label}<ArrowUpRight size={19} /></Link>
    </aside>
  );
}

export function ServiceArtifact({ kind }: { kind: "automation" | "saas" | "web" }) {
  if (kind === "automation") return (
    <div className="sp-capability-art sp-art-automation" aria-hidden="true">
      <span className="sp-art-label">SIGNAL → DECISION → ACTION</span>
      <div className="sp-mini-sources"><span>CRM</span><span>Commerce</span><span>Support</span></div>
      <div className="sp-mini-join"><i /><i /><i /></div>
      <div className="sp-mini-engine"><span className="sp-signal-dot" /><strong>Rules + intelligence</strong><span>01</span></div>
      <div className="sp-mini-gate"><span>Human review</span><span>In control <i /></span></div>
      <div className="sp-mini-output"><ArrowRight size={15} /> Approved action</div>
    </div>
  );
  if (kind === "saas") return (
    <div className="sp-capability-art sp-art-saas" aria-hidden="true">
      <span className="sp-art-label">ONE PRODUCT. EVERY PERSPECTIVE.</span>
      <div className="sp-mini-product">
        <div className="sp-mini-product-top"><span className="sp-signal-dot" /><strong>Product workspace</strong><span>↗</span></div>
        <div className="sp-mini-roles"><span>Customer</span><span>Admin</span><span>Operations</span></div>
        <div className="sp-mini-product-row"><span>01</span><strong>A useful first workflow</strong><i /></div>
        <div className="sp-mini-product-row"><span>02</span><strong>Clear roles & permissions</strong><i /></div>
        <div className="sp-mini-product-row"><span>03</span><strong>Room to build forward</strong><i /></div>
      </div>
    </div>
  );
  return (
    <div className="sp-capability-art sp-art-web" aria-hidden="true">
      <span className="sp-art-label">ONE EXPERIENCE. EVERY SCREEN.</span>
      <div className="sp-mini-browser"><div className="sp-browser-chrome"><i /><i /><i /><span>your next platform</span></div><div className="sp-browser-content"><span>A clearer digital<br />front door.</span><i /><div><b /><b /><b /></div></div></div>
      <div className="sp-mini-phone"><i /><span>A clearer<br />digital<br />front door.</span><b /><em /></div>
    </div>
  );
}

export function ServiceBrief({ focus, title, description, action }: { focus: string; title: string; description: string; action: string }) {
  return (
    <section className="sp-brief section-shell">
      <div className="sp-brief-label"><span className="eyebrow">A USEFUL FIRST CONVERSATION</span><ArrowUpRight size={34} aria-hidden="true" /></div>
      <h2>{title}</h2>
      <div className="sp-brief-bottom"><p>{description}</p><div className="sp-brief-actions">
        <Link href={`/contact?focus=${focus}&source=/services/${focus}`} className="button">{action}<ArrowUpRight size={18} /></Link>
        <a href={site.auditBooking} target="_blank" rel="noopener noreferrer" className="text-link">Book a 30-minute call<ArrowUpRight size={17} /></a>
      </div></div>
    </section>
  );
}
