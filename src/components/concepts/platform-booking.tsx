"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDots,
  Check,
  Clock,
  LockKey,
  UserCircle,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useConceptMotion } from "./use-concept-motion";

const days = ["Monday", "Tuesday", "Wednesday"];
const times = ["10:00", "12:30", "15:00"];

export function PlatformBooking() {
  const motion = useConceptMotion();
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
  const [view, setView] = useState("Customer");
  const [reservation, setReservation] = useState<{
    day: number;
    time: number;
  } | null>(null);
  const [conflict, setConflict] = useState(false);
  const reserved = reservation?.day === day && reservation?.time === time;
  function book() {
    if (reservation && reserved) setConflict(true);
    else {
      setReservation({ day, time });
      setConflict(false);
    }
  }
  return (
    <div
      {...motion}
      className="business-concept platform-concept"
      data-booked={Boolean(reservation)}
      data-conflict={conflict}
      data-view={view}
    >
      <div className="concept-scene platform-scene" aria-hidden="true">
        <span className="concept-keycap platform-key">
          <CalendarDots />
        </span>
        <div className="booking-calendar concept-paper">
          <div className="concept-window-bar">
            <CalendarDots /> A booking that holds together{" "}
            <span>{view} portal</span>
          </div>
          <div className="calendar-heading">
            <small>Illustrative week</small>
            <strong className="concept-display">
              Make room for what matters.
            </strong>
          </div>
          <div className="calendar-columns">
            {days.map((label, d) => (
              <div
                key={label}
                className={day === d ? "calendar-day-selected" : ""}
              >
                <span>{label.slice(0, 3)}</span>
                {times.map((hour, t) => (
                  <span
                    key={hour}
                    className={
                      "calendar-slot " +
                      (reservation?.day === d && reservation?.time === t
                        ? "slot-booked"
                        : day === d && time === t
                          ? "slot-selected"
                          : "")
                    }
                  >
                    {reservation?.day === d && reservation?.time === t ? (
                      <Check />
                    ) : (
                      hour
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="booking-confirmation">
          <span className="booking-confirmation-icon">
            {conflict ? <LockKey /> : reservation ? <Check /> : <Clock />}
          </span>
          <div>
            <small>
              {conflict
                ? "Double booking prevented"
                : reservation
                  ? "Reserved in this example"
                  : "Your selected appointment"}
            </small>
            <strong>
              {days[reservation?.day ?? day]} ·{" "}
              {times[reservation?.time ?? time]}
            </strong>
            <span>
              {view === "Customer"
                ? "One clear confirmation."
                : "Visible in the team’s work queue."}
            </span>
          </div>
        </div>
        <div className="booking-permission">
          <UserCircle />
          {view === "Customer"
            ? "Customer sees their own booking"
            : "Team sees the shared schedule"}
        </div>
      </div>
      <div className="concept-controls">
        <fieldset className="concept-choice-set">
          <legend>Choose a day</legend>
          <div className="concept-segments">
            {days.map((value, i) => (
              <button
                type="button"
                key={value}
                aria-pressed={day === i}
                onClick={() => {
                  setDay(i);
                  setConflict(false);
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="concept-control-row">
          <label className="concept-select">
            Time
            <select
              value={time}
              onChange={(event) => {
                setTime(Number(event.target.value));
                setConflict(false);
              }}
            >
              {times.map((value, i) => (
                <option key={value} value={i}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="concept-select">
            View as
            <select
              value={view}
              onChange={(event) => setView(event.target.value)}
            >
              <option>Customer</option>
              <option>Team</option>
            </select>
          </label>
        </div>
        <div className="concept-control-row">
          <button type="button" className="concept-primary" onClick={book}>
            {reservation
              ? reserved
                ? "Try the same slot"
                : "Move reservation"
              : "Reserve example"}
            <ArrowRight />
          </button>
          <button
            type="button"
            className="concept-reset"
            disabled={!reservation}
            onClick={() => {
              setReservation(null);
              setConflict(false);
            }}
          >
            <ArrowCounterClockwise /> Reset
          </button>
        </div>
        <p className="concept-status" role="status">
          {conflict
            ? "That slot is already reserved. The platform prevents a duplicate; choose another time to move it."
            : reservation
              ? "One local example reservation is saved. Switch perspectives or choose another time to move it. No real appointment was booked."
              : "Select a time and reserve it. Then try booking it twice to see the guardrail."}
        </p>
      </div>
      <p className="concept-caption">
        Product Concept <span>Sample availability. No live bookings.</span>
      </p>
    </div>
  );
}
