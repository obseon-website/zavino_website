import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { WebDemo } from "@/components/product-demo";
import {
  ServiceBrief,
  ServiceFaq,
  ServiceHero,
  ServiceProcess,
  ServiceRelated,
  ServiceScope,
  ServiceSectionHeading,
} from "@/components/service-page";

export const metadata: Metadata = {
  title: "Web development for sites, stores, portals & apps",
  description:
    "Build a clear digital experience with Zavino. Websites, ecommerce, portals, and custom applications with UX, integrations, accessibility, performance, and SEO.",
  alternates: { canonical: "/services/web-development" },
};
const paths = [
  {
    title: "Business websites",
    number: "01",
    description:
      "A clear expression of the business, built for the people you need to reach.",
    scope: "Content strategy · CMS · conversion paths",
  },
  {
    title: "Ecommerce",
    number: "02",
    description:
      "A usable path from product discovery to purchase, connected to how the store runs.",
    scope: "Catalog · checkout · operations",
  },
  {
    title: "Portals & internal tools",
    number: "03",
    description:
      "A shared space for customers or teams to find information and move work forward.",
    scope: "Accounts · permissions · connected data",
  },
  {
    title: "Custom applications",
    number: "04",
    description:
      "Purpose-built interfaces and backend systems for workflows standard tools do not fit.",
    scope: "Custom UX · APIs · frontend & backend",
  },
];
export default function WebDevelopmentPage() {
  return (
    <main id="main" className="sp-page sp-web-page">
      <ServiceHero
        label="Web development"
        title={
          <>
            A better way
            <br />
            <span>into your business.</span>
          </>
        }
        description="A corporate site, a store, a customer portal, or a custom application. We build clear digital experiences and connect them to the content, data, and operations behind your business."
        focus="web-development"
        action="Discuss a web platform"
        facts={[
          "Every screen considered",
          "Design & engineering together",
          "Connected to your operations",
        ]}
      />
      <section className="sp-web-paths section-shell" id="approach">
        <ServiceSectionHeading title="What should your platform do?">
          The right build begins with the job it needs to perform. These are
          distinct paths, with a scope shaped around the audience and the
          business.
        </ServiceSectionHeading>
        <div className="sp-path-grid">
          {paths.map((item) => (
            <article key={item.number}>
              <div className="sp-path-top">
                <span className="sp-number">{item.number}</span>
                <ArrowUpRight size={24} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="sp-path-scope">{item.scope}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-web-showcase section-shell">
        <div className="sp-web-showcase-heading">
          <h2>
            An experience that
            <br />
            <span>holds together.</span>
          </h2>
          <p>
            Responsive design changes the composition, the navigation, and the
            way content is presented. It should preserve a clear route to the
            action people came to take.
          </p>
        </div>
        <WebDemo />
        <p className="sp-concept-label">
          ZAVINO LAB / ILLUSTRATIVE RESPONSIVE CONCEPT
        </p>
      </section>
      <section className="sp-web-standards section-shell">
        <div>
          <h2>
            Made to use.
            <br />
            Built to run.
          </h2>
          <p>
            The visible experience and the foundations are one piece of work. We
            plan both from the start.
          </p>
        </div>
        <div className="sp-standards-grid">
          {[
            [
              "Clear UX & content",
              "Information architecture, navigation, forms, and content hierarchy that help the right person reach the right action.",
            ],
            [
              "Content operations",
              "CMS structure, editing workflows, permissions, and training that fit how your team will maintain the platform.",
            ],
            [
              "Performance & access",
              "Responsive behavior, keyboard access, readable interfaces, image strategy, and performance checks across real journeys.",
            ],
            [
              "Integration & quality",
              "Forms, payments, CRM, APIs, backend logic, analytics, and error handling scoped around the business process.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-search-band">
        <div className="sp-search-content section-shell">
          <div>
            <h2>
              A good platform
              <br />
              should be findable.
            </h2>
            <p>
              We scope technical SEO alongside the build: crawlable content,
              metadata, redirects, structured data where appropriate, and a
              clean launch. Content, local search, citations, and broader SEO
              strategy can extend that foundation.
            </p>
            <Link href="/services#more-capabilities" className="text-link">
              Explore SEO & growth capabilities <ArrowUpRight size={18} />
            </Link>
          </div>
          <span className="sp-search-art" aria-hidden="true">
            <i />
            <b>Structure</b>
            <ArrowRight size={18} />
            <b>Content</b>
            <ArrowRight size={18} />
            <b>Discovery</b>
          </span>
        </div>
      </section>
      <ServiceScope
        title={
          <>
            The experience.
            <br />
            The systems behind it.
          </>
        }
        description="We choose the platform around your content, transactions, workflows, and team. Shopify, WordPress, or a custom build can each be the right answer to a different problem."
        items={[
          {
            title: "Experience & platform plan",
            description:
              "Audience journeys, information architecture, responsive designs, content requirements, and the CMS or application approach that fits the work.",
          },
          {
            title: "A connected implementation",
            description:
              "Frontend and backend development, content setup, agreed integrations, forms, commerce or account features, and the paths a visitor needs to complete.",
          },
          {
            title: "QA & launch preparation",
            description:
              "Checks for the important devices and journeys, accessibility, performance, analytics, technical SEO, redirects, and a controlled launch.",
          },
          {
            title: "Handover & continuous improvement",
            description:
              "Editing guidance, account and source ownership agreed in scope, maintenance responsibilities, and a plan for improving the experience after launch.",
          },
        ]}
      />
      <ServiceProcess
        title="A clear path from brief to live platform."
        stages={[
          {
            title: "Understand",
            description:
              "Clarify the audience, the business goal, current content and systems, and the actions the platform needs to support.",
            artifact: "OUTPUT / PLATFORM BRIEF",
          },
          {
            title: "Design",
            description:
              "Shape the journeys and content, resolve the responsive experience, and agree on the platform and integration scope.",
            artifact: "OUTPUT / EXPERIENCE PLAN",
          },
          {
            title: "Build & connect",
            description:
              "Implement the interface and backend, bring in the content, and test the connected business journeys.",
            artifact: "OUTPUT / WORKING PLATFORM",
          },
          {
            title: "Launch & improve",
            description:
              "Complete release checks, hand over the editing and operations, and use the agreed measures to guide improvements.",
            artifact: "OUTPUT / LAUNCH & SUPPORT PLAN",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Should we use Shopify, WordPress, or a custom platform?",
            answer:
              "It depends on the main job: managing content, running commerce, supporting accounts, or handling a custom workflow. We assess your team’s needs, integrations, operating costs, and limits before recommending an approach.",
          },
          {
            question: "Can you improve an existing website or application?",
            answer:
              "Yes. We review the experience and technical foundations first, then identify what should be retained, improved, or replaced. A redesign can include content structure, frontend quality, integrations, and a planned migration.",
          },
          {
            question: "Are content, branding, and SEO part of the build?",
            answer:
              "They can be included when agreed in scope. We identify what your team will supply and what Zavino needs to create. Technical SEO is considered during planning; ongoing content, search strategy, and campaigns are scoped separately where needed.",
          },
          {
            question: "How do you handle accessibility and performance?",
            answer:
              "We build semantic interfaces and check navigation, keyboard access, responsive layouts, readable content, and the important user journeys. Performance work covers assets, loading behavior, and the platform’s constraints. Specific standards and acceptance targets are agreed for the project.",
          },
          {
            question: "Can our team maintain the platform after launch?",
            answer:
              "We plan the editing and operating workflow with your team. CMS setup, documentation, training, account ownership, maintenance, and support responsibilities are defined in scope so the next steps are clear.",
          },
        ]}
      />
      <ServiceRelated
        title="When a platform becomes a product."
        description="If the core need includes repeatable customer workflows, subscription access, and a roadmap of product features, our SaaS practice is a useful next conversation."
        href="/services/saas-development"
        label="Explore SaaS development"
      />
      <ServiceBrief
        focus="web-development"
        title="What should your next platform make easier?"
        description="Tell us whether you need a site, store, portal, or custom application, who it is for, and what it should connect to."
        action="Discuss a web platform"
      />
    </main>
  );
}
