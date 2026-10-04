import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { additionalServices, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI automation, SaaS & web development",
  description:
    "Zavino builds connected AI automation, custom SaaS products, and web platforms. Explore the work we can scope for your business.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <main id="main">
      <section className="page-hero services-hero section-shell">
        <span className="eyebrow">CAPABILITIES / ZAVINO</span>
        <h1>AI systems. <span>SaaS products.</span> Web platforms.</h1>
        <p>
          We take on connected, meaningful builds: automation across teams,
          SaaS products, and the web platforms around them. Every engagement
          begins with the real workflow and a clear scope.
        </p>
        <Link href="/contact" className="button">
          Discuss a project <ArrowUpRight size={19} />
        </Link>
      </section>

      <div className="services-list">
        {services.map((service, i) => (
          <section
            className="service-offer section-shell"
            id={service.href}
            key={service.href}
            aria-labelledby={service.href + "-title"}
          >
            <div className="service-offer-title">
              <span className="eyebrow">0{i + 1} / CORE CAPABILITY</span>
              <h2 id={service.href + "-title"}>{service.name}</h2>
              <h3>{service.short}</h3>
            </div>
            <div className="service-offer-body">
              <p>{service.description}</p>
              <span className="service-offer-label">TYPICAL SCOPE</span>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="service-offer-example">
                <span>EXAMPLE APPLICATION / ILLUSTRATIVE</span>
                <p>{service.example}</p>
              </div>
              <Link href="/contact" className="text-link">
                Talk about {service.name.toLowerCase()} <ArrowUpRight size={20} />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="services-more section-shell" id="more-capabilities" aria-labelledby="more-capabilities-title">
        <div className="services-more-heading">
          <span className="eyebrow">ADDITIONAL CAPABILITIES</span>
          <h2 id="more-capabilities-title">More ways to make it work.</h2>
          <p>These services can support a core build or stand on their own when the scope calls for them.</p>
        </div>
        <div className="services-more-list">
          {additionalServices.map((service, i) => (
            <article key={service.name}>
              <span>0{i + 4}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-engagement section-shell" aria-labelledby="engagement-title">
        <span className="eyebrow">FROM IDEA TO OPERATION</span>
        <div>
          <h2 id="engagement-title">Start with the problem. Scope the right build.</h2>
          <p>
            We begin by understanding the people, data, systems, and decisions
            involved. Then we agree on the first useful release, the integrations
            it needs, and how success will be judged. Larger platforms can grow
            in deliberate stages.
          </p>
          <Link href="/contact" className="text-link">
            Tell us what you are building <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
