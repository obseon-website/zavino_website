import type { Metadata } from "next";
import { PlatformBooking } from "@/components/concepts/platform-booking";
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
  (item) => item.slug === "web-apps-platforms",
)!;
export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: "/services/web-apps-platforms" },
};
export default function Page() {
  return (
    <main id="main" className="sp-page business-service-page">
      <ServiceHero
        label={service.name}
        title={"Your business. Its own way of working."}
        description={service.description}
        focus={service.slug}
        action="Tell us about your requirement"
        facts={service.items.slice(0, 3)}
      />
      <section className="service-concept-section section-shell">
        <div className="service-concept-intro">
          <h2>One booking. Both sides of the desk.</h2>
          <p>
            A customer chooses a time. Your team sees the commitment behind it.
            Move the reservation and test what happens when a slot is already
            taken.
          </p>
          <p className="concept-invitation">
            Choose a day and time, then switch between customer and team.
          </p>
        </div>
        <PlatformBooking />
      </section>
      <section className="service-principle section-shell">
        <h2>The workflow decides the platform.</h2>
        <p>
          A portal, dashboard, marketplace, or booking tool should fit the real
          work. We model the users, data, permissions, and business rules before
          shaping the interface.
        </p>
      </section>
      <ServiceScope
        title="What we can build together."
        description={service.line}
        items={[
          {
            title: "Portals and internal tools",
            description:
              "Bring customer requests, team actions, documents, and status into a shared working space.",
          },
          {
            title: "Booking and management systems",
            description:
              "Design availability, reservations, approvals, updates, and exception handling around your rules.",
          },
          {
            title: "Marketplaces and dashboards",
            description:
              "Connect multiple roles with useful views of the information and decisions each one owns.",
          },
          {
            title: "AI-powered platforms and websites",
            description:
              "Add search, assistance, extraction, or recommendations where they help people complete a task.",
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
            question: "How is this different from a SaaS product?",
            answer:
              "A custom platform usually serves your specific business workflow. A SaaS product is commonly offered to many customers through an ongoing subscription. Some projects combine both.",
          },
          {
            question: "Can you improve a platform we already have?",
            answer:
              "Yes. We review the current experience and technical foundations, then agree what can stay and what needs to change.",
          },
          {
            question: "Can we begin with one workflow?",
            answer:
              "Yes. A focused first release can solve the most important path while leaving room for more roles, integrations, and features.",
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
