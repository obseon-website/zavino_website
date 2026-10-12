import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { ServicePlayground } from "@/components/service-playground";
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
  title: "SaaS development from idea to useful product",
  description:
    "Build a new SaaS product or move a prototype into sustained use. Product discovery, UX, roles, architecture, integrations, testing, and launch with Zavino.",
  alternates: { canonical: "/services/saas-development" },
};
export default function SaasDevelopmentPage() {
  return (
    <main id="main" className="sp-page sp-saas-page">
      <ServiceHero
        label="SaaS development"
        title={
          <>
            A product people
            <br />
            <span>can build on.</span>
          </>
        }
        description="From a new idea to a usable first release. From a fragile prototype to a service your team can operate. We bring product design and engineering together around the first workflow that matters."
        focus="saas-development"
        action="Discuss a SaaS build"
        facts={[
          "Product discovery & design",
          "Accounts, roles & data",
          "A deliberate path to release",
        ]}
      />
      <section className="sp-product-showcase section-shell" id="approach">
        <div className="sp-product-intro">
          <h2>
            One product.
            <br />
            <span>Every perspective.</span>
          </h2>
          <p>
            A customer needs a clear next step. An admin needs control.
            Operations needs to know what happened. A useful product considers
            all three.
          </p>
        </div>
        <ServicePlayground kind="saas" />
      </section>
      <section className="sp-release section-shell">
        <ServiceSectionHeading
          title={
            <>
              The first release is a decision.
              <br />
              Make it a good one.
            </>
          }
        >
          We work backward from one useful customer outcome, then decide what
          must exist now and what can follow when real use gives us better
          evidence.
        </ServiceSectionHeading>
        <div className="sp-release-grid">
          <article className="sp-release-now">
            <h3>
              First release.
              <br />
              Prove the workflow.
            </h3>
            <ul>
              {[
                "A defined user and a real problem",
                "The core path from start to outcome",
                "Accounts, roles, and data boundaries",
                "The integrations that path depends on",
                "Acceptance criteria and release checks",
              ].map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <p>Enough to be useful, testable, and supportable.</p>
          </article>
          <article className="sp-release-later">
            <h3>
              Next releases.
              <br />
              Build from real use.
            </h3>
            <ul>
              {[
                "New workflows and user groups",
                "Deeper automation and integrations",
                "Advanced reporting and controls",
                "Scale and performance improvements",
                "Features supported by user feedback",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>A roadmap with reasons, priorities, and room to learn.</p>
          </article>
        </div>
      </section>
      <section className="sp-foundations section-shell">
        <div>
          <h2>
            Good foundations
            <br />
            make room
            <br />
            <span>for what is next.</span>
          </h2>
        </div>
        <div className="sp-foundation-list">
          {[
            [
              "People & permissions",
              "Define who can see, change, approve, and administer. Tenant separation and account structures are designed around the business model where needed.",
            ],
            [
              "Data & architecture",
              "Model the information the product depends on. Choose frontend, backend, storage, and integration boundaries that fit the release and its likely growth.",
            ],
            [
              "Billing & connected services",
              "Scope subscriptions, payments, notifications, external APIs, and AI features where they belong in the product’s core workflow.",
            ],
            [
              "Operating reality",
              "Test empty states, errors, loading, access denial, and recovery. Plan deployment, backups, logs, instrumentation, and the support responsibilities.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ServiceScope
        title={
          <>
            From product idea
            <br />
            to an owned release.
          </>
        }
        description="New products and existing prototypes need different starting points. We assess what is there, agree on the scope, and make delivery responsibilities explicit."
        items={[
          {
            title: "Product direction & release scope",
            description:
              "User journeys, the problem to solve, prioritized requirements, prototype reviews, and acceptance criteria for a useful first release.",
          },
          {
            title: "A designed & built product",
            description:
              "Responsive interfaces, frontend and backend implementation, user roles, data structures, and the billing or integrations in the agreed scope.",
          },
          {
            title: "QA & launch preparation",
            description:
              "Functional checks across the important journeys, access and error states, performance needs, deployment setup, and a release checklist.",
          },
          {
            title: "Handover & an iteration plan",
            description:
              "Documentation, source and account ownership agreed in scope, operational responsibilities, and a prioritized path for the next release.",
          },
        ]}
      />
      <ServiceProcess
        title="Make the product real, one decision at a time."
        stages={[
          {
            title: "Discover",
            description:
              "Identify users, commercial intent, core workflows, constraints, and what would make the first release worthwhile.",
            artifact: "OUTPUT / PRODUCT BRIEF",
          },
          {
            title: "Shape",
            description:
              "Work through the UX, test a prototype, and align the architecture and release scope with the product’s priorities.",
            artifact: "OUTPUT / RELEASE BLUEPRINT",
          },
          {
            title: "Build",
            description:
              "Deliver in visible increments. Review working journeys, test the boundaries, and connect the systems the product needs.",
            artifact: "OUTPUT / TESTED PRODUCT",
          },
          {
            title: "Release & learn",
            description:
              "Launch with agreed ownership. Use actual feedback, instrumentation, and operating experience to prioritize the next work.",
            artifact: "OUTPUT / NEXT-RELEASE PLAN",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Can you work from an existing prototype?",
            answer:
              "Yes. We begin with a product and technical review: what works, what is missing, and what can be retained. The route to production may involve improving the current code, replacing specific parts, or rebuilding a core workflow. That decision follows the review.",
          },
          {
            question: "How do we decide what belongs in the MVP?",
            answer:
              "We identify the user, the core outcome, and the complete path needed to reach it. We include the permissions, integrations, and operational requirements that make that path usable. Features that do not support the initial outcome go into a reasoned roadmap.",
          },
          {
            question: "Can the product include AI features?",
            answer:
              "Yes, where they help the user complete the work. We can scope assistants, retrieval, drafting, extraction, or agent workflows with evaluation and clear boundaries. AI features should have sensible error states, cost controls, and human review where needed.",
          },
          {
            question: "Who owns the code, hosting, and accounts?",
            answer:
              "We agree on source-code ownership, access to repositories, hosting and third-party accounts, documentation, and handover in the engagement scope. The aim is to make ownership and the responsibilities after release explicit before the build begins.",
          },
          {
            question: "What about security and ongoing support?",
            answer:
              "Access, data boundaries, dependencies, testing, and deployment practices are part of the technical scope. Specific regulatory or security requirements need to be identified in discovery. Maintenance, incident responsibilities, and future releases are agreed as a support plan.",
          },
        ]}
      />
      <ServiceRelated
        title="A product needs a clear way in."
        description="A public website, acquisition experience, or customer portal can share the product’s direction and connect to the same systems."
        href="/services/web-development"
        label="Explore web development"
      />
      <ServiceBrief
        focus="saas-development"
        title="What is the first useful thing your product should do?"
        description="Tell us who will use it, what workflow it should support, and whether you are starting from an idea, prototype, or existing product."
        action="Discuss a SaaS build"
      />
    </main>
  );
}
