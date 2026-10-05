import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/footer";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Zavino owned products — ventures we build and run",
  description:
    "Aston Mark and the smaller ventures Zavino owns end to end: designed, built, sold, and powered by the same team behind our client work.",
  alternates: { canonical: "/zavino-owned-products" },
};

const astonFacts = [
  ["What it is", "A digital product studio brand for creators: a men's pose and outfit guide e-book sold with Lightroom presets, CapCut LUTs, fonts, and wallpapers as one bundle."],
  ["Who it is for", "Photographers, students, freelancers, and creators in Bangladesh and beyond who want to look confident on camera and edit like a professional — mostly on a phone."],
  ["What we own", "The idea, the product, the brand, the storefront, the delivery automation, and the campaigns. No client handoff, no waiting on approvals."],
  ["Why it exists", "It keeps us honest. When we sell our own product, we live the same checkout, delivery, and support problems we solve for clients."],
];

const ventures = [
  ["Digital product studios", "Guides, preset packs, template sets, and asset bundles — designed, packaged, and sold as one clean offer."],
  ["Niche storefronts", "Small shops built around a single audience, with payments and instant delivery running without anyone watching them."],
  ["Content & media brands", "Channels and libraries where the pipeline from idea to publish is automated end to end."],
  ["Internal tools", "The quiet software that runs our own operations — built first, then offered to clients who need the same thing."],
];

export default function ZavinoOwnedProductsPage() {
  return (
    <main id="main" className="sp-page sp-owned-page">
      <section className="sp-about-hero sp-owned-hero section-shell">
        <div className="sp-hero-top"><span className="eyebrow">ZAVINO / OWNED PRODUCTS</span><span className="sp-folio">VENTURES WE RUN OURSELVES</span></div>
        <h1>We don’t just<br />build it. <span>We own it.</span></h1>
        <div className="sp-about-hero-bottom">
          <p>Besides client work, Zavino owns and powers a growing set of smaller ventures — products we designed, built, sell, and operate ourselves.</p>
          <a className="text-link" href="https://astonmarkbd.com/" target="_blank" rel="noopener noreferrer">Visit Aston Mark <ArrowUpRight size={19} /></a>
        </div>
      </section>

      <section className="sp-about-statement sp-owned-statement section-shell">
        <div>
          <span className="eyebrow">WHY WE OWN PRODUCTS</span>
          <h2>The same craft.<br /><span>Our own skin in the game.</span></h2>
        </div>
        <div>
          <p>Owning a product means every decision — the offer, the checkout, the delivery, the follow-up — is ours to make and ours to answer for.</p>
          <p>That changes how we work. We test payment flows on our own money, automate our own delivery before we automate yours, and feel every abandoned cart ourselves.</p>
          <p>So when we build for a client, we are not guessing. We are repeating a path we have already walked with our own ventures on the line.</p>
        </div>
      </section>

      <section className="sp-owned-feature section-shell">
        <div className="sp-section-heading">
          <span className="eyebrow">FEATURED VENTURE / 01</span>
          <div>
            <h2>Aston Mark</h2>
            <p>A creator toolkit for people who freeze in front of a camera — a pose and outfit guide, professional Lightroom presets, CapCut LUTs, fonts, and wallpapers, sold as one instant-download bundle in Bangladesh and beyond.</p>
          </div>
        </div>
        <div className="sp-owned-feature-grid">
          <div className="sp-owned-panel" aria-hidden="true">
            <span className="sp-art-label">ASTONMARKBD.COM / LIVE</span>
            <div className="sp-owned-panel-body">
              <span className="sp-owned-panel-mark">A</span>
              <strong>Men’s Posebook</strong>
              <em>450+ poses · 80+ presets · 100+ LUTs</em>
            </div>
            <span className="sp-owned-panel-foot">Instant download · Mobile-first · EN / বাংলা</span>
          </div>
          <dl className="sp-owned-facts">
            {astonFacts.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sp-owned-actions">
          <a className="button" href="https://astonmarkbd.com/" target="_blank" rel="noopener noreferrer">See Aston Mark live <ArrowUpRight size={19} /></a>
          <p>One of several. The rest are in build, in test, or quietly running.</p>
        </div>
      </section>

      <section className="sp-owned-ventures section-shell">
        <div className="sp-section-heading">
          <span className="eyebrow">THE PATTERN</span>
          <div>
            <h2>A lot of smaller<br /><span>ventures like this.</span></h2>
            <p>Aston Mark is the one we can show. Behind it sits a portfolio of smaller properties we own and power — each one small enough to move fast, and each one built on the same stack we sell to clients.</p>
          </div>
        </div>
        <div className="sp-owned-venture-grid">
          {ventures.map(([title, body], index) => (
            <article key={title}>
              <span className="sp-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sp-about-engagement sp-owned-offer section-shell">
        <div>
          <span className="eyebrow">WHAT THIS MEANS FOR YOU</span>
          <h2>We build it<br />like <span>it’s ours.</span></h2>
          <p>Because for our own ventures, it is. The same team that ships Zavino’s products ships yours.</p>
        </div>
        <ol>
          <li><span>01</span><div><h3>We run the whole path</h3><p>Product, storefront, payments, delivery, and marketing — owned in-house, not stitched together from vendors.</p></div></li>
          <li><span>02</span><div><h3>We ship on our own money</h3><p>Our ventures fund our learning. Clients get the benefits without paying for the experiments.</p></div></li>
          <li><span>03</span><div><h3>We stay after launch</h3><p>An owned product is never “handed off.” We maintain, measure, and improve it — and we treat yours the same way.</p></div></li>
        </ol>
      </section>

      <section className="sp-work-next section-shell">
        <span className="eyebrow">NEXT</span>
        <h2>Have a venture<br />of your own?</h2>
        <Link href="/contact" className="text-link">Start a conversation <ArrowRight size={18} /></Link>
      </section>

      <ContactCta />
    </main>
  );
}
