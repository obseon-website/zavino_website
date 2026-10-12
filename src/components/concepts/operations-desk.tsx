"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Headset,
  ShieldCheck,
  WarningCircle,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const questions = [
  {
    label: "Delivery question",
    text: "How do I get my download?",
    source: "Delivery guide",
    answer:
      "After payment is confirmed, the customer receives a download link. Ask the support team if the link is missing.",
    needs: "guide",
  },
  {
    label: "Account question",
    text: "Can another teammate access my workspace?",
    source: "Account handbook",
    answer:
      "An owner can invite a teammate and assign a role. Access follows the permissions in the workspace.",
    needs: "handbook",
  },
  {
    label: "An exception",
    text: "Can you approve an exception for my account?",
    source: "Human decision",
    answer:
      "This request needs a person with the authority to decide. The agent can collect the context and hand it over.",
    needs: "human",
  },
];

export function OperationsDesk() {
  const motion = useConceptMotion();
  const [question, setQuestion] = useState(0);
  const [sources, setSources] = useState(["guide", "handbook"]);
  const [run, setRun] = useState(false);
  const [handedOff, setHandedOff] = useState(false);
  const item = questions[question];
  const supported = sources.includes(item.needs);
  const state = !run
    ? "waiting"
    : handedOff
      ? "handoff"
      : supported
        ? "answer"
        : "held";
  function toggleSource(source: string) {
    setSources(
      sources.includes(source)
        ? sources.filter((value) => value !== source)
        : [...sources, source],
    );
    setRun(false);
    setHandedOff(false);
  }
  return (
    <div
      {...motion}
      className="business-concept operations-concept"
      data-state={state}
    >
      <div className="concept-scene operations-scene" aria-hidden="true">
        <div className="knowledge-sheets">
          <div
            className={
              "knowledge-sheet source-guide " +
              (sources.includes("guide") ? "source-enabled" : "")
            }
          >
            <FileText />
            <strong>Delivery guide</strong>
            <span>Approved knowledge</span>
            <i />
            <i />
            <i />
          </div>
          <div
            className={
              "knowledge-sheet source-handbook " +
              (sources.includes("handbook") ? "source-enabled" : "")
            }
          >
            <BookOpen />
            <strong>Account handbook</strong>
            <span>Workspace permissions</span>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="agent-answer concept-paper">
          <div className="concept-window-bar">
            <Headset /> Team knowledge agent <ShieldCheck />
          </div>
          <p className="agent-question">{item.text}</p>
          <div className="agent-response">
            <span
              className={
                "agent-answer-symbol " +
                (state === "held" ? "state-amber" : "state-blue")
              }
            >
              {state === "held" ? (
                <WarningCircle />
              ) : state === "handoff" ? (
                <Check />
              ) : (
                <BookOpen />
              )}
            </span>
            <strong className="concept-display">
              {state === "waiting"
                ? "Useful answers need a source."
                : state === "handoff"
                  ? "A teammate can take it from here."
                  : supported
                    ? "Grounded in your knowledge."
                    : "Pause. Bring a person in."}
            </strong>
            <p>
              {!run
                ? "Choose the knowledge the agent is allowed to use."
                : handedOff
                  ? "The question and available context travel together."
                  : supported
                    ? item.answer
                    : item.needs === "human"
                      ? item.answer
                      : "The relevant source is not enabled. Reconnect it or send this question to a teammate."}
            </p>
          </div>
          <div className="agent-citation">
            <FileText />
            {run && supported
              ? item.source + " · Source attached"
              : run
                ? "No unsupported answer issued"
                : sources.length + " approved sources connected"}
          </div>
        </div>
        <span className="concept-keycap operations-key">
          <ShieldCheck />
        </span>
      </div>
      <div className="concept-controls">
        <fieldset className="concept-choice-set">
          <legend>Give the agent a question</legend>
          <div className="concept-segments">
            {questions.map((entry, i) => (
              <button
                type="button"
                key={entry.label}
                aria-pressed={question === i}
                onClick={() => {
                  setQuestion(i);
                  setRun(false);
                  setHandedOff(false);
                }}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="concept-choice-set">
          <legend>Allowed knowledge</legend>
          <div className="concept-checks">
            {[
              ["guide", "Delivery guide"],
              ["handbook", "Account handbook"],
            ].map(([value, label]) => (
              <label key={value}>
                <input
                  type="checkbox"
                  checked={sources.includes(value)}
                  onChange={() => toggleSource(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="concept-control-row">
          <p className="concept-status" role="status">
            {!run
              ? "The agent can only use the sources you connect."
              : handedOff
                ? "Example escalated with context. Nothing was sent."
                : supported
                  ? "A source-backed answer is ready for review. This is a local example."
                  : "The agent has held the answer. Restore its source or ask a teammate."}
          </p>
          <button
            type="button"
            className="concept-primary"
            onClick={() => {
              if (!run) setRun(true);
              else if (!handedOff && !supported) setHandedOff(true);
              else {
                setRun(false);
                setHandedOff(false);
              }
            }}
          >
            {!run
              ? "Run the example"
              : !handedOff && !supported
                ? "Ask a teammate"
                : "Try again"}
            {run && (supported || handedOff) ? (
              <ArrowCounterClockwise />
            ) : (
              <ArrowRight />
            )}
          </button>
        </div>
      </div>
      <p className="concept-caption">
        Product Concept{" "}
        <span>Sample knowledge. Human judgment stays in control.</span>
      </p>
    </div>
  );
}
