import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { WorkProductMedia } from "@/components/work-product-media";
import { labProducts } from "@/lib/products";
import { serviceCatalog } from "@/lib/services";

const workServices = [
  serviceCatalog[0],
  serviceCatalog[1],
  serviceCatalog[3],
  serviceCatalog[2],
];

export function WorkProducts() {
  return (
    <>
      <section
        className="work-focus section-shell"
        id="what-we-build"
        aria-labelledby="work-focus-heading"
      >
        <div className="work-section-heading">
          <h2 id="work-focus-heading">What we build now.</h2>
          <p>
            AI for sales, operations, and content. Software built around your
            business.
          </p>
        </div>
        <div className="work-service-list">
          {workServices.map((service) => (
            <Link
              href={`/services#${service.slug}`}
              className="work-service"
              key={service.slug}
            >
              <div className="work-service-title">
                <h3>{service.name}</h3>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
              <p>{service.line}</p>
              <span className="work-service-scope">
                {service.items.slice(0, 3).join(" / ")}
              </span>
            </Link>
          ))}
        </div>
        <a className="text-link work-focus-link" href="#software-work">
          See our software work
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>
      <section
        className="work-products section-shell"
        id="software-work"
        aria-labelledby="work-products-heading"
      >
        <div className="work-section-heading">
          <h2 id="work-products-heading">Products we’ve built.</h2>
          <p>
            Our own products from Zavino Labs. Explore the apps, the
            capabilities behind them, and a little of how they work.
          </p>
        </div>
        {labProducts.map((product) => (
          <article
            className="work-product"
            id={`work-${product.id}`}
            key={product.id}
            aria-labelledby={`work-${product.id}-heading`}
          >
            <WorkProductMedia product={product} />
            <div className="work-product-copy">
              <div className="work-product-title">
                <h3 id={`work-${product.id}-heading`}>{product.name}</h3>
                <span className="work-product-status">{product.status}</span>
              </div>
              <span className="work-product-category">{product.category}</span>
              <p>{product.description}</p>
              <h4>Technical capabilities</h4>
              <dl className="work-product-capabilities">
                {product.work.capabilities.map((capability) => (
                  <div key={capability.name}>
                    <dt>{capability.name}</dt>
                    <dd>{capability.detail}</dd>
                  </div>
                ))}
              </dl>
              <p className="work-product-note">{product.note}</p>
              <div className="work-product-links">
                <a
                  className="text-link"
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.action}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <Link className="text-link" href={`/labs#${product.id}`}>
                  In Zavino Labs
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
