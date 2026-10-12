import type { Metadata } from "next";
import { ContentStudio } from "@/components/concepts/content-studio";
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
  (item) => item.slug === "ai-content-flows",
)!;
export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: "/services/ai-content-flows" },
};
export default function Page() {
  return (
    <main id="main" className="sp-page business-service-page">
      <ServiceHero
        label={service.name}
        title={"A better rhythm for your content."}
        description={service.description}
        focus={service.slug}
        action="Tell us about your requirement"
        facts={service.items.slice(0, 3)}
      />
      <section className="service-concept-section section-shell">
        <div className="service-concept-intro">
          <h2>One brief. A considered content pack.</h2>
          <p>
            Choose the channels, review the drafts, and send the work back when
            the tone misses. Approval should be a real decision.
          </p>
          <p className="concept-invitation">
            Build a pack, inspect each format, and try a revision.
          </p>
        </div>
        <ContentStudio />
      </section>
      <section className="service-principle section-shell">
        <h2>Your team keeps the final word.</h2>
        <p>
          We build the workflow around your editorial standards: the source
          material, who reviews it, how assets are organized, and what approval
          actually means.
        </p>
      </section>
      <ServiceScope
        title="What we can build together."
        description={service.line}
        items={[
          {
            title: "Research and planning",
            description:
              "Organize approved sources, audience context, content ideas, and the brief that guides the work.",
          },
          {
            title: "Drafting with direction",
            description:
              "Turn a useful brief into channel-specific drafts with explicit brand and factual constraints.",
          },
          {
            title: "Review and repurposing",
            description:
              "Build feedback, revisions, sign-off, and adaptations into one visible process.",
          },
          {
            title: "An organized content operation",
            description:
              "Connect the asset library, calendar, publishing tools, and reporting in the agreed scope.",
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
            question: "Is this a content-production package?",
            answer:
              "The primary service is the system behind content: research, drafting, review, repurposing, and organization. Creative production can support the wider engagement when needed.",
          },
          {
            question: "Will AI publish without our team checking?",
            answer:
              "Publishing rules are part of the scope. A human approval step can be required before any content leaves the system.",
          },
          {
            question: "Can the workflow use our brand voice?",
            answer:
              "Yes. We work from approved examples, style guidance, source material, and reviewer feedback. We also make space for corrections when a draft misses the mark.",
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
