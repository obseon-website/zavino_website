import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { ServiceExperience } from "@/components/service-experience";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { ContactCta } from "@/components/footer";
import { homeProcess } from "@/lib/home";
import { projects } from "@/lib/site";

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
          <h2 id="services-heading">
            A little less friction.
            <br />A lot more possible.
          </h2>
          <p>
            Start with what your business needs. <br />
            We’ll bring the right mix of design and engineering.
          </p>
        </div>
        <ServiceExperience />
        <div className="home-services-foot">
          <p>
            Need a brand, content, or a campaign to go with it? That’s part of
            our practice, too.
          </p>
          <Link href="/services#more-capabilities" className="text-link">
            More ways we help <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="home-work" id="work" aria-labelledby="work-heading">
        <div className="section-shell">
          <div className="home-section-heading">
            <h2 id="work-heading">Ideas, out in the world.</h2>
            <Link href="/work" className="text-link">
              Explore our work <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <article className="home-owned">
            <Link
              className="home-owned-visual"
              href="/zavino-owned-products"
              aria-label="Explore Aston Mark, a Zavino owned product"
            >
              <Image
                src="/media/aston-mark-posebook-cover.webp"
                width={483}
                height={683}
                alt="The Aston Mark Men’s Posebook cover."
                sizes="(max-width: 700px) 55vw, 280px"
              />
              <span className="home-owned-wordmark" aria-hidden="true">
                Aston Mark
              </span>
            </Link>
            <div className="home-owned-copy">
              <h3>
                Built here.
                <br />
                Run here. <span>Learned here.</span>
              </h3>
              <p>
                Aston Mark is a Zavino owned product. We build and operate the
                business, from its storefront to payments and automated
                delivery.
              </p>
              <p>
                It keeps us close to the everyday details that make a product
                work.
              </p>
              <Link className="text-link" href="/zavino-owned-products">
                Meet Aston Mark <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
          <div className="home-creative-heading">
            <h3>A creative point of view.</h3>
            <p>
              Selected campaign and product imagery from our creative practice.
            </p>
          </div>
          <div className="home-projects">
            {[projects[1], projects[3]].map((project) => (
              <Link
                href={`/work#${project.id}`}
                className="home-project"
                key={project.id}
              >
                <div className="home-project-image">
                  <Image
                    src={`/media/${project.image}-960.webp`}
                    alt={project.alt}
                    width={960}
                    height={960}
                    sizes="(max-width: 700px) 90vw, 45vw"
                  />
                </div>
                <div className="home-project-caption">
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="home-process section-shell"
        aria-labelledby="process-heading"
      >
        <div className="home-section-heading">
          <h2 id="process-heading">
            Clear from the
            <br />
            first conversation.
          </h2>
          <p>
            Good work comes from shared understanding. <br />
            Here’s how we get there.
          </p>
        </div>
        <ol className="home-process-list">
          {homeProcess.map((stage, index) => (
            <li key={stage.title}>
              <span className="process-step">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <span className="process-deliverable">{stage.deliverable}</span>
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/about">
          A little more about us <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
      <ContactCta />
      <ProgressiveBlur />
    </main>
  );
}
