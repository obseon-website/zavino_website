import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Brand } from "./brand";
import { policyLinks, site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="contact-cta section-shell">
      <div className="cta-top">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <span className="cta-wing" aria-hidden="true">
          ↗
        </span>
      </div>
      <h2>
        Ready for
        <br />
        what’s <span>next?</span>
      </h2>
      <div className="cta-bottom">
        <p>
          A new idea. A bigger ambition.
          <br />
          Let’s give it a place to take off.
        </p>
        <div className="button-group">
          <a
            className="button button-light"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s talk <WhatsappLogo size={22} />
          </a>
          <a className="text-link" href={site.phoneLink}>
            Call the crew <Phone size={19} />
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
            Independent thinking.
            <br />
            One connected creative crew.
          </p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link href="/#work">Our work</Link>
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
        <span>Made to take flight.</span>
      </div>
    </footer>
  );
}
