import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { site } from "@/lib/site";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "About Zavino — connected thinking, considered builds",
  description:
    "A Dhaka-based team connecting product thinking, AI, engineering, and creative direction to build automation, SaaS products, and web platforms.",
  alternates: { canonical: "/about" },
};
const principles = [
  [
    "Start with the work.",
    "Understand the people, the data, the decisions, and the friction before choosing the technology.",
  ],
  [
    "Keep people in the picture.",
    "Make interfaces understandable, decisions visible, and approval and ownership explicit.",
  ],
  [
    "Build the whole path.",
    "Connect product, engineering, AI, and creative direction around the same business objective.",
  ],
  [
    "Make the next step clear.",
    "Define scope, review working progress, surface constraints, and agree on what comes next.",
  ],
];
export default function AboutPage() {
  return (
    <main id="main" className="sp-page sp-about-page">
      <section className="sp-about-hero section-shell">
        <h1>
          Connected thinking.
          <br />
          <span>Considered builds.</span>
        </h1>
        <div className="sp-about-hero-bottom">
          <p>
            We bring product thinking, engineering, AI, and creative direction
            together for the work your business needs to do.
          </p>
          <Link href="/services" className="text-link">
            See what we build <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <figure className="sp-about-image section-shell">
        <Image
          src="/media/workday-bridge.webp"
          alt="A blue ribbon connecting three separate blocks in a daylight studio."
          width={1600}
          height={900}
          sizes="(max-width: 1480px) 90vw, 1320px"
        />
        <figcaption>
          <span>CONNECTED WORK / STUDIO ILLUSTRATION</span>
          <span>A visual expression of our approach.</span>
        </figcaption>
      </figure>
      <section className="sp-about-statement section-shell">
        <div>
          <h2>
            Good ideas need
            <br />
            <span>a connected team.</span>
          </h2>
        </div>
        <div>
          <p>
            Zavino is based in Dhaka, Bangladesh. Our focus is AI automation,
            SaaS products, and web platforms for businesses with important
            workflows to improve.
          </p>
          <p>
            We look at how the pieces work together: where data enters, how a
            decision is made, what a person needs to approve, and how the result
            reaches a customer or a team.
          </p>
          <p>
            Our creative and marketing practice is part of that picture. When a
            build needs a brand, content, or a campaign around it, those
            disciplines can work from the same direction.
          </p>
          <Link href="/work" className="text-link">
            Explore our work & concepts <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="sp-about-disciplines section-shell">
        <div className="sp-discipline-row">
          <span>Product</span>
          <ArrowRight size={26} />
          <span>Engineering</span>
          <ArrowRight size={26} />
          <span>AI</span>
          <ArrowRight size={26} />
          <span>Creative</span>
        </div>
      </section>
      <section className="sp-about-principles section-shell">
        <div className="sp-about-principles-heading">
          <h2>
            Complex work.
            <br />
            Clear principles.
          </h2>
        </div>
        <div className="sp-principle-list">
          {principles.map(([title, body], index) => (
            <article key={title}>
              <span className="sp-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-about-engagement section-shell">
        <div>
          <h2>
            Shared context.
            <br />
            <span>Visible progress.</span>
          </h2>
          <p>
            A useful engagement begins with a clear conversation and continues
            through concrete decisions.
          </p>
        </div>
        <ol>
          {[
            [
              "Agree on the problem",
              "We map the goal, users, systems, constraints, and what an improved outcome would look like.",
            ],
            [
              "Define the first release",
              "We make the deliverables, dependencies, responsibilities, and review points explicit in scope.",
            ],
            [
              "Review working progress",
              "Prototypes and working increments give the team something useful to inspect and respond to.",
            ],
            [
              "Prepare the handoff",
              "We agree on documentation, ownership, training, operating needs, and support after launch.",
            ],
          ].map(([title, body], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="sp-about-location section-shell">
        <div>
          <h2>
            Based in Dhaka.
            <br />
            Ready for your
            <br />
            <span>next challenge.</span>
          </h2>
        </div>
        <div className="sp-location-details">
          <span className="sp-location-mark" aria-hidden="true">
            23.81° N / 90.41° E
          </span>
          <address>{site.address}</address>
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
            <ArrowUpRight size={18} />
          </a>
          <a href={site.phoneLink}>{site.phone}</a>
          <p>
            Start with the workflow, product, or platform that needs to change.
            We will discuss fit and a sensible place to begin.
          </p>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
