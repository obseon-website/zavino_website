"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  EnvelopeSimple,
  Stack,
  Cursor,
} from "@phosphor-icons/react";
import { homeServices } from "@/lib/home";

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
            gsap.set([panels[1], panels[2]], {
              transform:
                "translate3d(15%,28%,-100px) rotateX(12deg) rotateY(-16deg) rotateZ(7deg)",
              opacity: 0,
            });
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                start: "top 45%",
                end: "bottom 75%",
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: ({ progress: value }) => {
                  element.dataset.chapter = String(
                    Math.min(2, Math.floor(value * 3)),
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
            timeline
              .to(
                panels[0],
                {
                  transform:
                    "translate3d(-12%,-18%,-90px) rotateX(10deg) rotateY(10deg) rotateZ(-8deg)",
                  opacity: 0,
                  duration: 0.1,
                  ease: "none",
                },
                0.26,
              )
              .to(
                panels[1],
                { transform: posed, opacity: 1, duration: 0.12, ease: "none" },
                0.3,
              )
              .to(
                panels[1],
                {
                  transform:
                    "translate3d(-12%,-18%,-90px) rotateX(10deg) rotateY(10deg) rotateZ(-8deg)",
                  opacity: 0,
                  duration: 0.1,
                  ease: "none",
                },
                0.61,
              )
              .to(
                panels[2],
                {
                  transform:
                    "translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
                  opacity: 1,
                  duration: 0.12,
                  ease: "none",
                },
                0.65,
              )
              .to({}, { duration: 0.23 }, 0.77);
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
              <p className="service-chapter-outcome">{service.outcome}</p>
              <p>{service.description}</p>
              <span className="home-service-scope">{service.scope}</span>
              <span className="service-chapter-more">
                Explore the service <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
            <span className="service-chapter-marker" aria-hidden="true">
              <i />
              {index + 1} / 3
            </span>
          </article>
        ))}
      </div>
      <div className="service-stage" aria-hidden="true">
        <div className="service-stage-frame">
          <div className="service-visuals">
            <div className="service-visual visual-automation">
              <div className="concept-window">
                <div className="concept-toolbar">
                  <span className="concept-mark">
                    <EnvelopeSimple size={17} />
                  </span>
                  <span>Your everyday, connected.</span>
                  <span className="concept-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="automation-message">
                  <span className="concept-avatar">H</span>
                  <div>
                    <strong>A new project inquiry</strong>
                    <span>Someone has a good idea.</span>
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
                  <h4>A little less busywork.</h4>
                  <p>
                    The brief is organized.
                    <br />
                    Your team can take it from here.
                  </p>
                </div>
              </div>
              <div className="concept-float automation-float">
                <Check size={19} />
                <span>Ready for a human.</span>
                <span className="float-dot" />
              </div>
              <span className="concept-keycap keycap-a">
                <EnvelopeSimple size={35} />
              </span>
              <span className="concept-keycap keycap-b">
                <ArrowRight size={37} />
              </span>
            </div>
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
            <div className="service-visual visual-web">
              <div className="concept-window web-concept">
                <div className="concept-toolbar">
                  <span className="concept-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="concept-url">
                    A better digital front door
                  </span>
                  <ArrowUpRight size={17} />
                </div>
                <div className="web-concept-nav">
                  <strong>zavino.</strong>
                  <span>Work &nbsp; Studio &nbsp; Contact</span>
                </div>
                <div className="web-concept-heading">
                  <h4>
                    Good technology.
                    <br />
                    <span>A lighter workday.</span>
                  </h4>
                  <span className="web-concept-action">
                    <ArrowUpRight size={23} />
                  </span>
                </div>
                <Image
                  src="/media/workday-bridge.webp"
                  alt=""
                  width={1536}
                  height={1024}
                  sizes="540px"
                  className="web-concept-image"
                />
                <div className="concept-bottom">
                  Considered at every size.
                  <span className="device-outline" />
                </div>
              </div>
              <div className="concept-phone">
                <span />
                <strong>
                  Good
                  <br />
                  technology.
                </strong>
                <Image
                  src="/media/workday-bridge.webp"
                  alt=""
                  width={1536}
                  height={1024}
                  sizes="130px"
                />
                <div>
                  Made for people.
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-stage-caption">
          <span>Illustrative interface concepts</span>
          <div className="service-scroll-progress">
            <i />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
