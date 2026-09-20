import type { ReactNode } from "react";
import { site } from "@/lib/site";

export type PolicySection = { id: string; title: string; content: ReactNode };
export function LegalPage({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: PolicySection[];
}) {
  return (
    <main id="main">
      <section className="page-hero legal-hero section-shell">
        <span className="eyebrow">CLEAR FROM THE START</span>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p className="policy-date">Last updated: 21 September 2026</p>
      </section>
      <div className="legal-layout section-shell">
        <nav className="legal-nav" aria-label="On this page">
          <span>ON THIS PAGE</span>
          {sections.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.title}
            </a>
          ))}
        </nav>
        <details className="legal-toc-mobile">
          <summary>
            On this page <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Policy sections">
            {sections.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                {s.title}
              </a>
            ))}
          </nav>
        </details>
        <div className="legal-copy">
          {sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.title}</h2>
              {s.content}
            </section>
          ))}
          <div className="legal-contact">
            <p>
              <strong>Questions about this policy?</strong>
            </p>
            <p>
              {site.name}
              <br />
              {site.address}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneLink}>{site.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
