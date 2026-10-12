import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Zavino Labs — built here, tested in the real world",
  description:
    "Zavino Labs is where we build and test our own products and digital experiments. Explore Aston Mark, our launched digital product brand.",
  alternates: { canonical: "/labs" },
};

const astonFacts = [
  [
    "Overview",
    "A digital product brand offering creator tooling for portrait photography, sold directly to consumers in Bangladesh and international markets.",
  ],
  [
    "Audience",
    "Photography enthusiasts, students, freelancers, and content creators who produce and edit primarily from mobile devices.",
  ],
  [
    "Scope of ownership",
    "Product strategy, brand identity, storefront, payment processing, automated delivery, and performance marketing are handled entirely in-house.",
  ],
  [
    "Rationale",
    "Operating a direct-to-consumer product gives our team continuous first-hand exposure to the same commercial requirements we address for clients.",
  ],
];

export default function ZavinoLabsPage() {
  return (
    <main id="main" className="sp-page sp-owned-page">
      <section className="sp-about-hero sp-owned-hero section-shell">
        <h1>
          Built here.
          <br />
          <span>Tested in the real world.</span>
        </h1>
        <div className="sp-about-hero-bottom">
          <p>
            Zavino Labs is where we build and test our own micro-SaaS products,
            AI tools, web applications, and digital experiments. The ideas that
            prove useful become products we continue to improve and grow.
          </p>
          <a
            className="text-link"
            href="https://astonmarkbd.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Aston Mark <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="sp-about-statement sp-owned-statement section-shell">
        <div>
          <h2>
            Operating our own
            <br />
            <span>ventures keeps us accountable.</span>
          </h2>
        </div>
        <div>
          <p>
            Owning a product places every commercial decision — pricing,
            checkout, fulfilment, and customer support — under our direct
            responsibility.
          </p>
          <p>
            We therefore evaluate payment flows, delivery automation, and
            retention practice against our own revenue before recommending them
            to a client.
          </p>
          <p>
            The outcome is a body of tested operating experience rather than
            theoretical guidance, applied directly to the work we deliver.
          </p>
        </div>
      </section>

      <section className="sp-owned-feature section-shell" id="aston-mark">
        <div className="sp-section-heading">
          <div>
            <h2>Aston Mark</h2>
            <p>Launched · Zavino-owned digital product</p>
            <p>
              Aston Mark is a digital product brand serving photographers and
              content creators. It packages a posing and outfit guide with
              professional Lightroom presets, CapCut LUTs, typography, and
              wallpapers, sold as a single instant-download bundle through
              astonmarkbd.com.
            </p>
          </div>
        </div>
        <div className="sp-owned-feature-grid">
          <figure className="sp-owned-panel">
            <span className="sp-art-label">ASTONMARKBD.COM / PRODUCT</span>
            <Image
              className="sp-owned-cover"
              src="/media/aston-mark-posebook-cover.webp"
              alt="Cover of the Aston Mark Men’s Posebook, the e-book at the centre of the Aston Mark product bundle"
              width={483}
              height={683}
              sizes="(max-width: 760px) 86vw, 34vw"
              priority
            />
            <figcaption className="sp-owned-panel-foot">
              The Men’s Posebook · Instant download · astonmarkbd.com
            </figcaption>
          </figure>
          <dl className="sp-owned-facts">
            {astonFacts.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sp-owned-actions">
          <a
            className="button"
            href="https://astonmarkbd.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit astonmarkbd.com <ArrowUpRight size={19} />
          </a>
          <p>
            A launched digital-download business, built and operated by Zavino.
          </p>
        </div>
      </section>

      <section className="sp-about-engagement sp-owned-offer section-shell">
        <div>
          <h2>
            The same standard
            <br />
            applies to <span>your product.</span>
          </h2>
          <p>
            The team that owns and operates Zavino’s ventures is the team
            accountable for your engagement.
          </p>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>End-to-end accountability</h3>
              <p>
                Product design, storefront, payments, delivery, and marketing
                are delivered by a single accountable team.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Capital committed to our own work</h3>
              <p>
                Our ventures finance our own experimentation. Clients benefit
                from that experience without bearing its cost.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Responsibility after launch</h3>
              <p>
                We maintain and improve our own products as they evolve. Client
                builds can include ongoing maintenance, optimization, and
                support after launch.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
