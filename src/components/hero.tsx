import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="ai-hero section-shell" aria-labelledby="hero-heading">
      <div className="ai-hero-copy">
        <span className="eyebrow ai-hero-kicker">ZAVINO / AI AUTOMATION AGENCY</span>
        <h1 id="hero-heading">
          AI automation for the work that <em>moves your business.</em>
        </h1>
        <p>
          We design and build connected AI systems and SaaS products for complex,
          cross-team operations. Turn scattered customer data into useful
          decisions, timely offers, and smoother work.
        </p>
        <div className="ai-hero-actions">
          <Link className="button" href="/contact">
            Discuss your project <ArrowUpRight size={19} />
          </Link>
          <a className="text-link" href="#solutions">
            Explore what we build <ArrowDownRight size={20} />
          </a>
        </div>
        <div className="ai-hero-footnote">
          <span>01 / CONNECT THE DATA</span>
          <span>02 / DESIGN THE DECISION</span>
          <span>03 / PUT IT TO WORK</span>
        </div>
      </div>
      <div className="system-visual" aria-label="Illustrative customer data to offer workflow">
        <div className="system-visual-header">
          <span>ILLUSTRATIVE WORKFLOW</span>
          <span className="system-status"><i /> SYSTEM MAP / 01</span>
        </div>
        <div className="system-visual-body">
          <div className="system-source">
            <span className="system-tag">INPUT / CUSTOMER CONTEXT</span>
            <div className="system-source-grid">
              <span>CRM profile</span>
              <span>Purchase history</span>
              <span>Service events</span>
            </div>
          </div>
          <div className="system-connector" aria-hidden="true"><span /></div>
          <div className="system-engine">
            <div className="system-engine-top">
              <span className="system-tag">DECISION LAYER</span>
              <span className="system-engine-icon" aria-hidden="true">✳</span>
            </div>
            <strong>Understand the signal.<br />Choose the next action.</strong>
            <div className="system-engine-steps">
              <span>Segment</span><span>Rules + AI</span><span>Human review</span>
            </div>
          </div>
          <div className="system-connector" aria-hidden="true"><span /></div>
          <div className="system-output">
            <span className="system-tag">OUTPUT / ACTIVATION</span>
            <div>
              <span>Relevant customer offer</span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </div>
            <small>Email · CRM · sales team</small>
          </div>
        </div>
        <div className="system-visual-footer">
          <span>CONNECTED SYSTEMS, MEASURABLE ACTION</span>
          <span>↘</span>
        </div>
      </div>
    </section>
  );
}
