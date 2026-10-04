import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { clients, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet Zavino, a Dhaka-based team building AI automation, SaaS products, web platforms, and the creative work around them.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <main id="main">
      <section className="page-hero section-shell">
        <span className="eyebrow">ABOUT ZAVINO</span>
        <h1>We build for <span>the bigger picture.</span></h1>
        <p>
          Zavino brings product thinking, engineering, AI, and creative
          direction together to solve connected business problems.
        </p>
      </section>
      <section className="about-statement section-shell" data-reveal>
        <h2>
          Complex work.
          <br />
          <span>Clear thinking.</span>
        </h2>
        <div>
          <p>
            Zavino is based in Dhaka, Bangladesh. Our focus is AI automation,
            SaaS products, and web development for businesses with important
            workflows to improve.
          </p>
          <p>
            We look at the full path: how data enters a system, how decisions
            are made, how people stay in control, and how the result reaches
            customers or teams.
          </p>
          <p>
            Our creative and marketing practice remains part of the team. When
            a product needs a brand, content, or a campaign around it, those
            disciplines can work from the same direction.
          </p>
          <Link href="/services" className="text-link">
            Explore our services <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <div className="about-system-band section-shell" aria-hidden="true">
        <span>DATA</span><span>DECISIONS</span><span>PRODUCT</span><span>GROWTH</span>
      </div>
      <section className="values section-shell">
        <h2>How we show up.</h2>
        <div className="values-grid">
          {[
            [
              "Start with the workflow.",
              "We identify the people, systems, and decisions involved before choosing the technology.",
            ],
            [
              "Make it usable.",
              "A system earns its place when the people using it can understand it, trust it, and move faster with it.",
            ],
            [
              "Build the full path.",
              "Product, data, AI, web, and creative work should fit together around one business goal.",
            ],
            [
              "Keep decisions visible.",
              "We agree on scope and milestones, review what works, and make the next step explicit.",
            ],
          ].map(([title, description]) => (
            <article key={title} data-reveal>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="client-list-section section-shell">
        <h2>Selected creative clients.</h2>
        <p>These names reflect our existing creative and marketing work.</p>
        <div className="client-list">
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </section>
      <section className="contact-details section-shell">
        <div>
          <h3>The business behind the work.</h3>
          <p>
            {site.name}
            <br />
            AI automation, SaaS & web development
            <br />
            {site.address}
          </p>
        </div>
        <div>
          <h3>A direct connection.</h3>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <a href={site.phoneLink}>{site.phone}</a>
          </p>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
