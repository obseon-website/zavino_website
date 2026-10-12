import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ReelGallery } from "@/components/reel-gallery";
import { SpWorkGallery } from "@/components/sp-work-gallery";
import { WorkflowDemo } from "@/components/workflow-demo";
import { ProductDemo } from "@/components/product-demo";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Work — technology, products & creative heritage",
  description:
    "Explore Zavino’s selected campaign creative, product imagery, and films, alongside clearly labeled in-house automation and SaaS concepts.",
  alternates: { canonical: "/work" },
};
export default function WorkPage() {
  return (
    <main id="main" className="sp-page sp-work-page">
      <section className="sp-work-hero section-shell">
        <h1>
          The work.
          <br />
          <span>The possibilities.</span>
        </h1>
        <div className="sp-work-intro">
          <p>
            Selected work, our launched digital product, and clearly labeled
            internal concepts. Explore the technology we build and the creative
            heritage behind it.
          </p>
          <nav aria-label="Work collections">
            {[
              ["automation-agents", "AI Automation & Agents"],
              ["digital-products", "SaaS & Digital Products"],
              ["web-platforms", "Web Apps & Platforms"],
              ["digital-experiences", "Websites & Digital Experiences"],
              ["creative-heritage", "Creative Heritage"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="sp-work-archive section-shell" id="creative-heritage">
        <div className="sp-work-collection-heading">
          <h2>
            Creative Heritage.
            <br />
            <span>A distinct point of view.</span>
          </h2>
          <p>
            Campaign creative, product storytelling, and visual content. Each
            project below is described by its actual creative role.
          </p>
        </div>
        <SpWorkGallery />
        <div className="sp-work-films">
          <div className="sp-work-film-note">
            <h3>Films & motion</h3>
            <p>
              Food, product, and restaurant films, with a look behind the
              production. Select a frame to watch.
            </p>
          </div>
          <ReelGallery />
        </div>
      </section>
      <section className="sp-lab section-shell" id="zavino-lab">
        <div className="sp-lab-heading">
          <div>
            <h2>
              Ideas you
              <br />
              <span>can inspect.</span>
            </h2>
          </div>
          <p>
            In-house concept demonstrations of automation and product thinking.
            These examples are illustrative explorations; they do not represent
            a commissioned deployment or client results.
          </p>
        </div>
        <article className="sp-lab-project" id="automation-agents">
          <div className="sp-lab-project-heading">
            <div>
              <span className="sp-concept-label">
                ZAVINO INTERNAL PROTOTYPE
              </span>
              <h3>
                AI Automation
                <br />& Agents.
              </h3>
              <p>
                Concept scope: connected data, eligibility rules, AI assistance,
                human review, action, and a feedback path.
              </p>
            </div>
            <Link href="/services/ai-automation" className="text-link">
              Explore the approach <ArrowUpRight size={18} />
            </Link>
          </div>
          <WorkflowDemo />
        </article>
        <article className="sp-lab-project" id="web-platforms">
          <div className="sp-lab-project-heading">
            <div>
              <span className="sp-concept-label">PRODUCT CONCEPT</span>
              <h3>
                Web Apps
                <br />& Platforms.
              </h3>
              <p>
                Concept scope: a useful product workflow viewed through
                customer, admin, and operations roles.
              </p>
            </div>
            <Link href="/services/saas-development" className="text-link">
              Explore product delivery <ArrowUpRight size={18} />
            </Link>
          </div>
          <ProductDemo />
        </article>
      </section>

      <section className="sp-fit section-shell" id="digital-products">
        <h2>
          SaaS &<br />
          Digital Products
        </h2>
        <div>
          <p>
            Aston Mark is a launched Zavino-owned digital product: a
            downloadable creative bundle with an in-house storefront, payments,
            and automated delivery. Its scope is a digital product business, not
            a subscription SaaS platform.
          </p>
          <Link href="/labs#aston-mark" className="text-link">
            Explore Aston Mark in Zavino Labs{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="sp-fit section-shell" id="digital-experiences">
        <h2>
          Websites &<br />
          Digital Experiences
        </h2>
        <div>
          <p>
            The Zavino website you are using is our own studio project. Its
            editorial structure, responsive interface concepts, and connected
            inquiry journey demonstrate our website practice.
          </p>
          <Link href="/services/web-development" className="text-link">
            Explore our website practice{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
