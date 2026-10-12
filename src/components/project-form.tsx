"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "@phosphor-icons/react";
import { site } from "@/lib/site";
import {
  inquiryFocusOptions,
  inquiryLimits,
  validateInquiry,
  type InquiryErrors,
  type InquiryFocus,
  type InquirySource,
} from "@/lib/inquiry";

export function ProjectForm({
  initialFocus,
  source,
}: {
  initialFocus: InquiryFocus | "";
  source: InquirySource;
}) {
  const [focus, setFocus] = useState<InquiryFocus | "">(initialFocus);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [receipt, setReceipt] = useState<string>();
  const submitting = useRef(false);
  const attempt = useRef<{ id: string; payload: string } | null>(null);
  const status = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const hint =
    inquiryFocusOptions.find((option) => option.value === focus)?.hint ||
    "What workflow or product is holding you back, and what should be better?";

  function showStatus() {
    requestAnimationFrame(() => status.current?.focus());
  }
  function errorFor(name: keyof InquiryErrors) {
    return errors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  }
  function accessibility(name: keyof InquiryErrors, hintId?: string) {
    return {
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby":
        [hintId, errors[name] ? `${name}-error` : null]
          .filter(Boolean)
          .join(" ") || undefined,
    };
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || receipt) return;
    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    const validation = validateInquiry(values);
    setErrors({});
    setMessage("");
    if (!validation.ok) {
      setErrors(validation.errors);
      setMessage("Please check the highlighted fields.");
      showStatus();
      return;
    }
    const payload = JSON.stringify({ ...validation.data, source });
    if (attempt.current?.payload !== payload)
      attempt.current = { id: crypto.randomUUID(), payload };
    const inquiryId = attempt.current.id;
    submitting.current = true;
    setPending(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, source, inquiryId }),
        signal: controller.signal,
      });
      const body: unknown = await response.json();
      if (!body || typeof body !== "object" || Array.isArray(body))
        throw new Error("Invalid receipt");
      const result = body as Record<string, unknown>;
      if (
        response.ok &&
        result.ok === true &&
        result.received === true &&
        result.inquiryId === inquiryId
      ) {
        setReceipt(inquiryId);
      } else {
        if (
          result.errors &&
          typeof result.errors === "object" &&
          !Array.isArray(result.errors)
        ) {
          const fieldErrors: InquiryErrors = {};
          for (const [key, value] of Object.entries(result.errors)) {
            if (
              [
                "name",
                "company",
                "email",
                "focus",
                "brief",
                "systems",
                "outcome",
                "timing",
                "website",
              ].includes(key) &&
              typeof value === "string"
            ) {
              fieldErrors[key as keyof InquiryErrors] = value;
            }
          }
          setErrors(fieldErrors);
          if (
            fieldErrors.systems ||
            fieldErrors.outcome ||
            fieldErrors.timing
          ) {
            const details = form.current?.querySelector("details");
            if (details) details.open = true;
          }
        }
        setMessage(
          typeof result.message === "string"
            ? result.message
            : "We could not confirm receipt. Your details are still here — please retry or email us.",
        );
      }
    } catch {
      setMessage(
        "We could not confirm receipt. Your details are still here — please retry or email your brief directly.",
      );
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
      setPending(false);
      showStatus();
    }
  }

  if (receipt)
    return (
      <div className="brief-success" ref={status} tabIndex={-1} role="status">
        <span className="receipt-icon">
          <Check size={28} />
        </span>

        <h2>We’ve received your brief.</h2>
        <p>
          We’ve saved your brief. The team can review your context and follow up
          at the email you provided.
        </p>
        <p className="receipt-reference">Reference: {receipt}</p>
        <a
          className="button"
          href={site.auditBooking}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a 30-minute call <ArrowUpRight size={20} />
        </a>
        <p className="form-small">
          Have something to add?{" "}
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Project brief ${receipt}`)}`}
          >
            Email {site.email}
          </a>{" "}
          with your reference.
        </p>
      </div>
    );

  return (
    <form
      className="project-form"
      ref={form}
      onSubmit={submit}
      noValidate
      aria-busy={pending}
    >
      <div className="form-heading">
        <h2>Start with the problem.</h2>
        <p>
          Required fields are marked with an asterisk. A few useful details are
          enough.
        </p>
      </div>
      <div
        className="form-status"
        ref={status}
        tabIndex={-1}
        role={message ? "alert" : "status"}
        hidden={!message && !pending}
      >
        {pending ? "Saving your brief…" : message}
        {message && (
          <a href={`mailto:${site.email}`}>
            Email {site.email} <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <fieldset disabled={pending}>
        <legend className="sr-only">Project and contact details</legend>
        <div className="form-grid">
          <label htmlFor="name">
            Your name <span>*</span>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={inquiryLimits.name}
              {...accessibility("name")}
            />
            {errorFor("name")}
          </label>
          <label htmlFor="company">
            Company or project <span>*</span>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              required
              maxLength={inquiryLimits.company}
              {...accessibility("company")}
            />
            {errorFor("company")}
          </label>
          <label className="form-full" htmlFor="email">
            Email <span>*</span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={inquiryLimits.email}
              placeholder="you@company.com"
              {...accessibility("email")}
            />
            {errorFor("email")}
          </label>
          <label className="form-full" htmlFor="focus">
            Project focus <span>*</span>
            <select
              id="focus"
              name="focus"
              required
              value={focus}
              onChange={(event) =>
                setFocus(event.target.value as InquiryFocus | "")
              }
              {...accessibility("focus")}
            >
              <option value="" disabled>
                Choose what you’re working on
              </option>
              {inquiryFocusOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errorFor("focus")}
          </label>
          <label className="form-full" htmlFor="brief">
            What needs to change? <span>*</span>
            <span className="field-hint" id="brief-hint">
              {hint}
            </span>
            <textarea
              id="brief"
              name="brief"
              rows={5}
              required
              minLength={20}
              maxLength={inquiryLimits.brief}
              {...accessibility("brief", "brief-hint")}
            />
            {errorFor("brief")}
          </label>
        </div>
        <details className="form-more">
          <summary>
            Add systems, goals, or timing <span>Optional</span>
          </summary>
          <div className="form-grid">
            <label className="form-full" htmlFor="systems">
              Systems or data involved
              <span className="field-hint">
                For example: CRM, commerce, support, ERP, documents, or an
                existing app.
              </span>
              <textarea
                id="systems"
                name="systems"
                rows={3}
                maxLength={inquiryLimits.systems}
                {...accessibility("systems")}
              />
              {errorFor("systems")}
            </label>
            <label className="form-full" htmlFor="outcome">
              Scale or desired outcome
              <span className="field-hint">
                Teams involved, time lost, customer journey, or a launch goal.
              </span>
              <textarea
                id="outcome"
                name="outcome"
                rows={3}
                maxLength={inquiryLimits.outcome}
                {...accessibility("outcome")}
              />
              {errorFor("outcome")}
            </label>
            <label className="form-full" htmlFor="timing">
              Timing
              <input
                id="timing"
                name="timing"
                placeholder="A target date, or still exploring"
                maxLength={inquiryLimits.timing}
                {...accessibility("timing")}
              />
              {errorFor("timing")}
            </label>
          </div>
        </details>
        <div className="form-trap" aria-hidden="true">
          <label htmlFor="website">
            Leave this empty
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              maxLength={inquiryLimits.website}
            />
          </label>
        </div>
        <p className="form-small">
          Please leave out passwords, customer records, and confidential
          datasets. Need an NDA first?{" "}
          <a href={`mailto:${site.email}?subject=NDA%20request`}>Email us</a>.
        </p>
        <div className="form-submit">
          <button className="button" type="submit" disabled={pending}>
            {pending ? "Saving your brief…" : "Send your brief"}
            <ArrowUpRight size={20} />
          </button>
          <p>
            We’ll review your context and use your email to discuss a useful
            next step. <Link href="/privacy-policy">Privacy policy</Link>.
          </p>
        </div>
      </fieldset>
    </form>
  );
}
