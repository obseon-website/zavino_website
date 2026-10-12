"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, ArrowRight } from "@phosphor-icons/react";
import { serviceCatalog } from "@/lib/services";
import { useConceptMotion } from "./use-concept-motion";
export function ServiceFinder() {
  const [choice, setChoice] = useState(0);
  const motion = useConceptMotion();
  const item = serviceCatalog[choice];
  return (
    <div
      className={`business-concept service-finder accent-${item.color}`}
      {...motion}
    >
      <div className="finder-choices">
        <h2>
          What needs to
          <br />
          work better?
        </h2>
        <div role="group" aria-label="Your business priority">
          {serviceCatalog.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={choice === i}
              onClick={() => setChoice(i)}
            >
              <span>{s.need}</span>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </div>
      <div className="finder-result">
        <div className="finder-compass" aria-hidden="true">
          <Compass
            size={48}
            weight="light"
            style={{ transform: `rotate(${choice * 45}deg)` }}
          />
        </div>
        <div className="finder-ticket" aria-live="polite">
          <h3>{item.name}</h3>
          <p>{item.line}</p>
          <ul>
            {item.items.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {"availability" in item && (
            <p className="availability-note">{item.availability}</p>
          )}
          <Link href={`/services/${item.slug}`} className="text-link">
            Try the service concept <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="concept-caption">
          A starting point for a conversation. Your project may connect more
          than one service.
        </p>
      </div>
    </div>
  );
}
