"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowsClockwise,
  Check,
  CheckCircle,
  Cursor,
  Desktop,
  EnvelopeSimple,
  Fingerprint,
  FolderSimple,
  ShieldCheck,
  DeviceMobile,
  Sparkle,
  Stack,
  Users,
} from "@phosphor-icons/react";

export type ServiceKind = "automation" | "saas" | "web";

/** These are working, local illustrations. They never send data or imply client results. */
export function ServicePlayground({
  kind,
  compact = false,
}: {
  kind: ServiceKind;
  compact?: boolean;
}) {
  return (
    <div
      className={`service-playground playground-${kind}${compact ? " playground-compact" : ""}`}
    >
      {kind === "automation" ? (
        <Automation />
      ) : kind === "saas" ? (
        <Product />
      ) : (
        <Website />
      )}
      <p className="playground-caption">
        Interactive studio concept <span>Made to be explored.</span>
      </p>
    </div>
  );
}

function useInputMotion() {
  const root = useRef<HTMLDivElement>(null);
  const input = (event: MouseEvent<HTMLButtonElement>) => {
    if (root.current)
      root.current.dataset.input = event.detail === 0 ? "keyboard" : "pointer";
  };
  return { root, input };
}

function Automation() {
  const [step, setStep] = useState(0);
  const { root, input } = useInputMotion();
  const status = [
    "An inquiry arrives. Give it a useful next step.",
    "The brief is ready. A person decides what happens next.",
    "Approved in this example. Nothing has been sent.",
  ][step];
  return (
    <div ref={root} className="playground-interaction" data-step={step}>
      <div className="snippet-scene automation-scene" aria-hidden="true">
        <span className="snippet-keycap mail-key">
          <EnvelopeSimple />
        </span>
        <span className="snippet-keycap check-key">
          <ShieldCheck />
        </span>
        <div className="inquiry-slip">
          <span className="snippet-avatar">H</span>
          <div>
            <strong>A new project inquiry</strong>
            <span>“Our team has a good idea.”</span>
          </div>
          <ArrowUpRight />
        </div>
        <div className="routing-track">
          <i />
          <span className="routing-packet">
            <ArrowRight />
          </span>
          <i />
        </div>
        <div className="brief-window">
          <div className="snippet-toolbar">
            <span>
              <FolderSimple /> A little less busywork.
            </span>
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="brief-title">
            <span className="brief-symbol">
              <Sparkle />
            </span>
            <div>
              <span>Project brief</span>
              <strong>From scattered to sorted.</strong>
            </div>
          </div>
          <div className="brief-fields">
            <div>
              <span>What they need</span>
              <strong>A better customer experience</strong>
              <Check />
            </div>
            <div>
              <span>Who takes it forward</span>
              <strong>The right person on your team</strong>
              <Check />
            </div>
            <div>
              <span>The next step</span>
              <strong>
                {step === 2
                  ? "Approved for a conversation"
                  : "A conversation, with context"}
              </strong>
              <Check />
            </div>
          </div>
          <div className="approval-stamp">
            <CheckCircle weight="fill" />
            <span>
              {
                [
                  "Waiting for a brief.",
                  "Ready for a human.",
                  "Approved by you.",
                ][step]
              }
            </span>
          </div>
        </div>
      </div>
      <div className="playground-controls">
        <p className="playground-status" aria-live="polite">
          {status}
        </p>
        <button
          className="snippet-action"
          onClick={(event) => {
            input(event);
            setStep((step + 1) % 3);
          }}
        >
          {step === 0
            ? "Prepare the brief"
            : step === 1
              ? "Approve example"
              : "Try it again"}
          {step === 2 ? <ArrowsClockwise /> : <ArrowRight />}
        </button>
      </div>
    </div>
  );
}

const perspectives = [
  {
    label: "Customer",
    icon: Cursor,
    title: "Everything I need.",
    subtitle: "One clear place to start.",
    rows: ["My workspace", "Files & conversations", "A clear next step"],
    note: "A welcome that makes sense.",
    symbol: "H",
  },
  {
    label: "Team",
    icon: Users,
    title: "Everyone in sync.",
    subtitle: "The work, with its context.",
    rows: ["Shared work queue", "Owners & handoffs", "Activity in one place"],
    note: "A shared view of what matters.",
    symbol: "T",
  },
  {
    label: "Owner",
    icon: ShieldCheck,
    title: "Room to run it.",
    subtitle: "The right controls, built in.",
    rows: ["People & permissions", "Plans & billing", "Product settings"],
    note: "A product you can operate.",
    symbol: "O",
  },
];

