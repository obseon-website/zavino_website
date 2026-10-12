"use client";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cursor,
  Desktop,
  DeviceMobile,
} from "@phosphor-icons/react";
/** This original website concept appears only on the website service page. */
export function WebsitePlayground() {
  return (
    <div className="service-playground playground-web">
      <Website />
      <p className="playground-caption">
        Product Concept <span>Choose the goal. Follow the journey.</span>
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
function Website() {
  const [mobile, setMobile] = useState(false);
  const [goal, setGoal] = useState("inquiry");
  const [preview, setPreview] = useState(false);
  const { root, input } = useInputMotion();
  return (
    <div
      ref={root}
      className="playground-interaction"
      data-device={mobile ? "mobile" : "desktop"}
      data-goal={goal}
      data-preview={preview}
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
              {preview
                ? "A useful next step."
                : goal === "inquiry"
                  ? "A clear offer."
                  : "Work worth exploring."}
              <br />
              <span>
                {preview
                  ? goal === "inquiry"
                    ? "Share the requirement."
                    : "See the whole story."
                  : "Made for people."}
              </span>
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
            {preview
              ? "Your next step."
              : goal === "inquiry"
                ? "A clear offer."
                : "Explore the work."}
          </strong>
          <Image
            src="/media/flight-ramp.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="200px"
          />
          <div className="phone-action">
            {preview
              ? goal === "inquiry"
                ? "A focused inquiry form"
                : "A detailed project story"
              : "A clear route forward"}{" "}
            <ArrowUpRight />
          </div>
          <span className="phone-home" />
        </div>
        <span className="snippet-note web-note">
          <Check />{" "}
          {preview
            ? "The next step stays visible."
            : "Considered at every size."}
        </span>
      </div>
      <div className="website-goal-controls">
        <fieldset>
          <legend>The visitor’s goal</legend>
          <div className="snippet-switch">
            <button
              type="button"
              aria-pressed={goal === "inquiry"}
              onClick={(e) => {
                input(e);
                setGoal("inquiry");
                setPreview(false);
              }}
            >
              Make an inquiry
            </button>
            <button
              type="button"
              aria-pressed={goal === "work"}
              onClick={(e) => {
                input(e);
                setGoal("work");
                setPreview(false);
              }}
            >
              Explore the work
            </button>
          </div>
        </fieldset>
        <button
          type="button"
          className="snippet-action"
          onClick={(e) => {
            input(e);
            setPreview(!preview);
          }}
        >
          {preview ? "Return to the landing" : "Preview the next step"}
          <ArrowRight />
        </button>
      </div>
      <div className="playground-controls">
        <p className="playground-status" aria-live="polite">
          {`${mobile ? "Mobile" : "Desktop"} view. ${preview ? (goal === "inquiry" ? "The visitor reaches a focused requirement form." : "The visitor reaches the full project story.") : "The landing directs visitors toward their chosen goal."} This is a local concept; no inquiry is sent.`}
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
