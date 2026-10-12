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
  FolderSimple,
  Robot,
  ShieldCheck,
  DeviceMobile,
  Sparkle,
  Stack,
  Users,
  PencilLine,
  SquaresFour,
  NavigationArrow,
  ClipboardText,
  UserSwitch,
  Pulse,
  UserGear,
  CreditCard,
  GearSix,
  UserCircle,
} from "@phosphor-icons/react";
import { workflowExamples, type WorkflowKind } from "@/lib/service-concepts";
import { useButtonConfetti } from "@/components/button-confetti";

export type ServiceKind = WorkflowKind | "saas" | "web";

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
      {kind === "saas" ? (
        <Product />
      ) : kind === "web" ? (
        <Website />
      ) : (
        <Automation kind={kind} />
      )}
      <p className="playground-caption">
        Interactive example <span>Try the controls above.</span>
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

function Automation({ kind }: { kind: WorkflowKind }) {
  const [step, setStep] = useState(0);
  const { root, input } = useInputMotion();
  const { celebrate, cancel } = useButtonConfetti();
  const example = workflowExamples[kind];
  const Icon =
    kind === "operations"
      ? Robot
      : kind === "content"
        ? PencilLine
        : EnvelopeSimple;
  return (
    <div ref={root} className="playground-interaction" data-step={step}>
      <div className="snippet-scene automation-scene" aria-hidden="true">
        <span className="snippet-keycap mail-key">
          <Icon />
        </span>
        <span className="snippet-keycap check-key">
          <ShieldCheck />
        </span>
        <div className="inquiry-slip">
          <span className="snippet-avatar">H</span>
          <div>
            <strong>{example.incoming}</strong>
            <span>{example.request}</span>
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
              <Icon /> {example.title}
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
              <span>{example.title}</span>
              <strong>{example.result}</strong>
            </div>
          </div>
          <div className="brief-fields">
            {example.fields.map((field) => (
              <div key={field[0]}>
                <span>{field[0]}</span>
                <strong>
                  {step === 2 && field.length === 3 ? field[2] : field[1]}
                </strong>
                <Check />
              </div>
            ))}
          </div>
          <div className="approval-stamp">
            <CheckCircle weight="fill" />
            <span>
              {
                ["Ready to start.", "Ready for review.", "Approved by you."][
                  step
                ]
              }
            </span>
          </div>
        </div>
      </div>
      <div className="playground-controls">
        <p className="playground-status" aria-live="polite">
          {example.statuses[step]}
        </p>
        <button
          className="snippet-action"
          onClick={(event) => {
            input(event);
            if (step === 1) celebrate(event);
            if (step === 2) cancel();
            setStep((step + 1) % 3);
          }}
        >
          {step === 0
            ? example.prepare
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
    icon: UserCircle,
    title: "Everything I need.",
    subtitle: "One clear place to start.",
    rows: [
      { label: "My workspace", icon: SquaresFour },
      { label: "Files & conversations", icon: FolderSimple },
      { label: "A clear next step", icon: NavigationArrow },
    ],
    note: "A welcome that makes sense.",
    symbol: "H",
  },
  {
    label: "Team",
    icon: Users,
    title: "Everyone in sync.",
    subtitle: "The work, with its context.",
    rows: [
      { label: "Shared work queue", icon: ClipboardText },
      { label: "Owners & handoffs", icon: UserSwitch },
      { label: "Activity in one place", icon: Pulse },
    ],
    note: "A shared view of what matters.",
    symbol: "T",
  },
  {
    label: "Owner",
    icon: ShieldCheck,
    title: "Room to run it.",
    subtitle: "The right controls, built in.",
    rows: [
      { label: "People & permissions", icon: UserGear },
      { label: "Plans & billing", icon: CreditCard },
      { label: "Product settings", icon: GearSix },
    ],
    note: "A product you can operate.",
    symbol: "O",
  },
];

function Product() {
  const [role, setRole] = useState(0);
  const [visited, setVisited] = useState(1);
  const { root, input } = useInputMotion();
  const { celebrate, cancel } = useButtonConfetti();
  const complete = visited === 7;
  return (
    <div ref={root} className="playground-interaction" data-role={role}>
      <div className="snippet-scene product-scene" aria-hidden="true">
        <span className="snippet-keycap stack-key">
          <Stack />
        </span>
        {perspectives.map((perspective, index) => {
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
                  {perspective.rows.map(({ label, icon: TaskIcon }) => (
                    <div key={label}>
                      <span>
                        <TaskIcon />
                        {label}
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
          {complete
            ? "All three views explored. Made for everyone."
            : perspectives[role].note}
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
                const next = visited | (1 << i);
                if (next === 7 && !complete) celebrate(event);
                setVisited(next);
                setRole(i);
              }}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="playground-reset text-link"
          data-ready={complete}
          disabled={!complete}
          aria-hidden={!complete}
          onClick={(event) => {
            input(event);
            cancel();
            setRole(0);
            setVisited(1);
          }}
        >
          Try it again <ArrowsClockwise size={16} />
        </button>
      </div>
    </div>
  );
}

function Website() {
  const [mobile, setMobile] = useState(false);
  const [visitedMobile, setVisitedMobile] = useState(false);
  const { root, input } = useInputMotion();
  const { celebrate, cancel } = useButtonConfetti();
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
          {visitedMobile
            ? "Both screens explored. Made for every size."
            : mobile
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
              if (!visitedMobile) celebrate(event);
              setVisitedMobile(true);
              setMobile(true);
            }}
          >
            <DeviceMobile />
            <span>Mobile</span>
          </button>
        </div>
        <button
          type="button"
          className="playground-reset text-link"
          data-ready={visitedMobile}
          disabled={!visitedMobile}
          aria-hidden={!visitedMobile}
          onClick={(event) => {
            input(event);
            cancel();
            setMobile(false);
            setVisitedMobile(false);
          }}
        >
          Try it again <ArrowsClockwise size={16} />
        </button>
      </div>
    </div>
  );
}
