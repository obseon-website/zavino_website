import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { WorkflowDemo } from "./workflow-demo";

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="hero-kicker">AI AUTOMATION AGENCY <span>·</span> SAAS DEVELOPMENT</p>
        <h1 id="hero-heading">AI automation for the work your business <span>runs on.</span></h1>
        <p className="hero-description">We connect customer and operational data, automate decisions and handoffs, and build the SaaS products that make it all work.</p>
        <div className="hero-actions">
          <Link href="/contact" className="button">Discuss your project <ArrowUpRight size={19} /></Link>
          <a href="#solutions" className="text-link">Explore what we build <ArrowRight size={18} /></a>
        </div>
      </div>
      <div className="hero-system">
        <div className="hero-system-heading"><span>CONNECTED BY DESIGN.</span><span>CONTROLLED BY PEOPLE.</span></div>
        <WorkflowDemo compact />
      </div>
      <nav className="hero-services" aria-label="Core capabilities">
        <span>From the first signal.<br /><strong>To a working system.</strong></span>
        <Link href="/services/ai-automation">AI automation <ArrowUpRight size={18} /></Link>
        <Link href="/services/saas-development">SaaS development <ArrowUpRight size={18} /></Link>
        <Link href="/services/web-development">Web development <ArrowUpRight size={18} /></Link>
      </nav>
    </section>
  );
}
