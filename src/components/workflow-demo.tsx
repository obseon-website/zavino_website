"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowClockwise, ArrowRight, Brain, Check, Database, GitBranch, HandPalm, Lightning, PaperPlaneTilt, Pulse, ShieldCheck, UserCheck } from "@phosphor-icons/react";

const scenarios = [
  {
    label: "Customer lifecycle", source: "CRM + commerce", signal: "A customer goes quiet", context: "Consent + order history", decision: "Draft a relevant offer", action: "Queue an approved email",
    details: [
      "A lifecycle event enters from the CRM. Use an event reference, without copying an entire customer record.",
      "Join consent, order history, support context and eligibility. Only approved fields cross the integration boundary.",
      "AI drafts a relevant offer. Rules enforce eligibility, contact preferences and timing before anyone reviews it.",
      "A campaign owner checks the offer. Nothing is dispatched until a person approves it. Hold routes it back for review.",
      "An approved message would enter the email queue. Delivery failures stay visible and retry safely.",
      "Record the decision, delivery status and response. Evaluate usefulness and errors against an agreed baseline.",
    ],
  },
  {
    label: "Cart recovery", source: "Store + CRM", signal: "A checkout is left open", context: "Stock + contact consent", decision: "Prepare a useful reminder", action: "Queue a recovery message",
    details: [
      "A store emits an abandoned-checkout event. A delay avoids interrupting a customer who is still shopping.",
      "Check inventory, checkout status, consent and contact frequency. A completed purchase cancels the workflow.",
      "AI helps write a reminder using approved product details. Rules control incentives and suppress ineligible contacts.",
      "A commerce owner reviews the message and offer. Hold stops the example; approval releases the next step.",
      "An approved reminder would enter the configured channel. A unique event key prevents duplicate messages.",
      "Track delivery, suppression reasons and checkouts. Review real outcomes without claiming every sale as an automation result.",
    ],
  },
  {
    label: "Support escalation", source: "Help desk + product", signal: "An issue needs attention", context: "Case history + permissions", decision: "Draft a response + route", action: "Create an assigned task",
    details: [
      "An unresolved case enters with its priority and permitted context. Sensitive fields stay in their source system.",
      "Join relevant case history and product events with access rules. Missing context triggers a request for review.",
      "AI summarizes the issue using approved knowledge. Uncertain answers are escalated rather than sent.",
      "A support lead checks the suggested response and routing. A held case remains owned by a person.",
      "After approval, an assigned help-desk task would be created. Failed delivery is logged for recovery.",
      "Review resolution quality, escalation reasons and response time. Feed recurring issues back into the process.",
    ],
  },
];
const labels = ["Customer signal", "Connected data", "AI + rules", "Human approval", "Approved action", "Measured feedback"];
const icons = [Lightning, Database, Brain, UserCheck, PaperPlaneTilt, Pulse];

export function WorkflowDemo({ compact = false }: { compact?: boolean }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selected, setSelected] = useState(3);
  const [gate, setGate] = useState<"waiting" | "approved" | "held">("waiting");
  const root = useRef<HTMLDivElement>(null);
  const gateButton = useRef<HTMLButtonElement>(null);
  const id = useId();
  const scenario = scenarios[scenarioIndex];
  const summaries = [scenario.signal, scenario.context, scenario.decision, gate === "approved" ? "Approved in this example" : gate === "held" ? "Held for review" : "Waiting for your decision", gate === "approved" ? scenario.action : "Paused at approval", "Log outcomes + failures"];

  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add("workflow-entered"); observer.disconnect(); }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const changeScenario = (index: number) => { setScenarioIndex(index); setGate("waiting"); setSelected(3); };

  return (
    <div className={`workflow${compact ? " workflow--compact" : ""}`} ref={root} data-gate={gate}>
      <div className="workflow-topline"><span>Illustrative workflow <span aria-hidden="true">·</span> Zavino concept</span><GitBranch size={17} aria-hidden="true" /></div>
      <div className="workflow-scenarios" role="group" aria-label="Workflow scenario">
        {scenarios.map((item, index) => <button type="button" key={item.label} aria-pressed={index === scenarioIndex} onClick={() => changeScenario(index)}>{item.label}</button>)}
      </div>
      <div className="flow-canvas">
        <div className="flow-source-label"><span>{scenario.source}</span><span>PERMISSIONED INPUT</span></div>
        <ol className="flow-nodes" aria-label="Workflow stages">
          {labels.map((label, index) => {
            const Icon = icons[index];
            return <li key={label} className={`flow-stage flow-stage-${index}${index === selected ? " is-selected" : ""}${index < 3 || gate === "approved" ? " is-ready" : ""}`}>
              <button type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} aria-controls={`${id}-detail`}>
                <span className="flow-node-top"><Icon size={19} weight="regular" aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></span>
                <strong>{label}</strong><span className="flow-node-description">{summaries[index]}</span>
                {index === 3 && <span className="approval-bracket" aria-hidden="true" />}
              </button>
              {index < 5 && <span className={`flow-wire flow-wire-${index}`} aria-hidden="true"><span /></span>}
            </li>;
          })}
        </ol>
      </div>
      <div className="workflow-detail" id={`${id}-detail`}>
        <div className="workflow-detail-copy" aria-live="polite" aria-atomic="true">
          <span className="workflow-detail-label"><ShieldCheck size={16} />{labels[selected]}</span>
          <p>{scenario.details[selected]}</p>
        </div>
        <div className="workflow-gate">
          <div className="gate-message" role="status">{gate === "approved" ? <><Check size={15} /> Example approved. No message sent.</> : gate === "held" ? <><HandPalm size={15} /> On hold. The action stays paused.</> : <><UserCheck size={15} /> Your decision controls the next step.</>}</div>
          <div className="gate-actions">
            <button ref={gateButton} className={gate === "waiting" ? "gate-approve" : "gate-reset"} type="button" onClick={() => { if(gate === "waiting") {setGate("approved"); setSelected(4);} else {setGate("waiting"); setSelected(3);} }}>{gate === "waiting" ? <>Approve example <ArrowRight size={15}/></> : <><ArrowClockwise size={15}/> Reset example</>}</button>
            {gate === "waiting" && <button className="gate-hold" type="button" onClick={() => {setGate("held"); setSelected(3); gateButton.current?.focus();}}>Hold</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
