import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { ServicePlayground } from "@/components/service-playground";
import {
  ServiceBrief,
  ServiceFaq,
  ServiceHero,
  ServiceScope,
} from "@/components/service-page";

export const metadata: Metadata = {
  title: "SaaS & Custom Web Apps — from idea to launch",
  description:
    "Build software customers can use and pay for, or a website that connects your business with them. Design, development, and support from Zavino.",
  alternates: { canonical: "/services/saas-development" },
};

export default function SaasDevelopmentPage() {
  return (
    <main id="main" className="sp-page sp-saas-page">
      <ServiceHero
        label="SaaS & Custom Web Apps"
        title={
          <>
            Your idea.
            <br />
            <span>A working product.</span>
          </>
        }
        description="We design and build SaaS products, websites, and web apps. Start with a useful first version for your customers and team, then grow from real feedback."
        facts={["Product design", "Build & launch", "Support after launch"]}
      />
      <section className="sp-product-showcase section-shell" id="approach">
        <div className="sp-product-intro">
          <h2>
            One product.
            <br />
            <span>Every perspective.</span>
          </h2>
          <p>
            A clear experience for your customers, team, and business. Switch
            views to explore this example.
          </p>
        </div>
        <ServicePlayground kind="saas" />
      </section>
      <section className="sp-web-showcase section-shell" id="web-experience">
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
      <section className="sp-release section-shell">
        <div className="sp-release-grid">
          <article className="sp-release-now">
            <h3>
              Start with
              <br />
              the essentials.
            </h3>
            <ul>
              {[
                "The main task your users need to complete",
                "Accounts, access, and payments",
                "Testing and a launch plan",
              ].map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p>A first version people can use.</p>
          </article>
          <article className="sp-release-later">
            <h3>
              Improve from
              <br />
              real feedback.
            </h3>
            <ul>
              {[
                "Features your customers ask for",
                "Better connections and automation",
                "Performance as your product grows",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>A clear plan for what comes next.</p>
          </article>
        </div>
      </section>
      <ServiceScope
        title={
          <>
            From first sketch
            <br />
            to launch.
          </>
        }
        description="One team for design, development, and the work after release."
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
            title: "Product plan & design",
            description:
              "Define who it’s for, what it does, and how people will use it.",
          },
          {
            title: "Accounts, billing & connections",
            description:
              "Build the features your business model needs, including payments and links to other tools.",
          },
          {
            title: "Development & testing",
            description:
              "Build the software, review progress with you, and test the main user journeys.",
          },
          {
            title: "Launch & support",
            description:
              "Release the product and agree on maintenance and future improvements.",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Can we start small?",
            answer:
              "Yes. We agree on the most useful first version so you can launch, learn, and decide what to build next.",
          },
          {
            question: "Can you improve an existing product or website?",
            answer:
              "Yes. We review the current code, user needs, and what gets in the way before agreeing on improvements.",
          },
          {
            question: "Can it include AI?",
            answer:
              "Yes, when AI helps your users complete a task. We test the feature and agree on how people review its results.",
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
          {
            question: "What about ongoing support?",
            answer:
              "We can maintain the product and develop new features through an agreed support plan.",
          },
        ]}
      />
      <ServiceBrief
        title="What do you want to build?"
        description="Tell us who it’s for and what it should help them do."
      />
    </main>
  );
}
