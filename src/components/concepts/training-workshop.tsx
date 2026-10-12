"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const lessons = [
  {
    role: "Sales",
    question:
      "You want AI to help prepare a prospect follow-up. Where do you start?",
    options: [
      "Paste the whole customer database",
      "Use an approved brief with only the context needed",
      "Send the AI draft without reading it",
    ],
    correct: 1,
    explanation:
      "Use an approved tool, share only the context the task needs, and review the message before sending it.",
    takeaway: "Less data. Better context. Human review.",
  },
  {
    role: "Operations",
    question:
      "An AI report includes a number you cannot trace. What happens next?",
    options: [
      "Check the source before using it",
      "Accept it because it looks precise",
      "Use it if the rest sounds right",
    ],
    correct: 0,
    explanation:
      "Trace the number to the source. If you cannot verify it, leave it out or flag the gap for a person to resolve.",
    takeaway: "A confident answer still needs evidence.",
  },
  {
    role: "Leadership",
    question:
      "Your team wants to automate a new workflow. What is a useful first move?",
    options: [
      "Replace every step at once",
      "Choose a tool before defining the task",
      "Pilot one bounded task with a clear owner",
    ],
    correct: 2,
    explanation:
      "Start with a small, measurable task. Set an owner, review the results, and decide where human approval belongs before expanding.",
    takeaway: "A small pilot makes learning useful.",
  },
];

export function TrainingWorkshop() {
  const motion = useConceptMotion();
  const [role, setRole] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);
  const lesson = lessons[role];
  const correct = choice === lesson.correct;
  function check() {
    setChecked(true);
    if (correct && !completed.includes(role))
      setCompleted([...completed, role]);
  }
  return (
    <div
      {...motion}
      className="business-concept training-concept"
      data-checked={checked}
      data-correct={correct}
    >
      <div className="concept-scene training-scene" aria-hidden="true">
        <span className="concept-keycap training-key">
          <GraduationCap />
        </span>
        <div className="training-notebook concept-paper">
          <div className="notebook-binding">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="training-page">
            <div className="concept-window-bar">
              <BookOpen /> A practical AI workshop <span>{lesson.role}</span>
            </div>
            <span className="lesson-symbol">
              {checked ? (
                correct ? (
                  <ShieldCheck />
                ) : (
                  <Lightbulb />
                )
              ) : (
                <GraduationCap />
              )}
            </span>
            <strong className="concept-display">
              {checked
                ? correct
                  ? "Good judgment is a skill."
                  : "A useful moment to pause."
                : "Make the call. Then explore the why."}
            </strong>
            <p>
              {checked
                ? lesson.takeaway
                : "Every role has different decisions. Practice on the work your team actually does."}
            </p>
            <div className="learning-progress">
              {lessons.map((item, i) => (
                <span
                  className={completed.includes(i) ? "lesson-complete" : ""}
                  key={item.role}
                >
                  {completed.includes(i) ? <Check /> : <i />}
                  {item.role}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="training-note">
          <Lightbulb />
          <span>
            {checked && correct
              ? "Take the principle back to your work."
              : "Try a decision. See what it teaches."}
          </span>
        </div>
      </div>
      <div className="concept-controls">
        <fieldset className="concept-choice-set">
          <legend>Choose your team</legend>
          <div className="concept-segments">
            {lessons.map((item, i) => (
              <button
                type="button"
                key={item.role}
                aria-pressed={role === i}
                onClick={() => {
                  setRole(i);
                  setChoice(null);
                  setChecked(false);
                }}
              >
                {item.role}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="training-question">
          <legend>{lesson.question}</legend>
          {lesson.options.map((option, i) => (
            <label key={option} data-picked={choice === i}>
              <input
                type="radio"
                name="workshop-answer"
                checked={choice === i}
                onChange={() => {
                  setChoice(i);
                  setChecked(false);
                }}
              />
              {option}
            </label>
          ))}
        </fieldset>
        <div className="concept-control-row">
          <button
            type="button"
            className="concept-primary"
            disabled={choice === null}
            onClick={() =>
              checked ? (setChoice(null), setChecked(false)) : check()
            }
          >
            {checked ? "Try another answer" : "Check my approach"}
            {checked ? <ArrowCounterClockwise /> : <ArrowRight />}
          </button>
          <span className="workshop-completion">
            {completed.length} of 3 principles explored
          </span>
        </div>
        <p className="concept-status" role="status">
          {checked
            ? (correct
                ? "That is a useful approach. "
                : "Consider another approach. ") + lesson.explanation
            : "Choose an answer to get practical feedback. This exercise is not a certification."}
        </p>
      </div>
      <p className="concept-caption">
        Sample workshop exercise{" "}
        <span>Enterprise training is available in Bangladesh.</span>
      </p>
    </div>
  );
}
