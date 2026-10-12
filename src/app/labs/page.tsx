import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { LabsJourney } from "@/components/concepts/labs-journey";
export const metadata: Metadata = {
  title: "Zavino Labs — built here, tested in the real world",
  description:
    "Explore Zavino’s own products and experiments. Aston Mark is our launched digital product brand, with an in-house storefront, payments, and automated delivery.",
  alternates: { canonical: "/labs" },
};
export default function LabsPage() {
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
          <a href="#aston-mark" className="text-link">
            Meet our launched product <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="sp-owned-feature section-shell" id="aston-mark">
        <div className="sp-section-heading">
          <div>
            <h2>Aston Mark</h2>
            <p className="labs-feature-status">
              Launched · Zavino-owned digital product
            </p>
            <p>
              A digital product brand for photographers and creators. The Men’s
              Posebook comes with a collection of creative assets, sold as an
              instant-download bundle through our own storefront.
            </p>
          </div>
        </div>
        <div className="sp-owned-feature-grid">
          <figure className="sp-owned-panel">
            <span className="sp-art-label">
              A CREATIVE PRODUCT, BUILT AND OPERATED HERE
            </span>
            <Image
              className="sp-owned-cover"
              src="/media/aston-mark-posebook-cover.webp"
              alt="The Aston Mark Men’s Posebook cover"
              width={483}
              height={683}
              sizes="(max-width:760px) 75vw, 34vw"
            />
            <figcaption className="sp-owned-panel-foot">
              The Men’s Posebook · Digital download
            </figcaption>
          </figure>
          <dl className="sp-owned-facts">
            {[
              [
                "The product",
                "A posing and outfit guide, Lightroom presets, CapCut LUTs, typography, and wallpapers for creators.",
              ],
              [
                "The audience",
                "Photography enthusiasts, students, freelancers, and content creators working primarily from mobile devices.",
              ],
              [
                "Our responsibility",
                "Product strategy, brand, storefront, payment processing, automated delivery, and ongoing improvements.",
              ],
              [
                "What it teaches us",
                "The everyday details behind a useful purchase: a clear offer, a working checkout, reliable delivery, and customer support.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{body}</dd>
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
            Visit Aston Mark <ArrowUpRight size={19} />
          </a>
          <p>A digital download business. Built and operated by Zavino.</p>
        </div>
      </section>
      <section className="labs-experiment-section section-shell">
        <div className="sp-section-heading">
          <div>
            <h2>
              There’s a business
              <br />
              behind the buy button.
            </h2>
            <p>
              Explore the decisions around a digital purchase. This illustrative
              journey shows the operating thinking behind the storefront.
            </p>
          </div>
        </div>
        <LabsJourney />
      </section>
      <ContactCta />
    </main>
  );
}
