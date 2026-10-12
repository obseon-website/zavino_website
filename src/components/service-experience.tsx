"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  EnvelopeSimple,
  Stack,
  Cursor,
  Robot,
  PencilLine,
  CaretDown,
} from "@phosphor-icons/react";
import { homeServices } from "@/lib/home";
import { workflowExamples, type WorkflowKind } from "@/lib/service-concepts";
import { ServicePlayground } from "@/components/service-playground";

/** Native scrolling drives one bounded, reversible showcase. Copy remains ordinary links. */
export function ServiceExperience() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    const element = root.current;
    if (!element) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add(
          "(min-width: 800px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)",
          () => {
            const stage = element.querySelector<HTMLElement>(".service-stage")!;
            const frame = element.querySelector<HTMLElement>(
              ".service-stage-frame",
            )!;
            const visuals =
              element.querySelector<HTMLElement>(".service-visuals")!;
            const caption = element.querySelector<HTMLElement>(
              ".service-stage-caption",
            )!;
            const blur = document.querySelector<HTMLElement>(".viewport-blur");
            // Reserve the scaled plane's height, keeping its attribution full-size
            // and above the blur. Measure on refresh, never on scroll frames.
            const fitStage = () => {
              const naturalHeight = visuals.offsetHeight;
              const top = parseFloat(getComputedStyle(stage).top);
              const captionGap = parseFloat(
                getComputedStyle(caption).marginTop,
              );
              const blurHeight = blur
                ? parseFloat(getComputedStyle(blur).height)
                : 0;
              const available =
                window.innerHeight -
                top -
                blurHeight -
                caption.offsetHeight -
                captionGap -
                16;
              const scale = Math.min(1, Math.max(1, available) / naturalHeight);
              frame.style.height = `${naturalHeight * scale}px`;
              visuals.style.transform = `scale(${scale})`;
            };
            fitStage();
            ScrollTrigger.addEventListener("refreshInit", fitStage);
            const panels =
              element.querySelectorAll<HTMLElement>(".service-visual");
            const progress = element.querySelector<HTMLElement>(
              ".service-scroll-progress i",
            );
            const posed =
              "translate3d(0,0,0) rotateX(6deg) rotateY(-9deg) rotateZ(-3deg)";
            gsap.set(panels[0], { transform: posed, opacity: 1 });
            gsap.set(Array.from(panels).slice(1), {
              transform:
                "translate3d(4%,9%,-60px) rotateX(9deg) rotateY(-12deg) rotateZ(1deg)",
              opacity: 0,
            });
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                // Use the exact native sticky boundaries, so entering/leaving
                // the stage never changes its coordinate system mid-transition.
                start: () =>
                  `top top+=${parseFloat(getComputedStyle(stage).top)}`,
                end: () =>
                  `bottom top+=${parseFloat(getComputedStyle(stage).top) + stage.offsetHeight}`,
                scrub: 0.18,
                invalidateOnRefresh: true,
                onUpdate: ({ progress: value }) => {
                  element.dataset.chapter = String(
                    Math.min(
                      panels.length - 1,
                      Math.floor(value * panels.length),
                    ),
                  );
                  if (progress) progress.style.transform = `scaleX(${value})`;
                },
                onToggle: ({ isActive }) =>
                  panels.forEach((panel) => {
                    panel.style.willChange = isActive
                      ? "transform, opacity"
                      : "auto";
                  }),
              },
            });
            // Divide the same native-scroll stage across all four services.
            panels.forEach((panel, index) => {
              if (index === 0) return;
              const position = index / panels.length;
              timeline
                .to(
                  panels[index - 1],
                  {
                    transform:
                      "translate3d(-4%,-8%,-60px) rotateX(9deg) rotateY(-3deg) rotateZ(-5deg)",
                    opacity: 0,
                    duration: 0.07,
                    ease: "none",
                  },
                  position - 0.045,
                )
                .to(
                  panel,
                  {
                    transform: posed,
                    opacity: 1,
                    duration: 0.07,
                    ease: "none",
                  },
                  position - 0.035,
                );
            });
            timeline.to({}, { duration: 0.19 }, 0.81);
            return () => {
              ScrollTrigger.removeEventListener("refreshInit", fitStage);
              frame.style.removeProperty("height");
              visuals.style.removeProperty("transform");
              delete element.dataset.chapter;
            };
          },
        );
        revert = () => media.revert();
      })
      .catch(() => {
        if (!disposed) element.dataset.motion = "unavailable";
      });
    return () => {
      disposed = true;
      revert?.();
    };
  }, []);

  return (
    <div className="service-experience" ref={root} data-chapter="0">
      <div className="service-chapters">
        {homeServices.map((service, index) => (
          <article className="service-chapter" key={service.href}>
            <Link className="service-chapter-link" href={service.href}>
              <h3 className="service-chapter-name">
                {service.name}
                <ArrowUpRight size={21} aria-hidden="true" />
              </h3>
              <p className="service-chapter-outcome">{service.line}</p>
              <p>{service.description}</p>
              <span className="service-chapter-more">
                Learn more <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
            <details className="home-mobile-playground">
              <summary>
                Try an example <CaretDown size={17} aria-hidden="true" />
              </summary>
              <ServicePlayground kind={service.kind} compact />
            </details>
            <span className="service-chapter-marker" aria-hidden="true">
              <i />
              {index + 1} / {homeServices.length}
            </span>
          </article>
        ))}
      </div>
      <div className="service-stage" aria-hidden="true">
        <div className="service-stage-frame">
          <div className="service-visuals">
            <WorkflowVisual kind="automation" />
            <WorkflowVisual kind="operations" />
            <div className="service-visual visual-product">
              <div className="concept-window product-concept">
                <div className="concept-toolbar">
                  <span className="concept-mark">
                    <Stack size={18} />
                  </span>
                  <span>Room to build.</span>
                  <span className="concept-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="product-concept-heading">
                  <span>Workspace / Your product</span>
                  <h4>
                    Big ideas.
                    <br />A useful first step.
                  </h4>
                </div>
                <div className="concept-board">
                  <div>
                    <span>In the plan</span>
                    <div className="concept-task">
                      <i />
                      <strong>A clearer starting point</strong>
                      <small>Product direction</small>
                    </div>
                    <div className="concept-task">
                      <i />
                      <strong>Made for your people</strong>
                      <small>Interface design</small>
                    </div>
                  </div>
                  <div>
                    <span>Taking shape</span>
                    <div className="concept-task task-building">
                      <i />
                      <strong>The first working release</strong>
                      <small>Design + engineering</small>
                      <div className="concept-avatars">
                        <b>A</b>
                        <b>M</b>
                        <b>Z</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="concept-bottom">
                  One team. One shared direction.
                  <ArrowUpRight size={17} />
                </div>
              </div>
              <div className="concept-float product-float">
                <Cursor size={19} />
                <span>Make it real.</span>
              </div>
              <span className="concept-keycap keycap-c">
                <Stack size={35} />
              </span>
            </div>
            <WorkflowVisual kind="content" />
          </div>
        </div>
        <div className="service-stage-caption">
          <span>Service examples</span>
          <div className="service-scroll-progress">
            <i />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual({ kind }: { kind: WorkflowKind }) {
  const example = workflowExamples[kind];
  const Icon =
    kind === "operations"
      ? Robot
      : kind === "content"
        ? PencilLine
        : EnvelopeSimple;
  return (
    <div className={`service-visual visual-${kind}`}>
      <div className="concept-window">
        <div className="concept-toolbar">
          <span className="concept-mark">
            <Icon size={17} />
          </span>
          <span>{example.title}</span>
          <span className="concept-dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="automation-message">
          <span className="concept-avatar">
            <Icon size={20} />
          </span>
          <div>
            <strong>{example.incoming}</strong>
            <span>{example.request}</span>
          </div>
          <ArrowUpRight size={20} />
        </div>
        <div className="automation-connector">
          <span />
          <ArrowRight size={20} />
          <span />
        </div>
        <div className="automation-result">
          <div className="concept-tick">
            <Check size={28} />
          </div>
          <h4>{example.result}</h4>
          <p>{example.statuses[1]}</p>
        </div>
      </div>
      <div className="concept-float automation-float">
        <Check size={19} />
        <span>Your team has the final say.</span>
        <span className="float-dot" />
      </div>
      <span className="concept-keycap keycap-a">
        <Icon size={35} />
      </span>
      <span className="concept-keycap keycap-b">
        <ArrowRight size={37} />
      </span>
    </div>
  );
}
