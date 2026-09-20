import type { Metadata } from "next";
import {
  ArrowUpRight,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Talk to Zavino about your next project. Call +880 1844 293698, message us on WhatsApp, or email info@thezavino.com. Based in Dhaka, Bangladesh.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <main id="main">
      <section className="page-hero section-shell">
        <span className="eyebrow">LET’S MAKE SOMETHING MATTER</span>
        <h1>
          Big plans?
          <br />
          <span>You have our attention.</span>
        </h1>
        <p>
          Tell us where you want to go. We’ll talk about what it takes to get
          there.
        </p>
      </section>
      <div className="contact-main section-shell">
        <section className="contact-options" aria-label="Contact options">
          <a
            className="contact-option"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={35} weight="light" />
            <ArrowUpRight className="option-arrow" size={28} />
            <h2>Start on WhatsApp.</h2>
            <p>
              A quick hello. An idea. A brief.
              <br />
              Let’s get the conversation going.
            </p>
          </a>
          <a className="contact-option" href={site.phoneLink}>
            <Phone size={35} weight="light" />
            <ArrowUpRight className="option-arrow" size={28} />
            <h2>Call the crew.</h2>
            <p>
              {site.phone}
              <br />A direct line to Zavino.
            </p>
          </a>
        </section>
        <section className="contact-details">
          <div>
            <h3>More of an email person?</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <h3>Based in Dhaka.</h3>
            <p>
              {site.name}
              <br />
              {site.address}
            </p>
            <p style={{ fontSize: 14, marginTop: 15 }}>
              Please arrange a meeting before visiting.
            </p>
          </div>
        </section>
        <p className="contact-note">
          A little context goes a long way: tell us about your brand, what you’d
          like to create, and when you need it. We’ll take it from there with a
          tailored proposal.
        </p>
      </div>
    </main>
  );
}
