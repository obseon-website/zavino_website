"use client";
import { useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";
import { clients } from "@/lib/site";
export function ClientStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className="client-strip section-shell"
      aria-label="Selected clients"
    >
      <div className="client-strip-label">
        <p>In good company.</p>
        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play client names" : "Pause client names"}
        >
          {paused ? (
            <Play size={12} weight="fill" />
          ) : (
            <Pause size={12} weight="fill" />
          )}
        </button>
      </div>
      <div className="client-marquee">
        <div
          className="client-track"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {[0, 1].map((copy) => (
            <div
              className="client-set"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clients.slice(0, 6).map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
