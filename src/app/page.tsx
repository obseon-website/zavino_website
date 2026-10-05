import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Database, GitBranch, Lightning, SketchLogo, Stack, TreeStructure } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { ContactCta } from "@/components/footer";
import { WorkflowDemo } from "@/components/workflow-demo";
import { ProductDemo } from "@/components/product-demo";
import { projects } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };
const delivery = [
  {title:"Map the real work",text:"Find the bottleneck, the systems involved and the people who own the decisions.",artifact:"Workflow map + success criteria",Icon:TreeStructure},
  {title:"Make it tangible",text:"Test the critical journey with a scoped prototype before committing to the build.",artifact:"Prototype + delivery scope",Icon:SketchLogo},
  {title:"Build it together",text:"Connect the systems, engineer the product and test the moments that matter.",artifact:"Working system + review gates",Icon:GitBranch},
  {title:"Launch with clarity",text:"Plan rollout, ownership and measurement, then improve what the real work reveals.",artifact:"Handoff + measurement plan",Icon:Check},
];
export default function Home(){return <main id="main">
  <Hero/>
  <section className="connected-problem section-shell" aria-labelledby="problem-heading">
    <div className="problem-statement" data-reveal><span className="eyebrow">THE SPACE BETWEEN YOUR SYSTEMS</span><h2 id="problem-heading">Good tools.<br/>Disconnected work.<br/><span>Let’s close the gap.</span></h2></div>
    <div className="problem-map"><div className="problem-sources"><span>CRM</span><span>Commerce</span><span>Support</span><span>Operations</span></div><div className="problem-path" aria-hidden="true"><span/><span/><span/><span/></div><div className="problem-result"><TreeStructure size={26}/><strong>One connected workflow</strong><ArrowRight size={21}/></div><p>The handoff nobody owns. The context lost between tools. The decision waiting in a spreadsheet.</p><p>We design the connections that turn those gaps into a system your team can use.</p></div>
  </section>
  <section className="capabilities section-shell" id="solutions" aria-labelledby="capabilities-heading">
    <div className="section-heading"><span className="eyebrow">WHAT WE BUILD</span><h2 id="capabilities-heading">Built for the way<br/><span>your business works.</span></h2></div>
    <div className="capability-list">
      <Link className="capability-row capability-ai" href="/services/ai-automation"><span className="capability-number">01</span><div className="capability-title"><h3>AI automation</h3><span>INTELLIGENCE, PUT TO WORK.</span></div><div className="capability-body"><p>Connect scattered data to useful decisions and actions, with people in control.</p><div className="capability-mini-flow"><Database size={18}/><span/><Lightning size={18}/><span/><Check size={18}/></div><span className="capability-scope">Integrations / AI agents / Human review</span></div><ArrowUpRight className="capability-arrow" size={30}/></Link>
      <Link className="capability-row capability-saas" href="/services/saas-development"><span className="capability-number">02</span><div className="capability-title"><h3>SaaS<br/>development</h3><span>FROM IDEA TO EVERYDAY USE.</span></div><div className="capability-body"><p>Turn a product idea or early prototype into software people can depend on.</p><div className="capability-mini-product" aria-hidden="true"><Stack size={26}/><span><i/><i/><i/></span></div><span className="capability-scope">Product design / Engineering / Launch</span></div><ArrowUpRight className="capability-arrow" size={30}/></Link>
      <Link className="capability-row capability-web" href="/services/web-development"><span className="capability-number">03</span><div className="capability-title"><h3>Web<br/>development</h3><span>A STRONGER DIGITAL FOUNDATION.</span></div><div className="capability-body"><p>Sites, stores, portals and custom platforms. Thoughtfully designed. Built to perform.</p><span className="capability-scope">Websites / Ecommerce / Web applications</span></div><ArrowUpRight className="capability-arrow" size={30}/></Link>
    </div>
  </section>
  <section className="workflow-section section-shell" id="workflow" aria-labelledby="workflow-heading">
    <div className="workflow-section-heading"><span className="eyebrow">SEE HOW THE WORK CONNECTS</span><h2 id="workflow-heading">Intelligence is useful.<br/><span>Control is essential.</span></h2><p>Follow a signal from the first event to the next action. Inspect each stage, change the scenario, and decide what gets approved.</p></div>
    <WorkflowDemo/>
    <div className="workflow-principles"><span><Check size={16}/> Permissioned data</span><span><Check size={16}/> Explicit approval</span><span><Check size={16}/> Recoverable failures</span><span><Check size={16}/> Measurable outcomes</span></div>
  </section>
  <section className="product-section section-shell" aria-labelledby="product-heading">
    <div className="product-section-copy"><span className="eyebrow">BEYOND THE PROTOTYPE</span><h2 id="product-heading">A product is more than<br/><span>its first screen.</span></h2><p>It’s the permissions, the handoffs and the moments when something needs attention. We design those parts, too.</p><div className="product-section-points"><span>Clear roles and access</span><span>Useful customer journeys</span><span>Operations that can recover</span></div><Link href="/services/saas-development" className="text-link">Explore SaaS development <ArrowUpRight size={19}/></Link></div>
    <ProductDemo/>
  </section>
  <section className="delivery-section section-shell" aria-labelledby="delivery-heading"><div className="section-heading"><h2 id="delivery-heading">From a complex problem.<br/><span>To a clear way forward.</span></h2><p>A practical path, with something concrete to review at every stage.</p></div><div className="delivery-steps">{delivery.map(({title,text,artifact,Icon})=><article key={title}><span className="delivery-icon"><Icon size={25} weight="light"/></span><h3>{title}</h3><p>{text}</p><span className="delivery-artifact">{artifact}</span></article>)}</div></section>
  <section className="creative-section section-shell" id="work" aria-labelledby="creative-heading"><div className="creative-heading"><div><span className="eyebrow">A WIDER CREATIVE PRACTICE</span><h2 id="creative-heading">Systems with substance.<br/><span>Work with character.</span></h2><p>Our creative practice brings the same care to brand, content and campaigns. Here’s a glimpse of that work.</p></div><Link className="text-link" href="/work">Explore our work <ArrowUpRight size={19}/></Link></div><div className="creative-grid">{projects.slice(0,2).map((project)=><Link href="/work#creative-archive" className="creative-project" key={project.id}><div className="creative-image"><Image src={`/media/${project.image}-960.webp`} alt={project.alt} width={960} height={960} sizes="(max-width: 700px) 90vw, 55vw"/><span className="creative-open" aria-hidden="true"><ArrowUpRight size={24}/></span></div><div className="creative-caption"><h3>{project.title}</h3><span>{project.category}</span></div></Link>)}</div><div className="creative-footnote"><p>Selected creative work. AI and SaaS demonstrations on this site are labeled Zavino concepts.</p><Link href="/services#more-capabilities" className="text-link">AI creative, brand, content & growth <ArrowUpRight size={16}/></Link></div></section>
  <ContactCta/>
</main>;}
