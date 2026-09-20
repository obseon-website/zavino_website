import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { clients, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet Zavino, an independent creative and marketing agency in Dhaka. Strategy, production, branding, and campaigns under one roof.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <main id="main">
      <section className="page-hero section-shell">
        <span className="eyebrow">ABOUT ZAVINO</span>
        <h1>
          Different disciplines.
          <br />
          <span>One shared ambition.</span>
        </h1>
        <p>
          We bring the thinking, the craft, and the follow-through. You bring
          the vision.
        </p>
      </section>
      <section className="about-statement section-shell" data-reveal>
        <h2>
          Your brand.
          <br />
          Our collective
          <br />
          <span>obsession.</span>
        </h2>
        <div>
          <p>
            Zavino is an independent creative and marketing agency based in
            Dhaka, Bangladesh. We work with ambitious businesses that care about
            how their brand looks, feels, and performs.
          </p>
          <p>
            Our strength is the connection between disciplines. A strategy that
            shapes the shoot. A visual identity that carries into the campaign.
            A team that sees the whole picture.
          </p>
          <p>
            From restaurants and lifestyle brands to automotive and corporate
            businesses, we create work with a clear point of view and a reason
            to exist.
          </p>
          <Link href="/#work" className="text-link">
            Explore the work <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <div className="about-image section-shell">
        <Image
          src="/media/aviation-1800.webp"
          width={1800}
          height={783}
          alt="An aircraft banking through dark green clouds, reflecting Zavino’s spirit of flight"
          sizes="100vw"
        />
      </div>
      <section className="values section-shell">
        <h2>How we show up.</h2>
        <div className="values-grid">
          {[
            [
              "The idea comes first.",
              "Before the camera rolls or the campaign goes live, we find the thought that makes your brand worth paying attention to.",
            ],
            [
              "Craft is the standard.",
              "Lighting, language, pacing, placement. The details are where a good idea becomes something you can feel.",
            ],
            [
              "One connected crew.",
              "You work with a team that connects strategy, production, and delivery. Fewer handoffs. A shared understanding of what matters.",
            ],
            [
              "Clear from the start.",
              "We agree on the scope, milestones, and expectations before work begins. Then we keep the conversation open all the way through.",
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
        <h2>Good company. Shared ambition.</h2>
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
            Creative & marketing agency
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
