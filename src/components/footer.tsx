import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "./brand";
import { policyLinks, site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="contact-cta section-shell" aria-labelledby="contact-cta-title">
      <div className="cta-top">
        <span className="eyebrow">LET’S FIND THE RIGHT SYSTEM</span>
        <span className="cta-wing" aria-hidden="true">
          ↗
        </span>
      </div>
      <h2 id="contact-cta-title">
        Bring us the
        <br />
        <span>complex problem.</span>
      </h2>
      <div className="cta-bottom">
        <p>
          Tell us about the workflow, product, or web platform you need to build.
          <br />
          We’ll discuss the scope and a sensible place to start.
        </p>
        <div className="button-group">
          <Link className="button button-light" href="/contact">
            Discuss your project <ArrowUpRight size={21} />
          </Link>
          <a className="text-link" href={site.auditBooking} target="_blank" rel="noopener noreferrer">
            Book a discovery call <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <div>
          <Brand />
          <p>
            AI automation, SaaS, and web development.
            <br />
            Built around what your business needs to do.
          </p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/#work">Selected work</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-links">
          <span className="footer-label">Find us</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneLink}>{site.phone}</a>
          <p>{site.address}</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Follow along</span>
          {site.socials.map((s) => (
            <a
              href={s.url}
              key={s.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        zavino<span>.</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Zavino</span>
        <nav aria-label="Legal">
          {policyLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <span>Systems that move business forward.</span>
      </div>
    </footer>
  );
}
