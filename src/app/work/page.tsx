import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { WorkProducts } from "@/components/work-products";
import { WorkBrands } from "@/components/work-brands";
import "../labs/labs.css";
import "./work.css";

export const metadata: Metadata = {
  title: "Selected work — software & AI capabilities",
  description:
    "Explore Outbid.bd and Forma with real app screenshots, technical capabilities, and interactive previews. See what Zavino builds for your business.",
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
          <p>AI capabilities and products built by Zavino.</p>
          <nav aria-label="Work collections">
            <a href="#what-we-build">
              Capabilities
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#software-work">
              Software
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <Link href="/labs">
              Zavino Labs
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
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
      <WorkBrands />
      <ContactCta />
    </main>
  );
}
