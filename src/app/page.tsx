import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { ServiceExperience } from "@/components/service-experience";
import { ContactCta } from "@/components/footer";
import { homeProcess } from "@/lib/home";
import { labProducts } from "@/lib/products";
import { ProductLogo } from "@/components/product-logo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main" className="home-page">
      <Hero />
      <section
        className="home-services section-shell"
        id="solutions"
        aria-labelledby="services-heading"
      >
        <div className="home-section-heading">
          <h2 id="services-heading">Four ways we help.</h2>
          <p>Choose what your business needs.</p>
        </div>
        <ServiceExperience />
        <div className="home-services-foot">
          <Link href="/services" className="text-link">
            See all services <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="home-work" id="labs" aria-labelledby="labs-heading">
        <div className="section-shell home-owned">
          <Link
            className="home-owned-visual home-labs-visual"
            href="/labs"
            aria-label="Explore products built by Zavino Labs"
          >
            <span className="home-labs-wordmark" aria-hidden="true">
              zavino<span>.</span>
              <br />
              labs
            </span>
            <span className="home-labs-note" aria-hidden="true">
              Our ideas. Built and put to work.
              <ArrowUpRight size={22} />
            </span>
          </Link>
          <div className="home-owned-copy">
            <h2 id="labs-heading">Zavino Labs</h2>
            <p>
              Our own products, built by our team. See what we’ve made and try
              it for yourself.
            </p>
            <ul className="home-labs-products">
              {labProducts.map((product) => (
                <li key={product.id}>
                  <Link href={`/labs#${product.id}`}>
                    <span>
                      <ProductLogo product={product.id} compact />
                      <small>{product.status}</small>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/labs">
              Explore our products <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="home-process section-shell"
        aria-labelledby="process-heading"
      >
        <div className="home-section-heading">
          <h2 id="process-heading">Simple from the start.</h2>
        </div>
        <ol className="home-process-list">
          {homeProcess.map((stage, index) => (
            <li key={stage.title}>
              <span className="process-step" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactCta />
    </main>
  );
}
