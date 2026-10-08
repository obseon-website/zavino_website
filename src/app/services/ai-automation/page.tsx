import type { Metadata } from "next";
import { ArrowDown, Check, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { WorkflowDemo } from "@/components/workflow-demo";
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
  title: "AI automation for connected business workflows",
  description:
    "Connect CRM, commerce, support, and operational systems with AI-assisted decisions, human approvals, clear guardrails, and measurable workflows.",
  alternates: { canonical: "/services/ai-automation" },
};
const scenarios = [
  {
    number: "01",
    title: "Customer lifecycle",
    flow: "Customer signal → eligible action → approved offer",
    body: "Bring CRM, commerce, consent, and customer history into one decision. A rules layer checks eligibility before AI helps draft a relevant response.",
  },
  {
    number: "02",
    title: "Service operations",
    flow: "Incoming request → context → resolution or escalation",
    body: "Classify and route requests, retrieve approved knowledge, prepare a response, and escalate the cases your team should review.",
  },
  {
    number: "03",
    title: "Documents & approvals",
    flow: "Document → extracted facts → exception review",
    body: "Reduce repeated data entry across document-heavy work. Check extracted information, flag uncertainty, and pass an approved record to the next system.",
  },
];
export default function AiAutomationPage() {
  return (
    <main id="main" className="sp-page sp-ai-page">
      <ServiceHero
        label="AI automation"
        title={
          <>
            Connect the systems.
            <br />
            <span>Move the work.</span>
          </>
        }
        description="Connect the systems, decisions, and people behind the work. We build AI-assisted workflows for repeatable operations where the handoffs, volume, or consequences deserve a better system."
        focus="ai-automation"
        action="Map an automation project"
        facts={[
          "Cross-system workflows",
          "People in control",
          "Visible decisions & recovery",
        ]}
      />
      <section className="sp-demo-section section-shell" id="approach">
        <ServiceSectionHeading
          title={
            <>
              From a customer signal
              <br />
              to a considered action.
            </>
          }
        >
          Follow the data, check the rules, and see where a person approves the
          next step. This is an illustrative Zavino concept, showing one
          possible workflow.
        </ServiceSectionHeading>
        <WorkflowDemo />
        <div className="sp-demo-footnote">
          <span>
            <ShieldCheck size={17} /> The approval gate is part of the system.
          </span>
          <p>
            An action should wait when the business needs a decision. A failed
            step needs a visible owner and a recovery path.
          </p>
        </div>
      </section>
      <section className="sp-scenarios section-shell">
        <ServiceSectionHeading title="Three ways connected work can change.">
          Example designs to discuss in discovery. The right starting point
          depends on your systems, data, and operating constraints.
        </ServiceSectionHeading>
        <div className="sp-scenario-grid">
          {scenarios.map((item) => (
            <article key={item.number}>
              <span className="sp-number">
                {item.number} / EXAMPLE WORKFLOW
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="sp-scenario-flow">
                <ArrowDown size={17} />
                <span>{item.flow}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-control-band">
        <div className="sp-controls section-shell">
          <div>
            <h2>
              AI where it helps.
              <br />
              <span>Rules where they matter.</span>
            </h2>
            <p>
              Some decisions need interpretation. Others need a reliable
              condition, a permission check, or a clear stop. We define that
              boundary before building the workflow.
            </p>
          </div>
          <ul>
            {[
              [
                "Access & consent",
                "Identify the approved data, permitted users, consent requirements, and systems allowed to receive an action.",
              ],
              [
                "Review & escalation",
                "Agree on confidence thresholds, exceptions, and the decisions a person must approve.",
              ],
              [
                "Logs & recovery",
                "Record what happened, show failed steps, and design retries that avoid duplicate actions.",
              ],
              [
                "Evaluation & cost",
                "Test realistic cases, compare AI output with agreed criteria, and track usage and operating cost.",
              ],
            ].map(([title, body]) => (
              <li key={title}>
                <Check size={18} />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ServiceScope
        title={
          <>
            A working workflow.
            <br />
            And a way to run it.
          </>
        }
        description="We define the exact deliverables during discovery. An engagement can cover one complete workflow first, then extend it across more teams and systems."
        items={[
          {
            title: "Workflow & integration map",
            description:
              "A clear account of triggers, data sources, API boundaries, owners, exceptions, and the business outcome the workflow should support.",
          },
          {
            title: "Built orchestration & AI components",
            description:
              "The integrations, deterministic steps, agents or retrieval tools, review interfaces, and output channels required by the agreed scope.",
          },
          {
            title: "Tested controls & release plan",
            description:
              "Realistic test cases, evaluation criteria, failure handling, permissions, rollout stages, and the conditions for moving into production.",
          },
          {
            title: "Operating documentation & handoff",
            description:
              "Runbooks, monitoring needs, decision ownership, training, and a scoped plan for support and improvement after launch.",
          },
        ]}
      />
      <ServiceProcess
        stages={[
          {
            title: "Map the work",
            description:
              "Talk to the people doing it. Establish the current path, constraints, access, and a baseline for the outcome that matters.",
            artifact: "OUTPUT / WORKFLOW MAP",
          },
          {
            title: "Prove the decision",
            description:
              "Prototype the critical AI and integration steps. Test rules, uncertain inputs, and human review before widening the build.",
            artifact: "OUTPUT / TESTED PROTOTYPE",
          },
          {
            title: "Build the full path",
            description:
              "Connect the approved systems, implement the controls, and test success, failure, and recovery with your team.",
            artifact: "OUTPUT / RELEASE CANDIDATE",
          },
          {
            title: "Launch & observe",
            description:
              "Roll out deliberately. Review completion, turnaround, exceptions, quality, and cost against the agreed criteria.",
            artifact: "OUTPUT / OPERATING PLAN",
          },
        ]}
      />
      <ServiceFaq
        items={[
          {
            question: "Do we need AI for every part of the workflow?",
            answer:
              "No. We use deterministic rules for predictable decisions and AI for tasks such as interpretation, extraction, drafting, or retrieval where testing shows it is useful. Discovery identifies which parts benefit from each.",
          },
          {
            question: "Can this connect to the systems we already use?",
            answer:
              "We assess the available APIs, exports, webhooks, access permissions, and vendor limits first. Existing CRM, commerce, support, and internal systems can often stay in place, with the integration approach and any limitations documented in scope.",
          },
          {
            question: "Who controls data and approves actions?",
            answer:
              "Your team defines the authorized data and decision owners. We design access boundaries, review gates, and escalation around those choices. Hosting, credentials, retention, and system ownership are agreed during scoping.",
          },
          {
            question: "How do we know the automation is working?",
            answer:
              "We agree on a baseline and practical measures such as completion rate, handling time, exception volume, output quality, and operating cost. These are acceptance criteria for your project, not a promised percentage improvement.",
          },
          {
            question: "What happens after the first release?",
            answer:
              "The handoff includes operating documentation and the monitoring and review needs for the system. Maintenance, model changes, new integrations, and ongoing optimization can be covered in an agreed support scope.",
          },
        ]}
      />
      <ServiceRelated
        title="Sometimes the workflow needs a product around it."
        description="When teams need their own shared workspace, customer experience, or admin controls, SaaS development can turn the automation into a usable product."
        href="/services/saas-development"
        label="Explore SaaS development"
      />
      <ServiceBrief
        focus="ai-automation"
        title="Which handoff should work better?"
        description="Tell us which systems should connect, where the work slows down, and which actions need a person’s approval. We can start from there."
        action="Map an automation project"
      />
    </main>
  );
}