function Product() {
  const [role, setRole] = useState(0);
  const { root, input } = useInputMotion();
  return (
    <div ref={root} className="playground-interaction" data-role={role}>
      <div className="snippet-scene product-scene" aria-hidden="true">
        <span className="snippet-keycap stack-key">
          <Stack />
        </span>
        {perspectives.map((perspective, index) => {
          const Icon = perspective.icon;
          const order = (index - role + 3) % 3;
          return (
            <div
              className="perspective-window"
              data-order={order}
              key={perspective.label}
            >
              <div className="snippet-toolbar">
                <span>
                  <Stack /> Your product
                </span>
                <span className="role-badge">{perspective.label} view</span>
              </div>
              <div className="perspective-body">
                <div className="perspective-welcome">
                  <span className="snippet-avatar">{perspective.symbol}</span>
                  <span>{perspective.subtitle}</span>
                </div>
                <strong className="perspective-title">
                  {perspective.title}
                </strong>
                <div className="perspective-rows">
                  {perspective.rows.map((row, i) => (
                    <div key={row}>
                      <span>
                        {i === 0 ? (
                          <Icon />
                        ) : i === 1 ? (
                          <FolderSimple />
                        ) : (
                          <Fingerprint />
                        )}
                        {row}
                      </span>
                      <ArrowUpRight />
                    </div>
                  ))}
                </div>
                <div className="perspective-footer">
                  <span className="teammate-avatars">
                    <i>A</i>
                    <i>M</i>
                    <i>Z</i>
                  </span>
                  <span>One connected product.</span>
                </div>
              </div>
            </div>
          );
        })}
        <span className="snippet-note product-note">
          <Check /> Built around your people.
        </span>
      </div>
      <div className="playground-controls">
        <p className="playground-status" aria-live="polite">
          {perspectives[role].note}
        </p>
        <div
          className="snippet-switch"
          role="group"
          aria-label="Explore product perspectives"
        >
          {perspectives.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              aria-pressed={role === i}
              onClick={(event) => {
                input(event);
                setRole(i);
              }}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Website() {
  const [mobile, setMobile] = useState(false);
  const { root, input } = useInputMotion();
  return (
    <div
      ref={root}
      className="playground-interaction"
      data-device={mobile ? "mobile" : "desktop"}
    >
      <div className="snippet-scene website-scene" aria-hidden="true">
        <span className="snippet-keycap cursor-key">
          <Cursor />
        </span>
        <div className="responsive-desktop">
          <div className="snippet-toolbar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>A better digital front door</span>
            <ArrowUpRight />
          </div>
          <div className="mini-site-nav">
            <strong>zavino.</strong>
            <span>Work &nbsp; Studio &nbsp; Contact</span>
          </div>
          <div className="mini-site-title">
            <strong>
              Good ideas.
              <br />
              <span>Ready for takeoff.</span>
            </strong>
            <span className="mini-site-arrow">
              <ArrowUpRight />
            </span>
          </div>
          <Image
            src="/media/flight-ramp.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="(max-width: 700px) 80vw, 550px"
            className="mini-site-image"
          />
          <div className="mini-site-bottom">
            <span>Thoughtfully connected.</span>
            <span>Made for people.</span>
          </div>
        </div>
        <div className="responsive-phone">
          <span className="phone-speaker" />
          <div className="mini-site-nav">
            <strong>zavino.</strong>
            <span className="mini-menu">
              <i />
              <i />
            </span>
          </div>
          <strong className="phone-title">
            Good ideas.
            <br />
            Ready for
            <br />
            takeoff.
          </strong>
          <Image
            src="/media/flight-ramp.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="200px"
          />
          <div className="phone-action">
            Let’s make it happen. <ArrowUpRight />
          </div>
          <span className="phone-home" />
        </div>
        <span className="snippet-note web-note">
          <Check /> Considered at every size.
        </span>
      </div>
      <div className="playground-controls">
        <p className="playground-status" aria-live="polite">
          {mobile
            ? "The same idea. Made for your hand."
            : "A little more room. The same attention to detail."}
        </p>
        <div
          className="snippet-switch"
          role="group"
          aria-label="Explore screen sizes"
        >
          <button
            aria-pressed={!mobile}
            onClick={(event) => {
              input(event);
              setMobile(false);
            }}
          >
            <Desktop />
            <span>Desktop</span>
          </button>
          <button
            aria-pressed={mobile}
            onClick={(event) => {
              input(event);
              setMobile(true);
            }}
          >
            <DeviceMobile />
            <span>Mobile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
