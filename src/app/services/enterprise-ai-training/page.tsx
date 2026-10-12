import type { Metadata } from "next";
import { TrainingWorkshop } from "@/components/concepts/training-workshop";
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
  (item) => item.slug === "enterprise-ai-training",
)!;
export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: "/services/enterprise-ai-training" },
};
export default function Page() {
  return (
    <main id="main" className="sp-page business-service-page">
      <ServiceHero
        label={service.name}
        title={"Confident teams. Better judgment."}
        description={service.description}
        focus={service.slug}
        action="Tell us about your requirement"
        facts={service.items.slice(0, 3)}
      />
      <section className="service-concept-section section-shell">
        <div className="service-concept-intro">
          <h2>Practice the decision behind the prompt.</h2>
          <p>
            Choose a role and work through an everyday AI decision. Useful
            training helps people know what to share, what to check, and when to
            stop.
          </p>
          <p className="concept-invitation">
            Try each role. Feedback explains the reasoning behind the choice.
          </p>
        </div>
        <TrainingWorkshop />
      </section>
      <section className="service-principle section-shell">
        <h2>Built for enterprise teams in Bangladesh.</h2>
        <p>
          Workshops use the team’s actual responsibilities and practical
          examples. We combine useful habits with clear guidance on data,
          verification, and the decisions people remain responsible for.
        </p>
      </section>
      <ServiceScope
        title="What we can build together."
        description={service.line}
        items={[
          {
            title: "Role-based workshops",
            description:
              "Train sales, operations, leadership, and other teams around the tasks they actually perform.",
          },
          {
            title: "Everyday productivity systems",
            description:
              "Practice research, analysis, drafting, and task workflows using approved tools and information.",
          },
          {
            title: "An adoption plan",
            description:
              "Identify useful opportunities, internal champions, team guidelines, and realistic next steps.",
          },
          {
            title: "Implementation support",
            description:
              "Help the team apply learning in the workplace, improve workflows, and review progress.",
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
            question: "Where is this service available?",
            answer:
              "Enterprise AI Training is currently for enterprise teams in Bangladesh. Our product, platform, and automation services work with businesses globally.",
          },
          {
            question: "Does our team need technical experience?",
            answer:
              "No. We adapt the exercises to the roles, tools, and experience of the participants. Technical sessions can be scoped for technical teams.",
          },
          {
            question: "Is this a certification course?",
            answer:
              "This is practical workplace training and implementation support. We do not present the workshop or the example exercise on this page as an external certification.",
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
