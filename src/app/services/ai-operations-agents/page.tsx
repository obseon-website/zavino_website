import type { Metadata } from "next";
import { OperationsDesk } from "@/components/concepts/operations-desk";
import {
  ServiceHero,
  ServiceScope,
  ServiceProcess,
  ServiceFaq,
  ServiceBrief,
} from "@/components/service-page";
import { OngoingSupport } from "@/components/ongoing-support";
import { serviceCatalog, auditCopy } from "@/lib/services";
import { homeProcess } from "@/lib/home";
const service = serviceCatalog.find(
  (item) => item.slug === "ai-operations-agents",
)!;
export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: "/services/ai-operations-agents" },
};
export default function Page() {
  return (
    <main id="main" className="sp-page business-service-page">
      <ServiceHero
        label={service.name}
        title={"Give good people their time back."}
        description={service.description}
        focus={service.slug}
        action="Tell us about your requirement"
        facts={service.items.slice(0, 3)}
      />
      <section className="service-concept-section section-shell">
        <div className="service-concept-intro">
          <h2>An agent should know when to ask.</h2>
          <p>
            Give the assistant approved sources, ask a question, and see why a
            confident answer is sometimes the wrong next step.
          </p>
          <p className="concept-invitation">
            Switch the question. Remove a source. Try the human handoff.
          </p>
        </div>
        <OperationsDesk />
      </section>
      <section className="service-principle section-shell">
        <h2>Connected work, with clear boundaries.</h2>
        <p>
          We start with the repetitive task and its exceptions. Sources,
          permissions, approvals, and recovery paths are designed together so
          the team can understand and operate the system.
        </p>
      </section>
      <ServiceScope
        title="What we can build together."
        description={service.line}
        items={[
          {
            title: "Map the everyday friction",
            description:
              "Trace repeated tasks, duplicated data, reporting, and handoffs across your existing tools.",
          },
          {
            title: "Build knowledge and support agents",
            description:
              "Use approved information to assist teams and route uncertain cases to the right person.",
          },
          {
            title: "Connect your business tools",
            description:
              "Automate agreed tasks across documents, CRM, support, reporting, and internal systems.",
          },
          {
            title: "Keep the system accountable",
            description:
              "Define logs, evaluations, ownership, monitoring, and an ongoing improvement plan.",
          },
        ]}
      />
      <ServiceProcess
        stages={homeProcess.map((stage) => ({
          title: stage.title,
          description: stage.description,
          artifact: stage.deliverable,
        }))}
      />
      <OngoingSupport />
      <ServiceFaq
        items={[
          {
            question: "Does every workflow need AI?",
            answer:
              "No. Deterministic rules are often the right tool for a predictable task. We use AI where language, unstructured information, or judgment support makes it useful.",
          },
          {
            question: "How do you handle private business information?",
            answer:
              "Discovery defines access, data retention, approved providers, and what information the workflow actually needs. The implementation follows those agreed boundaries.",
          },
          {
            question: "What happens when an agent is unsure?",
            answer:
              "It should hold the action, explain the missing context, and route the work to a person. We design and test that path alongside the happy path.",
          },
        ]}
      />
      <ServiceBrief
        focus={service.slug}
        title="Find a practical place to start."
        description={auditCopy}
        action="Share your requirement"
      />
    </main>
  );
}
