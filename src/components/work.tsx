"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/lib/site";
import { MediaDialog, type MediaItem } from "./media-dialog";
import { ReelGallery } from "./reel-gallery";

export function Work() {
  const [active, setActive] = useState<MediaItem | null>(null);
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-heading" data-reveal>
        <h2>
          Good work.
          <br />
          <span>Impossible to ignore.</span>
        </h2>
        <p>A few things we’ve put out into the world.</p>
      </div>
      <ReelGallery />
      <div className="stills-heading">
        <h3>Brand worlds. In stills.</h3>
        <p>Campaigns, products, and a distinct point of view.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className={`project project-${i}`}
            key={project.id}
            data-reveal
          >
            <button
              className="project-image"
              onClick={() =>
                setActive({
                  title: project.title,
                  description: project.description,
                  image: `${project.image}-960`,
                  alt: project.alt,
                })
              }
              aria-label={`View ${project.title} project`}
            >
              <picture>
                <source
                  media="(max-width: 799px)"
                  srcSet={`/media/${project.image}-480.webp`}
                />
                <Image
                  src={`/media/${project.image}-960.webp`}
                  alt={project.alt}
                  width={960}
                  height={i === 0 ? 1280 : 960}
                  sizes="(max-width: 700px) 90vw, 45vw"
                />
              </picture>
              <span className="project-open">
                <ArrowUpRight size={25} />
              </span>
            </button>
            <div className="project-caption">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <span className="project-index" aria-hidden="true">
                0{i + 1}
              </span>
            </div>
          </article>
        ))}
      </div>
      <MediaDialog item={active} onClose={() => setActive(null)} />
    </section>
  );
}
