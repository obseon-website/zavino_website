import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { ServiceArtifact } from "@/components/service-page";

export const metadata: Metadata = {
  title: "AI automation, SaaS & web development",
  description:
    "Explore Zavino’s AI automation, SaaS development, and web platforms, with supporting AI creative, content, branding, marketing, and SEO capabilities.",
  alternates: { canonical: "/services" },
};

const capabilities = [
  {
    id: "ai-automation",
    kind: "automation" as const,
    title: "AI automation",
    question: "Where does the work get stuck?",
    description:
      "Connect the data, decisions, and handoffs across your business. Build a system that knows when to act, when to wait, and when to bring a person in.",
    scope: [
      "Workflow & data discovery",
      "AI agents & integrations",
      "Human review & guardrails",
      "Monitoring & iteration",
    ],
    link: "Explore AI automation",
  },
  {
    id: "saas-development",
    kind: "saas" as const,
    title: "SaaS development",
    question: "What should your product make possible?",
    description:
      "Turn a defined problem into a product people can use. We shape the first useful release and build the roles, data, and operating foundations behind it.",
    scope: [
      "Product discovery & UX",
      "Frontend & backend engineering",
      "Roles, billing & integrations",
      "Release & ownership",
    ],
    link: "Explore SaaS development",
  },
  {
    id: "web-development",
    kind: "web" as const,
    title: "Web development",
    question: "What does your digital front door need to do?",
    description:
      "A website, store, portal, or custom application. Designed around the people using it and connected to the operations that make it work.",
    scope: [
      "Sites, stores & portals",
      "Custom web applications",
      "CMS & business integrations",
      "Accessibility, speed & SEO",
    ],
    link: "Explore web development",
  },
];
const supporting = [
  [
    "Custom AI",
    "Private knowledge assistants, retrieval over approved data, tailored agents, and in-product AI. We scope evaluation, access boundaries, cost, and the decisions a person should own.",
  ],
  [
    "AI UGC creative",
    "AI-assisted creator-style concepts, image and video variants, and platform-ready campaign assets. Synthetic media, rights, brand standards, and approval are part of the brief.",
  ],
  [
    "Content production",
    "Cinematic reels, product and food films, photography, motion graphics, and CGI. A clear creative direction carries through from production to the final deliverables.",
  ],
  [
    "Branding & creative",
    "Brand identity, visual direction, packaging, and social content. A coherent system for the touchpoints around a product, a launch, or an established business.",
  ],
  [
    "Digital marketing",
    "Campaign strategy, Meta and Google execution, creative inputs, tracking, and iteration. The channel plan follows the audience and objective, with measurement defined in scope.",
  ],
  [
    "SEO",
    "Technical and on-page SEO, local search and citations, and off-page strategy. We connect site structure, content, and discoverability without promising a ranking.",
  ],
  [
    "Offline marketing",
    "Event and stall production, print and banner materials, and activation campaigns. Physical experiences can follow the same brand direction as the digital work.",
  ],
];

export default function ServicesPage() {
  return (
    <main id="main" className="sp-page">
      <section className="sp-index-hero section-shell">
        <h1>
          Make the pieces
          <br />
          <span>work together.</span>
        </h1>
        <div className="sp-index-intro">
          <p>
            AI automation. SaaS products. Web platforms. We build around the
            work your business needs to do, and the people who need to do it.
          </p>
          <a href="#ai-automation" className="text-link">
            Find your starting point <span aria-hidden="true">↓</span>
          </a>
        </div>
        <nav className="sp-service-nav" aria-label="Our capabilities">
          {capabilities.map((item, i) => (
            <a key={item.id} href={`#${item.id}`}>
              <span>0{i + 1}</span>
              {item.title}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </nav>
      </section>
      <div className="sp-offers">
        {capabilities.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className={`sp-offer sp-offer-${item.kind} section-shell`}
            aria-labelledby={`${item.id}-title`}
          >
            <div className="sp-offer-copy">
              <h2 id={`${item.id}-title`}>{item.title}</h2>
              <h3>{item.question}</h3>
              <p>{item.description}</p>
              <ul className="sp-inline-scope">
                {item.scope.map((scope) => (
                  <li key={scope}>{scope}</li>
                ))}
              </ul>
              <Link href={`/services/${item.id}`} className="text-link">
                {item.link}
                <ArrowUpRight size={20} />
              </Link>
            </div>
            <ServiceArtifact kind={item.kind} />
          </section>
        ))}
      </div>
      <section
        className="sp-more section-shell"
        id="more-capabilities"
        aria-labelledby="sp-more-title"
      >
        <div className="sp-more-heading">
          <h2 id="sp-more-title">
            The work
            <br />
            around the work.
          </h2>
          <p>
            A product launch may need a brand. An automated journey may need
            creative. These capabilities can support a wider build or form their
            own engagement.
          </p>
          <Link
            href="/contact?focus=another-capability&source=/services"
            className="text-link"
          >
            Discuss a supporting need <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="sp-more-list">
          {supporting.map(([title, description], index) => (
            <article key={title}>
              <span className="sp-number">
                {String(index + 4).padStart(2, "0")}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-fit section-shell">
        <h2>
          You do not need
          <br />
          to arrive with a specification.
        </h2>
        <div>
          <p>
            Bring the workflow, the product idea, or the platform that needs to
            improve. We map the people and systems involved, agree on a useful
            first release, and make the next decisions clear.
          </p>
          <Link href="/contact?source=/services" className="text-link">
            Tell us what needs to change <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
