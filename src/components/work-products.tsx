import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { serviceCatalog } from "@/lib/services";

const workServices = [
  serviceCatalog[0],
  serviceCatalog[1],
  serviceCatalog[3],
  serviceCatalog[2],
];

export function WorkProducts() {
  return (
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
      <Link className="text-link work-focus-link" href="/labs">
        Explore Zavino Labs
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
