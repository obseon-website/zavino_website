import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Content production, digital marketing, branding, and offline activations. Explore Zavino’s full-service creative capabilities and request a tailored quote.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <main id="main">
      <section className="page-hero section-shell">
        <span className="eyebrow">OUR EXPERTISE</span>
        <h1>
          From the first spark.
          <br />
          <span>To the full picture.</span>
        </h1>
        <p>
          Four disciplines. One connected team. Built around what your brand
          needs next.
        </p>
      </section>
      <div>
        {services.map((service, i) => (
          <section
            className="service-detail section-shell"
            id={service.href}
            key={service.href}
          >
            <div data-reveal>
              <span className="service-number">
                0{i + 1} / {service.name.toUpperCase()}
              </span>
              <h2>{service.name}</h2>
              <h3>{service.short}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="service-detail-image" data-reveal>
              <Image
                src={`/media/${service.image}.webp`}
                width={960}
                height={960}
                alt={`A selection of Zavino’s ${service.name.toLowerCase()} creative work`}
                sizes="(max-width: 800px) 90vw, 45vw"
              />
            </div>
          </section>
        ))}
      </div>
      <section className="engagements section-shell">
        <h2>A project. Or a partnership.</h2>
        <div className="engagement-grid">
          <article data-reveal>
            <span className="mono">PROJECT ENGAGEMENT</span>
            <h3>One clear ambition.</h3>
            <p>
              A launch, a brand identity, a campaign, or a production. A defined
              scope, agreed milestones, and a quote tailored to the work.
            </p>
            <a
              className="text-link"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s talk <ArrowUpRight size={20} />
            </a>
          </article>
          <article data-reveal>
            <span className="mono">MONTHLY PARTNERSHIP</span>
            <h3>A crew for the long run.</h3>
            <p>
              Ongoing creative, content, and campaign support. A monthly scope
              with a shared plan, regular check-ins, and room to keep improving.
            </p>
            <a
              className="text-link"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s talk <ArrowUpRight size={20} />
            </a>
          </article>
        </div>
      </section>
      <section className="faq section-shell">
        <h2>A few things to know.</h2>
        {[
          [
            "How do I get a quote?",
            "Call or message us on WhatsApp with a little about your brand, the work you have in mind, and your timeline. We’ll discuss the details and send a written proposal with the scope, fees, and next steps.",
          ],
          [
            "Can you handle the whole campaign?",
            "Yes. We connect strategy, creative direction, production, and campaign execution. Your proposal will explain exactly what’s included and identify any separate media or third-party costs.",
          ],
          [
            "Do you offer fixed packages?",
            "Our work is quote-based. We scope each engagement around its creative requirements, production needs, and deliverables, rather than forcing every brand into the same package.",
          ],
          [
            "How do payments work?",
            "Projects normally begin with a 50% advance, with the balance due before final delivery. Monthly retainers are paid in advance. Your proposal confirms the schedule. Quotes are primarily in BDT; any other currency must be agreed and supported by the payment method.",
          ],
          [
            "Can I work with you on just one service?",
            "Absolutely. We can join you for a single production or bring the full team together for a wider engagement. We’ll recommend the scope that fits your brief.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <ContactCta />
    </main>
  );
}
