import type { Metadata } from "next";
import {
  ArrowUpRight,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discuss a project",
  description:
    "Talk to Zavino about AI automation, a SaaS product, or web development. Book a discovery call or send your brief.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main id="main">
      <section className="page-hero contact-hero section-shell">
        <span className="eyebrow">START A CONVERSATION</span>
        <h1>Tell us what needs <span>to work better.</span></h1>
        <p>
          A complex workflow, a new SaaS product, or a web platform: bring us
          the problem and the context. We’ll discuss what a useful first step
          could look like.
        </p>
      </section>
      <div className="contact-main section-shell">
        <section className="contact-options" aria-label="Contact options">
          <a className="contact-option" href={site.auditBooking} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight size={35} weight="light" />
            <ArrowUpRight className="option-arrow" size={28} />
            <h2>Book a discovery call.</h2>
            <p>Walk us through the problem and the systems around it. Opens Cal.com.</p>
          </a>
          <a className="contact-option" href={"mailto:" + site.email + "?subject=Project%20brief%20for%20Zavino"}>
            <ArrowUpRight size={35} weight="light" />
            <ArrowUpRight className="option-arrow" size={28} />
            <h2>Send a project brief.</h2>
            <p>Share the goal, current workflow, and what a successful outcome would change.</p>
          </a>
          <a className="contact-option" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsappLogo size={35} weight="light" />
            <ArrowUpRight className="option-arrow" size={28} />
            <h2>Start on WhatsApp.</h2>
            <p>For a quick first conversation with the Zavino team.</p>
          </a>
        </section>
        <section className="contact-brief-guide" aria-labelledby="brief-guide-title">
          <div>
            <span className="eyebrow">A USEFUL STARTING BRIEF</span>
            <h2 id="brief-guide-title">What should you tell us?</h2>
          </div>
          <ul>
            <li><span>01</span> What your team does today and where work gets stuck.</li>
            <li><span>02</span> Which systems or data sources are involved.</li>
            <li><span>03</span> Who will use the result, and what success would look like.</li>
          </ul>
        </section>
        <section className="contact-details">
          <div>
            <h3>Direct contact</h3>
            <p>
              <a href={"mailto:" + site.email}>{site.email}</a>
              <br />
              <a href={site.phoneLink}><Phone size={15} /> {site.phone}</a>
            </p>
          </div>
          <div>
            <h3>Based in Dhaka</h3>
            <p>{site.name}<br />{site.address}</p>
            <p>Please arrange a meeting before visiting.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
