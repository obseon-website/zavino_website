import type { Metadata } from "next";
import { ServicePlayground } from "@/components/service-playground";
import {
  ServiceBrief,
  ServiceFaq,
  ServiceHero,
  ServiceScope,
} from "@/components/service-page";

export const metadata: Metadata = {
  title: "Websites & web apps for your business",
  description:
    "Build a clear website, customer portal, or custom web tool. Design, development, testing, and support from the Zavino team.",
  alternates: { canonical: "/services/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <main id="main" className="sp-page sp-web-page">
      <ServiceHero
        label="Websites & Web Apps"
        title={
          <>
            A better place
            <br />
            <span>to meet your customers.</span>
          </>
        }
        description="Websites and web apps that make your business easy to understand and your services easy to use."
        focus="web-development"
        action="Discuss your website"
        facts={[
          "Clear design",
          "Works on every screen",
          "Built around your business",
        ]}
      />
      <section className="sp-web-showcase section-shell" id="approach">
        <div className="sp-web-showcase-heading">
          <h2>
            Thoughtful at
            <br />
            <span>every size.</span>
          </h2>
          <p>
            A clear experience on desktop and mobile. Switch between screens to
            explore this example.
          </p>
        </div>
        <ServicePlayground kind="web" />
      </section>
      <ServiceScope
        title={
          <>
            The website
            <br />
            your business needs.
          </>
        }
        description="We choose the right scope together, then design, build, and test it."
        items={[
          {
            title: "Business websites",
            description:
              "Explain what you do and give visitors a clear way to contact you.",
          },
          {
            title: "Stores & booking tools",
            description:
              "Help customers find what they need and complete a purchase or booking.",
          },
          {
            title: "Portals & dashboards",
            description:
              "Give customers and staff a place to manage information and tasks.",
          },
          {
            title: "Support after launch",
            description:
              "Keep the site running and improve it as your business changes.",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Can you improve our current website?",
            answer:
              "Yes. We review what works and what gets in the way, then agree on the changes.",
          },
          {
            question: "Will it work on mobile?",
            answer:
              "We design and test the main pages and actions for both mobile and desktop.",
          },
          {
            question: "Can it connect to our other tools?",
            answer:
              "We check your tools and available connections during planning, then explain what’s possible.",
          },
        ]}
      />
      <ServiceBrief
        focus="web-development"
        title="What should your website help people do?"
        description="Tell us about your business and the experience you want to create."
        action="Discuss your website"
      />
    </main>
  );
}
