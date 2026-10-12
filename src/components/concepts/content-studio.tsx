"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  EnvelopeSimple,
  LinkedinLogo,
  PencilLine,
  Stamp,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const channels = [
  {
    name: "LinkedIn",
    icon: LinkedinLogo,
    title: "One useful idea. A conversation.",
    body: "What if your next product release started with the task your customers repeat every day?",
    revision:
      "Start with one customer task. Build the smallest release that makes it easier.",
  },
  {
    name: "Email",
    icon: EnvelopeSimple,
    title: "A clear note, in the right inbox.",
    body: "A useful first release begins with the people using it. Here is how we decide what belongs.",
    revision:
      "Choose one workflow. Agree on what success looks like. Build from there.",
  },
  {
    name: "Article",
    icon: FileText,
    title: "Room to explain the thinking.",
    body: "From an initial idea to a useful release: define the user, the workflow, and the decisions that matter.",
    revision:
      "A practical release plan covers the user’s task, necessary features, and support after launch.",
  },
];

export function ContentStudio() {
  const motion = useConceptMotion();
  const [selected, setSelected] = useState(["LinkedIn", "Email"]);
  const [active, setActive] = useState(0);
  const [state, setState] = useState<
    "brief" | "review" | "revision" | "approved"
  >("brief");
  const [revised, setRevised] = useState(false);
  function toggle(name: string) {
    setSelected(
      selected.includes(name)
        ? selected.filter((item) => item !== name)
        : [...selected, name],
    );
    setState("brief");
    setRevised(false);
  }
  return (
    <div
      {...motion}
      className="business-concept content-concept"
      data-state={state}
    >
      <div className="concept-scene content-scene" aria-hidden="true">
        <div className="content-source">
          <PencilLine />
          <span>One source brief</span>
          <strong>A useful first release.</strong>
          <p>
            Audience: business owners
            <br />
            Point of view: start with real work
          </p>
        </div>
        <div className="content-sheets">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.name}
                className="content-sheet concept-paper"
                data-front={active === i}
                data-selected={selected.includes(channel.name)}
                style={{ "--sheet-position": i } as React.CSSProperties}
              >
                <div className="concept-window-bar">
                  <Icon />
                  {channel.name}
                  <span>
                    {!selected.includes(channel.name)
                      ? "Not included"
                      : state === "brief"
                        ? "Not drafted"
                        : state === "approved"
                          ? "Approved"
                          : state === "revision"
                            ? "Changes requested"
                            : "In review"}
                  </span>
                </div>
                <strong className="concept-display">
                  {state === "brief"
                    ? "A story for each channel."
                    : channel.title}
                </strong>
                <p>
                  {state === "brief"
                    ? "Choose the channels you need, then prepare an example pack."
                    : revised
                      ? channel.revision
                      : channel.body}
                </p>
                <div className="content-sheet-lines">
                  <i />
                  <i />
                </div>
                <span className="content-sheet-footer">
                  {selected.includes(channel.name)
                    ? "Included in your pack"
                    : "Not included in your pack"}
                </span>
              </div>
            );
          })}
        </div>
        <div className="content-approval">
          <Stamp />
          <strong>
            {state === "approved"
              ? "Approved by a person."
              : state === "revision"
                ? "Make it more direct."
                : "Your team has the final word."}
          </strong>
          <Check />
        </div>
      </div>
      <div className="concept-controls">
        <p className="sr-only" aria-live="polite">
          {channels[active].name}:{" "}
          {!selected.includes(channels[active].name)
            ? "Not included in this pack."
            : state === "brief"
              ? "Not drafted yet."
              : `${channels[active].title} ${revised ? channels[active].revision : channels[active].body}`}
        </p>
        <fieldset className="concept-choice-set">
          <legend>Channels in this pack</legend>
          <div className="concept-checks">
            {channels.map((channel) => (
              <label key={channel.name}>
                <input
                  type="checkbox"
                  checked={selected.includes(channel.name)}
                  onChange={() => toggle(channel.name)}
                />
                {channel.name}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="concept-choice-set">
          <legend>Inspect a format</legend>
          <div className="concept-segments">
            {channels.map((channel, i) => (
              <button
                type="button"
                key={channel.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {channel.name}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="concept-control-row">
          <button
            type="button"
            className="concept-primary"
            disabled={selected.length === 0}
            onClick={() => {
              if (state === "brief") setState("review");
              else if (state === "revision") {
                setRevised(true);
                setState("review");
              } else if (state === "review") setState("approved");
              else {
                setState("brief");
                setRevised(false);
              }
            }}
          >
            {state === "brief"
              ? "Prepare " +
                selected.length +
                (selected.length === 1 ? " draft" : " drafts")
              : state === "revision"
                ? "Revise the pack"
                : state === "review"
                  ? "Approve pack"
                  : "Start again"}
            {state === "approved" ? <ArrowCounterClockwise /> : <ArrowRight />}
          </button>
          {state === "review" && (
            <button
              type="button"
              className="concept-reset"
              onClick={() => setState("revision")}
            >
              <PencilLine /> Request changes
            </button>
          )}
        </div>
        <p className="concept-status" role="status">
          {selected.length === 0
            ? "Select at least one channel to prepare a pack."
            : state === "approved"
              ? selected.length +
                " example drafts approved. Nothing has been published."
              : state === "revision"
                ? "Feedback: make the writing more direct. Revise the pack to see the change."
                : state === "review"
                  ? "Example drafts are ready. Inspect each format, request changes, or approve the pack."
                  : "A shared brief keeps the channels connected. Your team reviews every output."}
        </p>
      </div>
      <p className="concept-caption">
        Product Concept{" "}
        <span>Authored sample copy. No publishing connection.</span>
      </p>
    </div>
  );
}
