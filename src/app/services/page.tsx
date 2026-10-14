import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ServicePlayground } from "@/components/service-playground";
import { OngoingSupport } from "@/components/ongoing-support";
import { serviceCatalog, additionalServices } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI, SaaS & web services | AI Content Workflow",
  description:
    "Capture leads, automate routine tasks, launch a product or website, and connect your content workflow. Find the right service for your business.",
  alternates: { canonical: "/services" },
};

const illustrations = {
  "ai-revenue-systems": {
    kind: "automation",
    href: "/services/ai-automation",
    label: "Explore AI revenue",
  },
  "ai-operations-agents": {
    kind: "operations",
    href: site.auditBooking,
    label: site.auditLabel,
  },
  "saas-development": {
    kind: "saas",
    href: "/services/saas-development",
    label: "Explore SaaS & Custom Web Apps",
  },
  "ai-content-flows": {
    kind: "content",
    href: site.auditBooking,
    label: site.auditLabel,
  },
} as const;

export default function ServicesPage() {
  return (
    <main id="main" className="sp-page">
      <section className="sp-index-hero section-shell">
        <h1>
          AI and software.
          <br />
          <span>Made useful.</span>
        </h1>
        <div className="sp-index-intro">
          <p>
            More sales conversations. Less routine work. A product of your own.
            Content that’s easier to create.
          </p>
          <a href="#ai-revenue-systems" className="text-link">
            Find your service <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <nav
          className="sp-service-nav service-catalog-nav"
          aria-label="Our four main services"
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
          const illustration = illustrations[item.slug];
          return (
            <section
              key={item.slug}
              id={item.slug}
              className={`sp-offer sp-offer-${illustration.kind} section-shell`}
              aria-labelledby={`${item.slug}-title`}
            >
              <div className="sp-offer-copy">
                <h2 id={`${item.slug}-title`}>{item.name}</h2>
                <h3>{item.line}</h3>
                <p>{item.description}</p>
                <ul className="sp-inline-scope">
                  {item.items.map((scope) => (
                    <li key={scope}>{scope}</li>
                  ))}
                </ul>
                <Link
                  href={illustration.href}
                  className="text-link"
                  target={
                    illustration.href === site.auditBooking
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    illustration.href === site.auditBooking
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {illustration.label}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>
              <ServicePlayground kind={illustration.kind} compact />
            </section>
          );
        })}
      </div>
      <section className="sp-fit section-shell" id="more-capabilities">
        <h2>
          Need something
          <br />
          <span>else?</span>
        </h2>
        <div className="additional-services">
          {additionalServices.map((service) => (
            <article id={service.slug} key={service.slug}>
              <Link href={service.href} className="text-link">
                {service.name}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <OngoingSupport />
      <ContactCta />
    </main>
  );
}
