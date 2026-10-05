import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "./brand";
import { policyLinks, site } from "@/lib/site";

export function ContactCta({focus}: {focus?: string}) {
  return <section className="contact-cta section-shell" aria-labelledby="contact-cta-title">
    <div className="cta-top"><span className="eyebrow">A BETTER WAY TO WORK STARTS HERE</span><ArrowUpRight className="cta-arrow" size={68} weight="thin" aria-hidden="true"/></div>
    <h2 id="contact-cta-title">Let’s make<br/><span>work flow.</span></h2>
    <div className="cta-bottom"><p>Tell us which workflow or product is holding you back.<br/>We’ll find a useful place to start.</p><div className="button-group"><Link className="button" href={focus?`/contact?focus=${encodeURIComponent(focus)}`:"/contact"}>Discuss your project <ArrowUpRight size={19}/></Link><a className="text-link" href={site.auditBooking} target="_blank" rel="noopener noreferrer">Book a 30-minute call <ArrowUpRight size={17}/></a></div></div>
  </section>;
}
export function Footer() {
  return <footer className="site-footer section-shell">
    <div className="footer-top"><div className="footer-brand"><Brand/><p>Connected systems.<br/>Considered design.<br/>Where vision takes flight.</p></div><nav className="footer-links" aria-label="Footer services"><span className="footer-label">What we build</span><Link href="/services/ai-automation">AI automation</Link><Link href="/services/saas-development">SaaS development</Link><Link href="/services/web-development">Web development</Link><Link href="/services#more-capabilities">More capabilities <ArrowUpRight size={13}/></Link></nav><nav className="footer-links" aria-label="Footer navigation"><span className="footer-label">The studio</span><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><div className="footer-links footer-contact"><span className="footer-label">Start a conversation</span><a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={14}/></a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp <ArrowUpRight size={14}/></a><p>{site.address}</p><div className="footer-socials">{site.socials.map(item=><a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>)}</div></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Zavino</span><nav aria-label="Legal">{policyLinks.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><a href="#main" className="back-top">Back to top ↑</a></div>
  </footer>;
}
