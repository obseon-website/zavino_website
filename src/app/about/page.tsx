import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import { homeProcess } from "@/lib/home";

export const metadata: Metadata = {
  title: "About Zavino — a team for your next idea",
  description:
    "Meet the Dhaka-based team building AI systems and SaaS products. We connect design and engineering to help businesses turn ideas into useful tools.",
  alternates: { canonical: "/about" },
};

const principles = [
  [
    "Understand first.",
    "We learn how your team works before deciding what to build.",
  ],
  ["Keep it clear.", "Simple tools, clear decisions, and people in control."],
  ["Build together.", "You see working progress and help shape the next step."],
];

export default function AboutPage() {
  return (
    <main id="main" className="sp-page sp-about-page">
      <section className="sp-about-hero section-shell">
        <h1>
          A team for
          <br />
          <span>your next idea.</span>
        </h1>
        <div className="sp-about-hero-bottom">
          <p>
            We’re Zavino, a team in Dhaka building AI systems and SaaS products
            for businesses worldwide.
          </p>
          <Link href="/services" className="text-link">
            See what we do
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <figure className="sp-about-image section-shell">
        <Image
          src="/media/workday-bridge.webp"
          alt="A ribbon connecting three blocks in a sunlit studio."
          width={1600}
          height={900}
          sizes="(max-width: 1480px) 90vw, 1320px"
        />
        <figcaption>Design, engineering, and AI. Working together.</figcaption>
      </figure>
      <section className="sp-about-statement section-shell">
        <div>
          <h2>
            Useful technology.
            <br />
            <span>One connected team.</span>
          </h2>
        </div>
        <div>
          <p>
            We help businesses follow up with leads, reduce routine work, and
            create content. We also turn product ideas into software people can
            use.
          </p>
          <p>
            From the first plan to launch and support, our designers and
            developers work with you as one team.
          </p>
          <Link href="/labs" className="text-link">
            Try the products we’ve built
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="sp-about-principles section-shell">
        <div className="sp-about-principles-heading">
          <h2>How we work.</h2>
        </div>
        <div className="sp-principle-list">
          {principles.map(([title, body]) => (
            <article key={title}>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sp-about-engagement section-shell">
        <div>
          <h2>
            From a conversation
            <br />
            <span>to something useful.</span>
          </h2>
        </div>
        <ol>
          {homeProcess.map((stage, index) => (
            <li key={stage.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <ContactCta />
    </main>
  );
}
