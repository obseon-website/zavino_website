import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export function ServiceHero({
  label,
  title,
  description,
  focus,
  action,
  facts,
}: {
  label: string;
  title: ReactNode;
  description: string;
  focus: string;
  action: string;
  facts: string[];
}) {
  return (
    <section className="sp-hero section-shell">
      <nav className="sp-hero-top" aria-label="Service breadcrumb">
        <Link href="/services" className="sp-back">
          <ArrowLeft size={15} /> All capabilities
        </Link>
        <span className="sp-current-service" aria-current="page">
          {label}
        </span>
      </nav>
      <div className="sp-hero-grid">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="sp-hero-aside">
          <p>{description}</p>
          <Link
            className="button"
            href={`/contact?focus=${focus}&source=/services/${focus}`}
          >
            {action} <ArrowUpRight size={18} />
          </Link>
          <a
            className="sp-down"
            href={site.auditBooking}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30-minute call <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="sp-hero-facts">
        {facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
    </section>
  );
}

export function ServiceSectionHeading({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="sp-section-heading">
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

export function ServiceScope({
  title,
  description,
  items,
}: {
  title: ReactNode;
  description: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="sp-scope section-shell">
      <div className="sp-scope-lead">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="sp-scope-list">
        {items.map((item) => (
          <article key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
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
      <ServiceSectionHeading title={title} />
      <ol className="sp-process-list">
        {stages.map((stage, index) => (
          <li key={stage.title}>
            <div className="sp-process-line">
              <span>0{index + 1}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <span className="sp-artifact-label">{stage.artifact}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ServiceFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="sp-faq section-shell">
      <div>
        <h2>A few good questions.</h2>
      </div>
      <div className="sp-faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
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
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link href={href} className="text-link">
        {label}
        <ArrowUpRight size={19} />
      </Link>
    </aside>
  );
}

export function ServiceBrief({
  focus,
  title,
  description,
  action,
}: {
  focus: string;
  title: string;
  description: string;
  action: string;
}) {
  return (
    <section className="sp-brief section-shell">
      <h2>{title}</h2>
      <div className="sp-brief-bottom">
        <p>{description}</p>
        <div className="sp-brief-actions">
          <Link
            href={`/contact?focus=${focus}&source=/services/${focus}`}
            className="button"
          >
            {action}
            <ArrowUpRight size={18} />
          </Link>
          <a
            href={site.auditBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Book a 30-minute call
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
