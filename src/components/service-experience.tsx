"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Check } from "@phosphor-icons/react";
import { serviceCatalog } from "@/lib/services";
import { useConceptMotion } from "./concepts/use-concept-motion";

/** Native scrolling turns six business opportunities into one connected board. */
export function ServiceExperience() {
  const [active, setActive] = useState(0);
  const chapters = useRef<HTMLDivElement>(null);
  const motion = useConceptMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-25% 0px -55% 0px" },
    );
    chapters.current
      ?.querySelectorAll("article")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const service = serviceCatalog[active];
  return (
    <div className="opportunity-experience">
      <div className="opportunity-chapters" ref={chapters}>
        {serviceCatalog.map((item, i) => (
          <article key={item.slug} data-index={i}>
            <h3>{item.line}</h3>
            <p>{item.description}</p>
            {"availability" in item && (
              <p className="availability-note">{item.availability}</p>
            )}
            <Link className="text-link" href={`/services/${item.slug}`}>
              Explore {item.name} <ArrowUpRight size={18} />
            </Link>
          </article>
        ))}
      </div>
      <div
        className={`opportunity-stage business-concept accent-${service.color}`}
        {...motion}
      >
        <div
          className="opportunity-mobile-controls"
          role="group"
          aria-label="Choose a business opportunity"
        >
          {serviceCatalog.map((item, i) => (
            <button
              type="button"
              key={item.slug}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {item.shortName}
            </button>
          ))}
        </div>
        <div
          className="opportunity-board"
          aria-hidden="true"
          data-chapter={active}
        >
          <div className="opportunity-sheet opportunity-sheet-back" />
          <div className="opportunity-sheet opportunity-sheet-middle" />
          <div className="opportunity-sheet opportunity-sheet-front">
            <span className="opportunity-note">A useful connection</span>
            <div key={service.slug} className="opportunity-flow">
              <span className="opportunity-input">{service.input}</span>
              <ArrowDown size={26} />
              <strong>{service.name}</strong>
              <ArrowDown size={26} />
              <span className="opportunity-output">
                <Check size={22} />
                {service.output}
              </span>
            </div>
            <div className="opportunity-dots">
              {serviceCatalog.map((s, i) => (
                <i key={s.slug} data-active={i === active} />
              ))}
            </div>
          </div>
          <span className="opportunity-stamp">
            Less friction.
            <br />
            More possibility.
          </span>
        </div>
        <div className="opportunity-mobile-copy" aria-live="polite">
          <h3>{service.name}</h3>
          <p>{service.line}</p>
          {"availability" in service && (
            <p className="availability-note">{service.availability}</p>
          )}
          <Link className="text-link" href={`/services/${service.slug}`}>
            Explore this service <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="concept-caption">
          An illustration of what we build. Each service has a concept you can
          try.
        </p>
      </div>
    </div>
  );
}
