import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { ContactCta } from "@/components/footer";
import { projects } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const solutions = [
  {
    number: "01",
    label: "AI AUTOMATION",
    title: "Make customer and operational data useful.",
    description:
      "We connect your systems, map the decisions your teams make, and build workflows that act on the right signal at the right time.",
    details: ["Customer journeys & offer orchestration", "AI agents with human checkpoints", "CRM, data & API integrations"],
    href: "/services#ai-automation",
  },
  {
    number: "02",
    label: "SAAS DEVELOPMENT",
    title: "Build the product your business actually needs.",
    description:
      "From a focused first release to a robust platform, we design and engineer SaaS products, portals, dashboards, and internal tools around real workflows.",
    details: ["Product strategy & UX", "Custom web apps & SaaS", "Roles, billing & integrations"],
    href: "/services#saas-development",
  },
  {
    number: "03",
    label: "WEB DEVELOPMENT",
    title: "Give every digital touchpoint a job to do.",
    description:
      "We build websites and ecommerce experiences that connect cleanly with your wider stack, perform well, and support growth after launch.",
    details: ["Business websites & ecommerce", "Custom frontends & web platforms", "Performance, SEO & ongoing improvement"],
    href: "/services#web-development",
  },
];

const delivery = [
  ["01", "Understand the system", "We map the workflow, the data, the people involved, and the result worth improving."],
  ["02", "Build around reality", "We design the right product and integrations, then test decisions with the people who will use them."],
  ["03", "Launch and improve", "We plan handoff, measurement, and iteration as part of the build so the system can keep earning its place."],
];

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <section className="ai-positioning section-shell" aria-labelledby="positioning-title">
        <span className="eyebrow">THE WORK WE TAKE ON</span>
        <div>
          <h2 id="positioning-title">Business-wide problems need <span>connected solutions.</span></h2>
          <p>
            A useful AI system does more than answer a prompt. It understands
            where information lives, when a decision is needed, and how an
            action reaches the right person. We focus on that full path—from
            the first data signal to a working product or process.
          </p>
        </div>
      </section>

      <section className="ai-solutions section-shell" id="solutions" aria-labelledby="solutions-title">
        <div className="ai-section-heading">
          <span className="eyebrow">CORE CAPABILITIES</span>
          <h2 id="solutions-title">What we build.</h2>
          <p>Three connected disciplines for ambitious digital work.</p>
        </div>
        <div className="ai-solution-list">
          {solutions.map((solution) => (
            <article className="ai-solution" key={solution.number}>
              <div className="ai-solution-index">
                <span>{solution.number} / 03</span>
                <span>{solution.label}</span>
              </div>
              <div className="ai-solution-main">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>{solution.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </div>
              <Link className="ai-solution-link" href={solution.href} aria-label={"Explore " + solution.label.toLowerCase()}>
                <ArrowUpRight size={26} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-example section-shell" aria-labelledby="example-title">
        <div className="ai-example-lead">
          <span className="eyebrow">ONE POSSIBLE APPLICATION</span>
          <h2 id="example-title">From customer signals to <em>the right next offer.</em></h2>
          <p>
            Imagine a large customer base with data spread across commerce,
            CRM, and support. A connected system can identify a useful moment,
            prepare a relevant offer, route it for approval, and deliver it
            through the right channel.
          </p>
          <small>Illustrative use case. This is a proposed workflow, not a client result.</small>
        </div>
        <ol className="ai-example-flow">
          <li><span>01</span><strong>Unify</strong><p>Bring customer events and business rules into one usable view.</p></li>
          <li><span>02</span><strong>Decide</strong><p>Use AI where it helps; keep eligibility, timing, and approvals explicit.</p></li>
          <li><span>03</span><strong>Activate</strong><p>Send the approved offer through the channels your team already uses.</p></li>
          <li><span>04</span><strong>Learn</strong><p>Measure response and improve the next decision.</p></li>
        </ol>
      </section>

      <section className="ai-delivery section-shell" aria-labelledby="delivery-title">
        <div className="ai-section-heading">
          <span className="eyebrow">HOW WE WORK</span>
          <h2 id="delivery-title">Built for real operations.</h2>
          <p>Clear scope, useful checkpoints, and a system your team can understand.</p>
        </div>
        <div className="ai-delivery-grid">
          {delivery.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-more section-shell" aria-labelledby="more-title">
        <span className="eyebrow">BEYOND THE CORE BUILD</span>
        <div>
          <h2 id="more-title">The wider team is here when you need it.</h2>
          <p>
            We also create custom AI experiences, AI UGC creative, campaign
            content, brand systems, and digital marketing. Start with the
            automation or product challenge; we can connect the surrounding
            work when it serves the same goal.
          </p>
          <Link href="/services#more-capabilities" className="text-link">
            See all services <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      <section className="ai-work section-shell" id="work" aria-labelledby="work-title">
        <div className="ai-work-heading">
          <div>
            <span className="eyebrow">SELECTED CREATIVE WORK</span>
            <h2 id="work-title">A look at our craft.</h2>
          </div>
          <p>Selected campaign and content work. These projects show our creative practice, not AI or SaaS engagements.</p>
        </div>
        <div className="ai-work-grid">
          {projects.slice(0, 2).map((project) => (
            <article key={project.id}>
              <Image src={"/media/" + project.image + "-960.webp"} alt={project.alt} width={960} height={960} sizes="(max-width: 700px) 90vw, 45vw" />
              <div><h3>{project.title}</h3><span>{project.category}</span></div>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
