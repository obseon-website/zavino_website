import type { Metadata } from "next";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ReelGallery } from "@/components/reel-gallery";
import { SpWorkGallery } from "@/components/sp-work-gallery";
import { WorkProducts } from "@/components/work-products";
import "../labs/labs.css";
import "./work.css";

export const metadata: Metadata = {
  title: "Selected work — software, systems & creative",
  description:
    "Explore Outbid.bd and Forma with app screenshots and interactive previews, alongside Zavino’s AI capabilities, campaign visuals, and films.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main" className="sp-page sp-work-page">
      <section className="sp-work-hero section-shell">
        <h1>
          Selected work.
          <br />
          <span>Built for what’s next.</span>
        </h1>
        <div className="sp-work-intro">
          <p>Products, AI capabilities, and a creative point of view.</p>
          <nav aria-label="Work collections">
            <a href="#software-work">
              Software
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#creative-heritage">
              Campaigns
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#films">
              Films
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </section>
      <WorkProducts />

{/* older zavino works are commented out.  */}


      {/* <section
        className="sp-work-archive section-shell"
        id="creative-heritage"
        aria-labelledby="campaigns-heading"
      >
        <div className="sp-work-collection-heading">
          <h2 id="campaigns-heading">Content & campaigns.</h2>
          <p>Campaign visuals and films from our client creative projects.</p>
        </div>
        <SpWorkGallery />
        <div className="sp-work-films" id="films">
          <div className="sp-work-film-note">
            <h2>Films & motion.</h2>
            <p>
              Food, products, and a look behind the scenes. Select a film to
              watch.
            </p>
          </div>
          <ReelGallery />
        </div>
      </section> */}
      <ContactCta />
    </main>
  );
}
