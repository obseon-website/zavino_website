import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ReelGallery } from "@/components/reel-gallery";
import { SpWorkGallery } from "@/components/sp-work-gallery";
import { WorkflowDemo } from "@/components/workflow-demo";
import { ProductDemo } from "@/components/product-demo";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Work & Zavino Lab — creative archive and system concepts",
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
            Selected creative work from our archive, and an open look at the
            systems we are exploring in Zavino Lab.
          </p>
          <nav aria-label="Work collections">
            <a href="#creative-archive">
              Creative archive <span aria-hidden="true">↓</span>
            </a>
            <a href="#zavino-lab">
              Zavino Lab <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
      </section>
      <section className="sp-work-archive section-shell" id="creative-archive">
        <div className="sp-work-collection-heading">
          <h2>
            Creative direction.
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
        <article className="sp-lab-project">
          <div className="sp-lab-project-heading">
            <div>
              <span className="sp-concept-label">
                ILLUSTRATIVE WORKFLOW / ZAVINO CONCEPT
              </span>
              <h3>
                From customer signal
                <br />
                to approved action.
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
        <article className="sp-lab-project">
          <div className="sp-lab-project-heading">
            <div>
              <span className="sp-concept-label">
                ILLUSTRATIVE PRODUCT / ZAVINO CONCEPT
              </span>
              <h3>
                One workspace.
                <br />
                Different responsibilities.
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

      <ContactCta />
    </main>
  );
}
