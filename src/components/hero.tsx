import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="home-hero section-shell" aria-labelledby="hero-heading">
      <div className="home-hero-intro">
        <h1 id="hero-heading" aria-label="Good technology. A lighter workday.">
          <span className="hero-reveal-line" aria-hidden="true">
            <span>Good technology.</span>
          </span>
          <span className="hero-reveal-line" aria-hidden="true">
            <span>A lighter workday.</span>
          </span>
        </h1>
        <div className="home-hero-copy">
          <p>
            We build AI automation, SaaS products, and websites that make the
            everyday work of business feel easier.
          </p>
          <Link href="/contact" className="button">
            Discuss your project <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <figure className="home-hero-figure">
        <Image
          src="/media/workday-bridge.webp"
          alt="A pale blue ribbon bridges three separate blocks in a sunlit studio, an abstract illustration of connected work."
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
