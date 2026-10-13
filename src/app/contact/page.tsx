import type { Metadata } from "next";
import {
  ArrowUpRight,
  EnvelopeSimple,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ProjectForm } from "@/components/project-form";
import { inquiryContext } from "@/lib/inquiry";
import { site } from "@/lib/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Zavino — let’s talk about your project",
  description:
    "Tell us what you want to build or improve. Send your project details or book an AI audit with Zavino.",
  alternates: { canonical: "/contact" },
};

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const context = inquiryContext(query.focus, query.source);
  return (
    <main id="main" className="contact-page">
      <section className="page-hero contact-hero section-shell">
        <h1>
          Let’s talk about
          <br />
          <span>your project.</span>
        </h1>
        <p>
          Tell us what you want to build or improve. You don’t need to have it
          all figured out.
        </p>
      </section>
      <div className="contact-layout section-shell">
        <section
          aria-label="Send a project brief"
          className="contact-form-panel"
        >
          <ProjectForm
            key={`${context.focus}:${context.source}`}
            initialFocus={context.focus}
            source={context.source}
          />
        </section>
        <aside className="contact-aside">
          <div className="contact-call">
            <h2>
              A conversation
              <br />
              is a good start.
            </h2>
            <p>Prefer to talk it through? Choose a time that works for you.</p>
            <a
              className="button"
              href={site.auditBooking}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.auditLabel} <ArrowUpRight size={20} />
            </a>
            <span className="external-note">
              Opens Cal.com · Choose an available time
            </span>
          </div>
          <div className="contact-direct">
            <h3>A direct line.</h3>
            <a href={`mailto:${site.email}`}>
              <EnvelopeSimple size={21} />
              <span>
                {site.email}
                <small>Send your brief by email</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={22} />
              <span>
                Message on WhatsApp<small>Opens a chat with Zavino</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-next">
            <h3>What happens next</h3>
            <ol>
              <li>
                <span>01</span>
                <p>We read your project details.</p>
              </li>
              <li>
                <span>02</span>
                <p>We get in touch to discuss your idea.</p>
              </li>
              <li>
                <span>03</span>
                <p>Together, we agree on a useful first step.</p>
              </li>
            </ol>
          </div>
          <p className="contact-location">
            Based in Dhaka. Working worldwide.
            <br />
            <span>{site.address}</span>
          </p>
        </aside>
      </div>
    </main>
  );
}
