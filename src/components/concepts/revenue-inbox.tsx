"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChatCircle,
  EnvelopeSimple,
  Funnel,
  UserCircle,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const inquiries = [
  {
    label: "Website inquiry",
    person: "Amina",
    message: "We need a client portal. Can we talk this week?",
    intent: "Clear need · Ready to talk",
    detail: "Client portal · This week",
    ready: true,
  },
  {
    label: "WhatsApp message",
    person: "Rafi",
    message: "Could you help connect our shop to our CRM?",
    intent: "Clear need · Confirm timing",
    detail: "Shop + CRM · Timing to confirm",
    ready: true,
  },
  {
    label: "Missing details",
    person: "Sam",
    message: "Hi. Could you send some information?",
    intent: "More context needed",
    detail: "Ask about the business and its goal",
    ready: false,
  },
];

export function RevenueInbox() {
  const [inquiry, setInquiry] = useState(0);
  const [step, setStep] = useState(0);
  const [channel, setChannel] = useState("Email");
  const motion = useConceptMotion();
  const item = inquiries[inquiry];
  const status =
    step === 0
      ? "Choose an inquiry, then see what the system can qualify."
      : step === 1
        ? item.ready
          ? "A useful sales brief is ready. Choose a follow-up channel and approve the handoff."
          : "There is not enough context to qualify this inquiry. A clarification stays with a person for review."
        : item.ready
          ? "Example handed to sales with its context and follow-up. No message was sent."
          : "A request for more detail is prepared. No message was sent.";
  return (
    <div
      {...motion}
      className="business-concept revenue-concept"
      data-step={step}
      data-ready={item.ready}
    >
      <div className="concept-scene revenue-scene" aria-hidden="true">
        <span className="concept-keycap revenue-key">
          <Funnel />
        </span>
        <div className="revenue-incoming concept-paper">
          <div className="concept-window-bar">
            <EnvelopeSimple /> Incoming inquiry <span>Example</span>
          </div>
          <div className="revenue-person">
            <span className="concept-avatar">{item.person[0]}</span>
            <div>
              <strong>{item.person}</strong>
              <small>{item.label}</small>
            </div>
            <ArrowUpRight />
          </div>
          <p>{item.message}</p>
        </div>
        <div className="revenue-route">
          <i />
          <span>
            <ArrowRight />
          </span>
          <i />
        </div>
        <div className="revenue-record concept-paper">
          <div className="concept-window-bar">
            <UserCircle /> Sales workspace{" "}
            <span
              className={
                step === 0
                  ? "state-neutral"
                  : item.ready
                    ? "state-green"
                    : "state-amber"
              }
            >
              {step === 0
                ? "Unreviewed"
                : item.ready
                  ? "Qualified"
                  : "Needs context"}
            </span>
          </div>
          <strong className="concept-display">
            {step === 0
              ? "Every inquiry. A next step."
              : item.ready
                ? "A conversation worth having."
                : "A little more context first."}
          </strong>
          <div className="revenue-details">
            <p>
              <span>Intent</span>
              <strong>
                {step ? item.intent : "Waiting for qualification"}
              </strong>
            </p>
            <p>
              <span>Next step</span>
              <strong>{step ? item.detail : "Understand the request"}</strong>
            </p>
          </div>
          <div className="revenue-receipt">
            <Check />{" "}
            {step === 2
              ? item.ready
                ? "Sales has the context."
                : "Clarification prepared."
              : "A person approves the follow-up."}
          </div>
        </div>
        <span className="revenue-channel">
          <ChatCircle /> {channel} follow-up
        </span>
      </div>
      <div className="concept-controls">
        <fieldset className="concept-choice-set">
          <legend>Try an inquiry</legend>
          <div className="concept-segments">
            {inquiries.map((entry, i) => (
              <button
                type="button"
                key={entry.label}
                aria-pressed={inquiry === i}
                onClick={() => {
                  setInquiry(i);
                  setStep(0);
                }}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="concept-control-row">
          <label className="concept-select">
            Follow-up channel
            <select
              value={channel}
              onChange={(event) => {
                setChannel(event.target.value);
                if (step === 2) setStep(1);
              }}
            >
              <option>Email</option>
              <option>WhatsApp</option>
            </select>
          </label>
          <button
            type="button"
            className="concept-primary"
            onClick={() => setStep((step + 1) % 3)}
          >
            {step === 0
              ? "Qualify inquiry"
              : step === 1
                ? item.ready
                  ? "Approve handoff"
                  : "Prepare clarification"
                : "Reset example"}
            {step === 2 ? <ArrowCounterClockwise /> : <ArrowRight />}
          </button>
        </div>
        <p className="concept-status" role="status">
          {status}
        </p>
      </div>
      <p className="concept-caption">
        Product Concept <span>Sample inquiries. Local interaction.</span>
      </p>
    </div>
  );
}
