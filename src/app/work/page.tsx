import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ReelGallery } from "@/components/reel-gallery";
import { SpWorkGallery } from "@/components/sp-work-gallery";

export const metadata: Metadata = {
  title: "Selected work — campaigns & films",
  description:
    "See campaign visuals and films from Zavino’s creative projects. Looking for our software products? Explore Zavino Labs.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main" className="sp-page sp-work-page">
      <section className="sp-work-hero section-shell">
        <h1>
          Selected work.
          <br />
          <span>A creative point of view.</span>
        </h1>
        <div className="sp-work-intro">
          <p>Campaign visuals and films from our creative projects.</p>
          <nav aria-label="Work collections">
            <a href="#creative-heritage">
              Campaigns
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#films">
              Films
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <Link href="/labs">
              Our products
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>
      <section
        className="sp-work-archive section-shell"
        id="creative-heritage"
        aria-labelledby="campaigns-heading"
      >
        <div className="sp-work-collection-heading">
          <h2 id="campaigns-heading">Campaigns.</h2>
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
      </section>
      <ContactCta />
    </main>
  );
}
