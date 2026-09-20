"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { services } from "@/lib/site";

export function Capabilities() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    // Touch layouts use the static service list and do not need the animation bundle.
    if (
      !window.matchMedia(
        "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add(
          "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
          () => {
            const element = root.current!;
            element.dataset.pinned = "true";
            const cards = gsap.utils.toArray<HTMLElement>(
              ".capability-card",
              root.current!,
            );
            const activate = (index: number) =>
              cards.forEach((card, i) => {
                card.inert = i !== index;
                card.setAttribute("aria-hidden", String(i !== index));
              });
            activate(0);
            gsap.set(cards.slice(1), { yPercent: 120, rotation: 4 });
            const timeline = gsap.timeline({
              onUpdate() {
                activate(Math.min(3, Math.round(this.progress() * 3)));
              },
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            });
            cards.slice(1).forEach((card, i) => {
              timeline.to(
                cards[i],
                { scale: 0.94, opacity: 0.35, duration: 1 },
                i,
              );
              timeline.to(
                card,
                { yPercent: 0, rotation: 0, duration: 1, ease: "power2.inOut" },
                i,
              );
            });
            return () => {
              delete element.dataset.pinned;
              cards.forEach((card) => {
                card.inert = false;
                card.removeAttribute("aria-hidden");
              });
            };
          },
          root,
        );
        cleanup = () => media.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return (
    <section
      className="capabilities section-shell"
      ref={root}
      aria-labelledby="capabilities-title"
    >
      <div className="capability-intro">
        <span className="eyebrow">A FULL-SERVICE CREATIVE CREW</span>
        <h2 id="capabilities-title">
          One team.
          <br />
          Every
          <br /> <span>possibility.</span>
        </h2>
        <p>
          From the first “what if” to the final launch. Everything your brand
          needs, working together.
        </p>
        <Link className="text-link" href="/services">
          Our expertise <ArrowUpRight size={21} />
        </Link>
      </div>
      <div className="capability-stack">
        {services.map((service, i) => (
          <article className="capability-card" key={service.name}>
            <div className="capability-card-top">
              <span className="mono">0{i + 1} / EXPERTISE</span>
              <ArrowUpRight size={25} />
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="capability-card-bottom">
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Image
                src={`/media/${service.image}.webp`}
                width={170}
                height={190}
                alt=""
                sizes="170px"
              />
            </div>
            <Link
              href={`/services#${service.href}`}
              className="capability-link"
              aria-label={`Explore service: ${service.name}`}
            >
              Explore service <ArrowUpRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
