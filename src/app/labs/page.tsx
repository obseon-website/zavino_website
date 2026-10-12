import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { labProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Zavino Labs — our products",
  description:
    "Explore Outbid.bd, our business discovery platform in progress, and Forma, our browser-based image conversion tool.",
  alternates: { canonical: "/labs" },
};

export default function ZavinoLabsPage() {
  return (
    <main id="main" className="sp-page sp-labs-page">
      <section className="sp-about-hero section-shell">
        <h1>
          Our ideas.
          <br />
          <span>Built by Zavino.</span>
        </h1>
        <div className="sp-about-hero-bottom">
          <p>
            Zavino Labs is home to the products we build ourselves. Explore
            what’s ready to use and what we’re working on next.
          </p>
          <a href="#products" className="text-link">
            Explore our products <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        className="labs-products section-shell"
        id="products"
        aria-labelledby="products-heading"
      >
        <h2 id="products-heading">From our team.</h2>
        {labProducts.map((product) => (
          <article
            className="labs-product"
            id={product.id}
            key={product.id}
            aria-labelledby={`${product.id}-title`}
          >
            <div
              className={`labs-product-visual labs-visual-${product.id}`}
              aria-hidden="true"
            >
              <span className="labs-product-logotype">{product.name}</span>
              {product.id === "outbid" ? (
                <div className="labs-ranking">
                  {["Discover", "Explore", "Connect"].map((label, index) => (
                    <div key={label}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{label}</span>
                      <ArrowUpRight size={18} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="labs-file-formats">
                  <span>PNG</span>
                  <ArrowUpRight size={24} />
                  <span>WebP</span>
                </div>
              )}
              <span className="labs-visual-caption">{product.category}</span>
            </div>
            <div className="labs-product-copy">
              <div className="labs-product-heading">
                <h3 id={`${product.id}-title`}>{product.name}</h3>
                <span className="labs-product-status">{product.status}</span>
              </div>
              <p>{product.description}</p>
              <p className="labs-product-note">{product.note}</p>
              <a
                className="text-link"
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.action}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>
      <ContactCta />
    </main>
  );
}
