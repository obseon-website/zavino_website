import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Capabilities } from "@/components/capabilities";
import { ContactCta } from "@/components/footer";
import { ClientStrip } from "@/components/clients";

export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ClientStrip />
      <section className="manifesto section-shell" data-reveal>
        <span className="manifesto-symbol" aria-hidden="true">
          ↗
        </span>
        <div>
          <h2>
            Ambitious brands need
            <br /> more than a good idea.
            <br /> <span>They need the right crew.</span>
          </h2>
          <div className="manifesto-bottom">
            <p>
              We’re Zavino. An independent creative and marketing agency
              bringing strategy, production, and performance under one roof.
              Based in Dhaka. Thinking bigger.
            </p>
            <Link href="/about" className="text-link">
              Meet Zavino <ArrowUpRight size={21} />
            </Link>
          </div>
        </div>
      </section>
      <Work />
      <Capabilities />
      <section className="approach section-shell">
        <div className="approach-heading" data-reveal>
          <h2>
            Big vision.
            <br />
            <span>Clear flight plan.</span>
          </h2>
          <p>
            Great work comes from a shared direction.
            <br />
            Here’s how we find it together.
          </p>
        </div>
        <div className="approach-steps">
          {[
            [
              "01",
              "Find the direction.",
              "We listen first. Your brand, your audience, your ambition. Then we ask the questions that get us somewhere new.",
            ],
            [
              "02",
              "Make it matter.",
              "Strategy becomes a story. A visual world. A campaign. Every detail made to work as part of the bigger picture.",
            ],
            [
              "03",
              "Put it into the world.",
              "We launch with care, learn from the response, and keep refining. Because the best work keeps moving forward.",
            ],
          ].map(([n, title, desc]) => (
            <article key={n} data-reveal>
              <span className="step-number">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowUpRight className="step-arrow" size={32} />
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
