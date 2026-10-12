import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ServicePlayground } from "@/components/service-playground";
import { OngoingSupport } from "@/components/ongoing-support";
import { serviceCatalog, supportingCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "AI systems, SaaS, web apps & content workflows",
  description:
    "Practical technology for businesses: AI revenue systems, operations agents, SaaS, custom web apps, content workflows, and enterprise AI training in Bangladesh.",
  alternates: { canonical: "/services" },
};

const illustrations = {
  "ai-revenue-systems": {
    kind: "automation",
    href: "/services/ai-automation",
    label: "Explore our automation approach",
  },
  "saas-development": {
    kind: "saas",
    href: "/services/saas-development",
    label: "Explore SaaS development",
  },
  "web-apps-platforms": {
    kind: "web",
    href: "/services/web-development",
    label: "Explore websites & platforms",
  },
} as const;

const serviceNotes = {
  "ai-operations-agents": [
    [
      "Connect the everyday work",
      "Reporting, support, internal tasks, and knowledge retrieval can share the business tools your team already uses.",
    ],
    [
      "Keep people in control",
      "Agree on approved sources, access, review points, and when an agent should hand a decision back to your team.",
    ],
    [
      "Improve after launch",
      "Monitor the workflow, review exceptions, and refine the system as the business changes.",
    ],
  ],
  "ai-content-flows": [
    [
      "From research to a useful brief",
      "Connect content research, planning, and asset organization around the audience and business objective.",
    ],
    [
      "A human approval point",
      "Give your team a clear place to review drafts, correct the direction, and approve material before it moves forward.",
    ],
    [
      "A connected content operation",
      "Repurpose approved material for different channels and maintain the workflow as your content needs grow.",
    ],
  ],
  "enterprise-ai-training": [
    [
      "Workshops around real roles",
      "Practical AI workshops for the work your sales, operations, and leadership teams actually do.",
    ],
    [
      "Judgment alongside productivity",
      "Help people understand what to share, what to check, and when to bring their own expertise to a result.",
    ],
    [
      "Support adoption",
      "Connect the training to an AI adoption strategy, useful productivity systems, and implementation support.",
    ],
  ],
} as const;

export default function ServicesPage() {
  return (
    <main id="main" className="sp-page">
      <section className="sp-index-hero section-shell">
        <h1>
          Make the pieces
          <br />
          <span>work together.</span>
        </h1>
        <div className="sp-index-intro">
          <p>
            AI systems, SaaS products, custom web apps, websites, and content
            workflows. Built around your business, maintained and improved after
            launch.
          </p>
          <a href="#ai-revenue-systems" className="text-link">
            Find your starting point <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <nav
          className="sp-service-nav service-catalog-nav"
          aria-label="Six primary services"
        >
          {serviceCatalog.map((item) => (
            <a key={item.slug} href={`#${item.slug}`}>
              {item.name}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
      <div className="sp-offers">
        {serviceCatalog.map((item) => {
          const illustration =
            item.slug in illustrations
              ? illustrations[item.slug as keyof typeof illustrations]
              : undefined;
          const notes =
            item.slug in serviceNotes
              ? serviceNotes[item.slug as keyof typeof serviceNotes]
              : undefined;
          return (
            <section
              key={item.slug}
              id={item.slug}
              className={`sp-offer sp-offer-${illustration?.kind ?? "information"} section-shell`}
              aria-labelledby={`${item.slug}-title`}
            >
              <div className="sp-offer-copy">
                <h2 id={`${item.slug}-title`}>{item.name}</h2>
                <h3>{item.line}</h3>
                <p>{item.description}</p>
                {"availability" in item && (
                  <p>
                    <strong>{item.availability} only.</strong>
                  </p>
                )}
                <ul className="sp-inline-scope">
                  {item.items.map((scope) => (
                    <li key={scope}>{scope}</li>
                  ))}
                </ul>
                <Link
                  href={
                    illustration?.href ??
                    `/contact?focus=${item.slug}&source=/services`
                  }
                  className="text-link"
                >
                  {illustration?.label ?? "Tell us what your team needs"}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>
              {illustration ? (
                <ServicePlayground kind={illustration.kind} compact />
              ) : (
                <div className="sp-scope-list">
                  {notes?.map(([title, body]) => (
                    <article key={title}>
                      <div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
      <section className="sp-fit section-shell" id="more-capabilities">
        <h2>
          The work
          <br />
          around the work.
        </h2>
        <div>
          <p>{supportingCopy}</p>
          <Link href="/work#creative-heritage" className="text-link">
            Explore our creative heritage{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <OngoingSupport />
      <ContactCta />
    </main>
  );
}
