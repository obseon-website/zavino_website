"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "@phosphor-icons/react";
import { reels, reelMedia } from "@/lib/reels";
import { MediaDialog } from "./media-dialog";

export function ReelGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const shift = (direction: number) => {
    if (!rail.current) return;
    rail.current.scrollBy({
      left: direction * rail.current.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className="reel-gallery">
      <div className="reel-gallery-header">
        <div>
          <h3>The motion collection.</h3>
          <p>13 films. Find your frame.</p>
        </div>
        <div className="reel-controls">
          <button
            className="icon-button"
            onClick={() => shift(-1)}
            disabled={edges.start}
            aria-label="Previous showreels"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="icon-button"
            onClick={() => shift(1)}
            disabled={edges.end}
            aria-label="Next showreels"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div
        className="reel-rail"
        ref={rail}
        tabIndex={0}
        role="region"
        aria-label="All 13 Zavino showreels. Scroll horizontally or use the arrow buttons."
        onScroll={(e) => {
          const el = e.currentTarget;
          const start = el.scrollLeft < 4,
            end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
          setEdges((previous) =>
            previous.start === start && previous.end === end
              ? previous
              : { start, end },
          );
        }}
      >
        {reels.map((reel, i) => (
          <article className="reel-card" key={reel.id}>
            <button
              onClick={() => setSelected(i)}
              aria-label={`Play showreel ${reel.id}: ${reel.title}, ${reel.duration}`}
            >
              <Image
                src={`/media/reels/${reel.id}-poster.webp`}
                width={480}
                height={854}
                alt={reel.alt}
                sizes="(max-width: 799px) 220px, 290px"
              />
              <span className="reel-card-play">
                <Play size={23} weight="fill" />
              </span>
              <span className="reel-duration">{reel.duration}</span>
            </button>
            <div className="reel-card-caption">
              <h4>{reel.title}</h4>
              <p>{reel.category}</p>
            </div>
          </article>
        ))}
      </div>
      <MediaDialog
        item={selected === null ? null : reelMedia(reels[selected])}
        onClose={() => setSelected(null)}
        position={
          selected === null ? undefined : `${selected + 1} / ${reels.length}`
        }
        onPrevious={
          selected === null
            ? undefined
            : () => setSelected((selected - 1 + reels.length) % reels.length)
        }
        onNext={
          selected === null
            ? undefined
            : () => setSelected((selected + 1) % reels.length)
        }
      />
    </div>
  );
}
