import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ServiceFinder } from "@/components/concepts/service-finder";
import { OngoingSupport } from "@/components/ongoing-support";
import { serviceCatalog, supportingCopy } from "@/lib/services";
export const metadata: Metadata = {
  title: "AI systems, SaaS, web apps & team training",
  description:
    "Explore six ways Zavino helps businesses grow: revenue systems, operations agents, SaaS, web platforms, content workflows, and enterprise AI training in Bangladesh.",
  alternates: { canonical: "/services" },
};
export default function ServicesPage() {
  return (
    <main id="main" className="sp-page">
      <section className="sp-index-hero section-shell">
        <h1>
          Useful technology.
          <br />
          <span>Built around you.</span>
        </h1>
        <div className="sp-index-intro">
          <p>
            For the inquiry that goes unanswered. The task that takes all
            afternoon. The product your business is ready to build.
          </p>
          <a href="#find-your-start" className="text-link">
            Find your starting point <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="section-shell directory-finder" id="find-your-start">
        <ServiceFinder />
      </section>
      <section
        className="service-directory section-shell"
        aria-label="Six primary services"
      >
        {serviceCatalog.map((item, i) => (
          <article key={item.slug} id={item.slug}>
            <span className="eyebrow">0{i + 1}</span>
            <div>
              <h2>
                <Link href={`/services/${item.slug}`}>
                  {item.name}
                  <ArrowUpRight size={25} />
                </Link>
              </h2>
              <p>{item.line}</p>
              {"availability" in item && (
                <p className="availability-note">{item.availability}</p>
              )}
            </div>
            <ul>
              {item.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section
        className="supporting-practice section-shell"
        id="more-capabilities"
      >
        <h2>
          A stronger story
          <br />
          around the build.
        </h2>
        <div>
          <p>{supportingCopy}</p>
          <Link href="/services/web-development" className="text-link">
            Websites & digital experiences <ArrowUpRight size={18} />
          </Link>
          <Link href="/work#creative-heritage" className="text-link">
            Explore our creative heritage <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <OngoingSupport />
      <ContactCta />
    </main>
  );
}
