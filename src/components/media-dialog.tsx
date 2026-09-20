"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";

export type MediaItem = {
  title: string;
  description?: string;
  image: string;
  video?: string;
  alt: string;
};
export function MediaDialog({
  item,
  onClose,
  onPrevious,
  onNext,
  position,
}: {
  item: MediaItem | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  position?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const isOpen = item !== null;
  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const dialog = ref.current;
    const originalFocus = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      originalFocus?.focus();
    };
  }, [isOpen]);
  return (
    <dialog
      ref={ref}
      className="media-dialog"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="media-title"
    >
      {item && (
        <div className="dialog-inner">
          <div className="dialog-header">
            <h2 id="media-title">{item.title}</h2>
            <button
              autoFocus
              onClick={onClose}
              className="icon-button"
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
          </div>
          {item.video ? (
            <video
              key={item.video}
              className="dialog-media"
              src={`/media/${item.video}.mp4`}
              poster={`/media/${item.image}.webp`}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={item.title}
            />
          ) : (
            <Image
              className="dialog-media"
              src={`/media/${item.image}.webp`}
              width={1200}
              height={1200}
              alt={item.alt}
              sizes="(max-width: 800px) 90vw, 70vw"
            />
          )}
          {item.description && <p>{item.description}</p>}
          {onPrevious && onNext && (
            <div className="dialog-navigation">
              <button onClick={onPrevious} className="text-link">
                <ArrowLeft size={18} />
                Previous film
              </button>
              <span className="mono">{position}</span>
              <button onClick={onNext} className="text-link">
                Next film
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
