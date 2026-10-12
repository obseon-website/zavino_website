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
  title: "Discuss your project",
  description:
    "Tell Zavino about the workflow, SaaS product, or web platform you want to build. Send a short project brief or book a 30-minute call.",
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
          Tell us what needs
          <br />
          <span>to work better.</span>
        </h1>
        <p>
          A workflow with too many handoffs. A SaaS product ready for its next
          chapter. A web platform that needs to do more. Start with the problem
          and the people around it.
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
            <p>
              Bring the goal, the current workflow, and the questions you’re
              still figuring out.
            </p>
            <a
              className="button"
              href={site.auditBooking}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-minute call <ArrowUpRight size={20} />
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
                <p>
                  We review the problem, the systems, and the outcome you have
                  in mind.
                </p>
              </li>
              <li>
                <span>02</span>
                <p>We discuss fit and the questions that need answering.</p>
              </li>
              <li>
                <span>03</span>
                <p>
                  Together, we define a useful first step and a scope for the
                  work.
                </p>
              </li>
            </ol>
          </div>
          <p className="contact-location">
            Based in Dhaka, working across connected systems.
            <br />
            <span>{site.address}</span>
          </p>
        </aside>
      </div>
    </main>
  );
}
