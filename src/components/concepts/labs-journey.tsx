"use client";
import { useState } from "react";
import {
  Storefront,
  CreditCard,
  DownloadSimple,
  ArrowCounterClockwise,
  Check,
  Clock,
  ArrowRight,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";
const stages = [
  {
    name: "Storefront",
    icon: Storefront,
    title: "Make the offer clear.",
    text: "A customer understands the bundle, the format, and what happens after purchase.",
    detail: "Product detail → a considered choice",
  },
  {
    name: "Payment",
    icon: CreditCard,
    title: "Confirm before fulfilling.",
    text: "The order waits for a verified payment result. A pending payment stays pending.",
    detail: "Payment confirmed → order accepted",
  },
  {
    name: "Delivery",
    icon: DownloadSimple,
    title: "Get it to the customer.",
    text: "A confirmed order unlocks the download and provides a clear route for help.",
    detail: "Confirmed order → download access",
  },
  {
    name: "Improve",
    icon: ArrowCounterClockwise,
    title: "Learn from the next question.",
    text: "Support questions reveal unclear instructions and useful improvements to make next.",
    detail: "Customer feedback → a better experience",
  },
];
export function LabsJourney() {
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);
  const motion = useConceptMotion();
  const stage = stages[step];
  const Icon = stage.icon;
  return (
    <div className="business-concept labs-journey accent-clay" {...motion}>
      <div className="labs-conveyor" aria-hidden="true">
        <div className="labs-track" />
        <div
          className="labs-parcel"
          style={{
            transform: `translateX(${(step - 1.5) * 16}%) rotate(${(step - 1.5) * -3}deg)`,
          }}
        >
          <span className="eyebrow">One useful product</span>
          <Icon size={62} weight="light" />
          <strong>
            {pending && step === 1 ? "Payment pending" : stage.name}
          </strong>
          <span>
            {pending && step === 1 ? "Keep the download locked" : stage.detail}
          </span>
          <i data-pending={pending && step === 1}>
            {pending && step === 1 ? <Clock size={20} /> : <Check size={20} />}
          </i>
        </div>
      </div>
      <div className="labs-controls">
        <div
          className="concept-segments"
          role="group"
          aria-label="Explore the product journey"
        >
          {stages.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-pressed={i === step}
              onClick={() => {
                setStep(i);
                setPending(false);
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className="labs-step-copy" aria-live="polite">
          <h3>
            {pending && step === 1 ? "Wait for confirmation." : stage.title}
          </h3>
          <p>
            {pending && step === 1
              ? "An unconfirmed payment does not release the product. The customer can check the payment or ask for help."
              : stage.text}
          </p>
        </div>
        {step === 1 ? (
          <button
            type="button"
            className="concept-action"
            onClick={() => setPending(!pending)}
          >
            {pending ? "Confirm example payment" : "Try a pending payment"}
            <ArrowRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            className="concept-action"
            onClick={() => setStep((step + 1) % 4)}
          >
            {step === 3 ? "Start the journey again" : "Follow the next step"}
            <ArrowRight size={18} />
          </button>
        )}
        <p className="concept-caption">
          Zavino Labs Experiment · An illustrative operating journey. No order
          or payment is created.
        </p>
      </div>
    </div>
  );
}
