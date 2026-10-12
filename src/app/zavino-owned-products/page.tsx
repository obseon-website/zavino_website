import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Zavino owned products — ventures we build and operate",
  description:
    "The digital products and smaller ventures Zavino owns and operates end to end, including Aston Mark — designed, engineered, sold, and maintained by the same team that serves our clients.",
  alternates: { canonical: "/zavino-owned-products" },
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

const ventures = [
  [
    "Digital product businesses",
    "E-books, preset and asset libraries, template sets, and downloadable toolkits, packaged and sold as complete offerings.",
  ],
  [
    "Specialist e-commerce",
    "Focused storefronts serving a defined audience, with payment processing and fulfilment automated from end to end.",
  ],
  [
    "Content and media properties",
    "Publishing channels supported by production pipelines that run from brief to distribution without manual handling.",
  ],
  [
    "Proprietary internal software",
    "Operational tools developed for Zavino's own use and subsequently offered to clients with equivalent requirements.",
  ],
];

export default function ZavinoOwnedProductsPage() {
  return (
    <main id="main" className="sp-page sp-owned-page">
      <section className="sp-about-hero sp-owned-hero section-shell">
        <h1>
          Products we own
          <br />
          <span>and operate.</span>
        </h1>
        <div className="sp-about-hero-bottom">
          <p>
            In addition to client engagements, Zavino holds a portfolio of
            digital products and smaller ventures. Each one is designed,
            engineered, marketed, and maintained by our own team.
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

      <section className="sp-owned-feature section-shell">
        <div className="sp-section-heading">
          <div>
            <h2>Aston Mark</h2>
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
          <p>One of several ventures currently under Zavino ownership.</p>
        </div>
      </section>

      <section className="sp-owned-ventures section-shell">
        <div className="sp-section-heading">
          <div>
            <h2>
              A portfolio of
              <br />
              <span>smaller ventures.</span>
            </h2>
            <p>
              Aston Mark is our most visible example. It sits alongside a wider
              group of smaller properties that Zavino owns and operates — each
              built on the same technology stack and operating principles we
              provide to clients.
            </p>
          </div>
        </div>
        <div className="sp-owned-venture-grid">
          {ventures.map(([title, body], index) => (
            <article key={title}>
              <span className="sp-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
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
                Owned products are maintained indefinitely. We apply the same
                continuing responsibility to client engagements.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
