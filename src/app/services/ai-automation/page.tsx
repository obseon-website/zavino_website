import type { Metadata } from "next";
import { ServicePlayground } from "@/components/service-playground";
import {
  ServiceBrief,
  ServiceFaq,
  ServiceHero,
  ServiceScope,
  ServiceSectionHeading,
} from "@/components/service-page";

export const metadata: Metadata = {
  title: "AI for sales & daily operations",
  description:
    "Connect your tools, follow up with leads, and automate routine tasks. Build AI assistants with your team in control of important decisions.",
  alternates: { canonical: "/services/ai-automation" },
};

export default function AiAutomationPage() {
  return (
    <main id="main" className="sp-page sp-ai-page">
      <ServiceHero
        label="AI Revenue / AI Operations & Agents"
        title={
          <>
            Better sales.
            <br />
            <span>A lighter workday.</span>
          </>
        }
        description="AI systems that follow up with leads, answer questions, and handle routine tasks. Built around the tools your team already uses."
        facts={["Sales follow-up", "AI assistants", "People in control"]}
      />
      <section className="sp-demo-section section-shell" id="approach">
        <ServiceSectionHeading
          title={
            <>
              A question comes in.
              <br />
              Your assistant prepares an answer.
            </>
          }
        >
          Try this example. The assistant uses approved company information, and
          your team reviews the reply.
        </ServiceSectionHeading>
        <ServicePlayground kind="operations" />
      </section>
      <ServiceScope
        title={
          <>
            What we can
            <br />
            build for you.
          </>
        }
        description="Start with one task that takes too much time. We’ll connect the steps and test it with your team."
        items={[
          {
            title: "Lead capture & follow-up",
            description:
              "Collect inquiries, organize customer details, and prepare the next sales message.",
          },
          {
            title: "Support & knowledge assistants",
            description:
              "Answer common questions using information your team has approved.",
          },
          {
            title: "Routine work & reporting",
            description:
              "Move information between tools, prepare reports, and reduce repeated data entry.",
          },
          {
            title: "Review & monitoring",
            description:
              "Keep important decisions with your team and make failed steps easy to spot.",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Can you use our current tools?",
            answer:
              "We check how your tools share data before planning the connections. We’ll explain any limits during scoping.",
          },
          {
            question: "Will the AI act without our approval?",
            answer:
              "We agree on what it can do and which actions need a person’s review before we build it.",
          },
          {
            question: "Does every task need AI?",
            answer:
              "No. Clear rules work well for predictable tasks. We use AI where it helps with questions, documents, or drafts.",
          },
          {
            question: "What happens after launch?",
            answer:
              "We show your team how to use the system. Maintenance, monitoring, and improvements can be included in a support plan.",
          },
        ]}
      />
      <ServiceBrief
        title="What could your team spend less time on?"
        description="Tell us about the task and the tools you use. We’ll help you choose a useful first step."
      />
    </main>
  );
}
