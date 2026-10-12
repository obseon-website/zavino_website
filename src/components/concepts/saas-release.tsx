"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  CreditCard,
  CalendarDots,
  ChartBar,
  Stack,
  Users,
  RocketLaunch,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const modules = [
  {
    id: "booking",
    name: "Bookings",
    icon: CalendarDots,
    customer: "Book a session",
    team: "Manage the calendar",
  },
  {
    id: "billing",
    name: "Billing",
    icon: CreditCard,
    customer: "Manage my plan",
    team: "Manage subscriptions",
  },
  {
    id: "reports",
    name: "Reports",
    icon: ChartBar,
    customer: "See my activity",
    team: "Review product activity",
  },
];

export function SaasRelease() {
  const motion = useConceptMotion();
  const [selected, setSelected] = useState(["booking"]);
  const [role, setRole] = useState("Customer");
  const [released, setReleased] = useState(false);
  function toggle(id: string) {
    setSelected(
      selected.includes(id)
        ? selected.filter((value) => value !== id)
        : [...selected, id],
    );
    setReleased(false);
  }
  return (
    <div
      {...motion}
      className="business-concept saas-concept"
      data-role={role}
      data-released={released}
    >
      <div className="concept-scene saas-release-scene" aria-hidden="true">
        <div className="release-backplate">
          <Stack />
          <span>Product foundations</span>
          <strong>Accounts. Access. A place to grow.</strong>
        </div>
        <div className="release-workspace concept-paper">
          <div className="concept-window-bar">
            <span className="release-logo">s.</span> Your first release{" "}
            <span>{role} view</span>
          </div>
          <div className="release-greeting">
            <span className="concept-avatar">{role[0]}</span>
            <div>
              <small>
                {role === "Customer"
                  ? "Welcome to your workspace"
                  : "A clear view of the product"}
              </small>
              <strong className="concept-display">
                {role === "Customer"
                  ? "Made for the work I do."
                  : "Ready to run, every day."}
              </strong>
            </div>
          </div>
          <div className="release-modules">
            <div className="release-module">
              <Users />
              <span>
                {role === "Customer" ? "My account" : "People & permissions"}
              </span>
              <Check />
            </div>
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  className="release-module optional-module"
                  data-enabled={selected.includes(module.id)}
                  key={module.id}
                >
                  <Icon />
                  <span>
                    {role === "Customer" ? module.customer : module.team}
                  </span>
                  {selected.includes(module.id) ? (
                    <Check />
                  ) : (
                    <span className="module-later">Later</span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="release-bottom">
            <span>{selected.length + 1} modules in this release</span>
            <span>{released ? "Preview assembled" : "Scope in progress"}</span>
          </div>
        </div>
        <div className="release-ticket">
          <RocketLaunch />
          <div>
            <small>
              {released ? "Ready for review" : "First useful release"}
            </small>
            <strong>
              {released
                ? "Your scope, made tangible."
                : "Choose what earns its place."}
            </strong>
          </div>
          <CheckCircle />
        </div>
      </div>
      <div className="concept-controls">
        <fieldset className="concept-choice-set">
          <legend>What belongs in your first release?</legend>
          <div className="concept-checks">
            {modules.map((module) => (
              <label key={module.id}>
                <input
                  type="checkbox"
                  checked={selected.includes(module.id)}
                  onChange={() => toggle(module.id)}
                />
                {module.name}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="concept-control-row">
          <fieldset className="concept-choice-set">
            <legend>Preview a perspective</legend>
            <div className="concept-segments">
              {["Customer", "Team"].map((value) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={role === value}
                  onClick={() => setRole(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>
          <button
            type="button"
            className="concept-primary"
            onClick={() => setReleased(!released)}
          >
            {released ? "Revise release" : "Assemble preview"}
            <ArrowRight />
          </button>
        </div>
        <p className="concept-status" role="status">
          {released
            ? "Your example release includes accounts and " +
              (selected.length
                ? modules
                    .filter((module) => selected.includes(module.id))
                    .map((module) => module.name.toLowerCase())
                    .join(", ")
                : "no optional modules yet") +
              ". This preview is not a deployed product."
            : "Accounts are the foundation. Add useful modules, then see what each person gets."}
        </p>
      </div>
      <p className="concept-caption">
        Product Concept{" "}
        <span>A release planner. Your real scope is defined together.</span>
      </p>
    </div>
  );
}
