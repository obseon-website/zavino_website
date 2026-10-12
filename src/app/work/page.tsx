import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ReelGallery } from "@/components/reel-gallery";
import { SpWorkGallery } from "@/components/sp-work-gallery";
import { WorkflowDemo } from "@/components/workflow-demo";
import { ProductDemo } from "@/components/product-demo";
export const metadata: Metadata = {
  title: "Work — systems, products & creative heritage",
  description:
    "Explore Zavino’s product concepts, owned digital product, website practice, campaign imagery, and films. Every example is identified by its actual role.",
  alternates: { canonical: "/work" },
};
const categories = [
  ["automation-agents", "AI Automation & Agents"],
  ["digital-products", "SaaS & Digital Products"],
  ["web-platforms", "Web Apps & Platforms"],
  ["digital-experiences", "Websites & Digital Experiences"],
  ["creative-heritage", "Creative Heritage"],
];
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
            Working products, clearly labeled explorations, and the creative
            heritage behind our point of view.
          </p>
        </div>
        <nav className="work-category-nav" aria-label="Work categories">
          {categories.map(([id, title]) => (
            <a href={`#${id}`} key={id}>
              {title} <ArrowDown size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
      <section className="work-category section-shell" id="automation-agents">
        <h2>AI Automation & Agents</h2>
        <article className="sp-lab-project">
          <div className="sp-lab-project-heading">
            <div>
              <h3>
                From customer signal
                <br />
                to approved action.
              </h3>
              <p>
                Zavino Internal Prototype. An illustrative workflow connecting
                data, eligibility rules, human review, and a feedback path. This
                is an internal prototype, not a client deployment or measured
                result.
              </p>
            </div>
            <Link href="/services/ai-operations-agents" className="text-link">
              Explore the service <ArrowUpRight size={18} />
            </Link>
          </div>
          <WorkflowDemo />
        </article>
      </section>
      <section className="work-category section-shell" id="digital-products">
        <h2>SaaS & Digital Products</h2>
        <article className="work-evidence-row">
          <div>
            <h3>Aston Mark</h3>
          </div>
          <div>
            <p>
              Launched / Zavino-owned digital product. A downloadable creative
              product with an in-house storefront, payments, and automated
              delivery. A real digital product business; its scope is distinct
              from a subscription SaaS platform.
            </p>
            <Link href="/labs#aston-mark" className="text-link">
              Meet Aston Mark in Zavino Labs <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </section>
      <section className="work-category section-shell" id="web-platforms">
        <h2>Web Apps & Platforms</h2>
        <article className="sp-lab-project">
          <div className="sp-lab-project-heading">
            <div>
              <h3>
                One workspace.
                <br />
                Different responsibilities.
              </h3>
              <p>
                Product Concept. A local concept for a shared platform, explored
                through customer, admin, and operations roles. An example of our
                thinking, not a commissioned client case.
              </p>
            </div>
            <Link href="/services/web-apps-platforms" className="text-link">
              Explore platform delivery <ArrowUpRight size={18} />
            </Link>
          </div>
          <ProductDemo />
        </article>
      </section>
      <section className="work-category section-shell" id="digital-experiences">
        <h2>Websites & Digital Experiences</h2>
        <article className="work-evidence-row">
          <div>
            <h3>
              The experience
              <br />
              you are using.
            </h3>
          </div>
          <div>
            <p>
              Our own Zavino website brings together an editorial content
              structure, responsive interactions, service concepts, and a direct
              inquiry path. It demonstrates our website practice in a context
              you can explore yourself.
            </p>
            <Link href="/services/web-development" className="text-link">
              Explore website design & development <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </section>
      <section
        className="work-category sp-work-archive section-shell"
        id="creative-heritage"
      >
        <div className="sp-work-collection-heading">
          <h2>Creative Heritage</h2>
          <p>
            Campaign creative, product storytelling, and films from our creative
            practice. Each project is described by its actual creative role.
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
      <ContactCta />
    </main>
  );
}
