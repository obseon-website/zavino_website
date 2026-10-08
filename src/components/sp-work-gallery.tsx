"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/lib/site";
import { MediaDialog, type MediaItem } from "@/components/media-dialog";

export function SpWorkGallery() {
  const [active, setActive] = useState<MediaItem | null>(null);
  return (
    <>
      <div className="sp-project-grid">
        {projects.map((project, index) => (
          <article
            id={project.id}
            key={project.id}
            className={`sp-project sp-project-${index}`}
          >
            <button
              className="sp-project-image"
              aria-label={`View ${project.title} creative work`}
              onClick={() =>
                setActive({
                  title: project.title,
                  description: project.description,
                  image: `${project.image}-960`,
                  alt: project.alt,
                })
              }
            >
              <Image
                src={`/media/${project.image}-960.webp`}
                alt={project.alt}
                width={960}
                height={index === 0 ? 1280 : 960}
                sizes="(max-width: 700px) 90vw, 45vw"
              />
              <span>
                <ArrowUpRight size={23} />
              </span>
            </button>
            <div className="sp-project-caption">
              <div>
                <span className="sp-concept-label">
                  CLIENT CREATIVE / SELECTED WORK
                </span>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <span className="sp-number">0{index + 1}</span>
            </div>
            <p className="sp-project-description">{project.description}</p>
          </article>
        ))}
      </div>
      <MediaDialog item={active} onClose={() => setActive(null)} />
    </>
  );
}
