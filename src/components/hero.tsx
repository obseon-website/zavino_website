import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="home-hero section-shell" aria-labelledby="hero-heading">
      <div className="home-hero-intro">
        <h1
          id="hero-heading"
          aria-label="Technology that helps businesses move smarter."
        >
          <span className="hero-reveal-line" aria-hidden="true">
            <span>Technology that helps</span>
          </span>
          <span className="hero-reveal-line" aria-hidden="true">
            <span>businesses move smarter.</span>
          </span>
        </h1>
        <div className="home-hero-copy">
          <p>
            Zavino builds AI automation, custom SaaS, web apps, websites, and
            intelligent content workflows that help businesses save time,
            strengthen sales, improve operations, and grow with confidence.
          </p>
          <a
            href={site.auditBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Book an AI Workflow Audit{" "}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a href="#solutions" className="text-link hero-secondary">
            Explore What We Build <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <p className="hero-location">
        Built in Dhaka. Working with ambitious businesses worldwide.
      </p>
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
