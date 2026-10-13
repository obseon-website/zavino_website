import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="home-hero section-shell" aria-labelledby="hero-heading">
      <div className="home-hero-intro">
        <h1
          id="hero-heading"
          aria-label="Grow your business. Simplify the work."
        >
          <span className="hero-reveal-line" aria-hidden="true">
            <span>Grow your business.</span>
          </span>
          <span className="hero-reveal-line" aria-hidden="true">
            <span>Simplify the work.</span>
          </span>
        </h1>
        <div className="home-hero-copy">
          <p>
            We build AI systems for sales, daily operations, and content
            workflows. We also develop SaaS products and custom web apps for
            your next idea.
          </p>
          <a
            href={site.auditBooking}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.auditLabel} <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a href="#solutions" className="text-link hero-explore">
            Explore what we build <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="hero-location">Based in Dhaka. Working worldwide.</p>
        </div>
      </div>
      <figure className="home-hero-figure">
        <Image
          src="/media/flight-ramp.webp"
          alt="An ivory miniature fighter jet poised on a forest-green ribbon ramp that bridges three stone blocks in a sunlit studio."
          width={1536}
          height={1024}
          sizes="(max-width: 700px) 100vw, 92vw"
          preload
          className="home-hero-image"
        />
        <figcaption>
          <span>Thoughtfully connected. Made for people.</span>
          <span>Independent studio · Dhaka, Bangladesh</span>
        </figcaption>
      </figure>
    </section>
  );
}
