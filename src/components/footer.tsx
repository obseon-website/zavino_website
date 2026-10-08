import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FooterSignature } from "./footer-signature";
import { policyLinks, site } from "@/lib/site";

export function ContactCta({ focus }: { focus?: string }) {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="section-shell contact-cta-inner">
        <h2 id="contact-cta-title">
          What could
          <br />
          <span>work better?</span>
        </h2>
        <div className="contact-cta-copy">
          <p>
            Bring the idea, the question, or the thing that takes too much time.
            We’ll find a useful place to start.
          </p>
          <div className="button-group">
            <Link
              className="button"
              href={
                focus
                  ? `/contact?focus=${encodeURIComponent(focus)}`
                  : "/contact"
              }
            >
              Discuss your project <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <a
              className="text-link"
              href={site.auditBooking}
              target="_blank"
              rel="noopener noreferrer"
            >
              Or book a 30-minute call{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <FooterSignature />
      <div className="section-shell footer-information">
        <div className="footer-top">
          <nav className="footer-links" aria-label="Footer services">
            <span className="footer-label">What we do</span>
            <Link href="/services/ai-automation">AI automation</Link>
            <Link href="/services/saas-development">SaaS development</Link>
            <Link href="/services/web-development">Web development</Link>
            <Link href="/services#more-capabilities">Creative & more</Link>
          </nav>
          <nav className="footer-links" aria-label="Footer navigation">
            <span className="footer-label">Zavino</span>
            <Link href="/work">Our work</Link>
            <Link href="/about">The studio</Link>
            <Link href="/zavino-owned-products">Our products</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-links footer-contact">
            <span className="footer-label">A direct line</span>
            <a href={`mailto:${site.email}`}>
              {site.email} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p>{site.address}</p>
            <div className="footer-socials">
              {site.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Zavino</span>
          <nav aria-label="Legal">
            {policyLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="#main" className="back-top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
