import type { Metadata } from "next";
import { RevenueInbox } from "@/components/concepts/revenue-inbox";
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
  (item) => item.slug === "ai-revenue-systems",
)!;
export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: "/services/ai-revenue-systems" },
};
export default function Page() {
  return (
    <main id="main" className="sp-page business-service-page">
      <ServiceHero
        label={service.name}
        title={"Follow up with purpose."}
        description={service.description}
        focus={service.slug}
        action="Tell us about your requirement"
        facts={service.items.slice(0, 3)}
      />
      <section className="service-concept-section section-shell">
        <div className="service-concept-intro">
          <h2>A good inquiry deserves a clear next step.</h2>
          <p>
            Choose an inquiry, check what is known, and prepare a useful
            handoff. Missing details take a different route.
          </p>
          <p className="concept-invitation">
            Try the three inquiries, then choose the follow-up channel.
          </p>
        </div>
        <RevenueInbox />
      </section>
      <section className="service-principle section-shell">
        <h2>A useful reply starts with enough context.</h2>
        <p>
          We map where inquiries arrive, the information a salesperson needs,
          and the point where a person should take over. Your team approves the
          promises, tone, and escalation rules.
        </p>
      </section>
      <ServiceScope
        title="What we can build together."
        description={service.line}
        items={[
          {
            title: "Capture the opportunity",
            description:
              "Bring website forms, WhatsApp, and other agreed channels into an organized lead record.",
          },
          {
            title: "Qualify with context",
            description:
              "Identify intent, missing details, and the next useful question without inventing customer information.",
          },
          {
            title: "Connect the sales workflow",
            description:
              "Keep CRM stages, ownership, reminders, and follow-up actions aligned.",
          },
          {
            title: "Improve the conversation",
            description:
              "Review handoffs and real sales feedback to refine messages and conversion paths.",
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
            question: "Will the system send messages without approval?",
            answer:
              "We agree on what can send automatically and what needs review. Sensitive, ambiguous, or high-value conversations can always route to your team.",
          },
          {
            question: "Can it work with our current CRM?",
            answer:
              "We assess your CRM, channel permissions, and available integrations during discovery. The scope identifies what connects directly and what needs a custom integration.",
          },
          {
            question: "Do you guarantee a sales increase?",
            answer:
              "No. We define the workflow and measurement plan together. Lead quality, offer, team response, and the buying decision all affect results.",
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
