import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { CaseStudyCard, FinalCta, SectionHeading } from "@/components/shared/site-components";
import { Reveal } from "@/components/shared/reveal";
import { HeroActivity } from "@/components/home/hero-activity";
import { CapabilityRailProgress } from "@/components/home/capability-rail-progress";

const capabilities = [
  ["Logistics workflow automation", "Automate the handoffs, checks, and follow-up work that keep shipments moving.", ["RFQ", "Rules", "Validation", "Action", "Record"]],
  ["Document & data automation", "Turn documents and incoming data into reliable operational records without repeated entry.", ["Documents", "Data", "Extraction", "Validation"]],
  ["TMS, ERP & CRM integrations", "Connect the systems your team already relies on so information moves with the operation.", ["TMS", "ERP", "CRM", "Carrier"]],
  ["Custom logistics software", "Build the focused workflows your operation needs when off-the-shelf systems leave gaps.", ["Shipment", "Team", "Rules", "Visibility"]],
];

const complexity = ["Scheduling", "Assignments", "Permissions", "Validation", "Capacity", "Pricing", "Financial reconciliation", "Reporting", "Integrations", "Offline workflows", "Notifications", "Document generation"];

export function HomePage() {
  return <>
    <section className="home-hero container">
      <div className="home-hero-copy">
        <p className="eyebrow"><span className="status-dot" />Logistics, freight &amp; transportation software</p>
        <h1>Software built around <em>how your logistics operation works.</em></h1>
        <p>We build custom software, workflow automation, and integrations for logistics, freight, and transportation companies — connecting the manual work between your people, documents, customers, and existing systems.</p>
        <div className="cta-group"><Link className="button-primary" href="/contact">Start a project <ArrowUpRight /></Link><Link className="button-secondary" href="/customers">See our work</Link></div>
      </div>
      <OperationalSystemVisual />
    </section>

    <section className="problem-section container section">
      <Reveal className="problem-rail"><p className="eyebrow">The operational gap</p></Reveal>
      <Reveal className="problem-main">
        <h2>Your logistics operation already has software. The manual work is often between the systems.</h2>
        <div className="problem-lower">
          <div className="problem-content">
            <p>Most logistics companies already use a TMS, ERP, CRM, accounting software, email, spreadsheets, and customer or carrier tools.</p>
            <p>The problem is rarely that nothing exists. It is that people still copy information, check documents, update customers, reconcile records, and move data from one system to another.</p>
            <strong>Keep the systems that work. Automate the work between them.</strong>
          </div>
          <FragmentedToConnected />
        </div>
      </Reveal>
    </section>

    <section className="section container">
      <SectionHeading eyebrow="What we build" title="Software for the work between systems."><p>We build custom tools, integrations, and automation for logistics and transportation operations that need people, documents, workflows, and existing systems to work together.</p></SectionHeading>
      <Reveal className="capability-grid" id="capability-rail" tabIndex={0} aria-label="What we build capabilities; swipe or scroll horizontally on mobile">{capabilities.map(([title, body, nodes], index) => <article className="capability" key={title}><span>0{index + 1}</span><div className="capability-visual"><CapabilityDiagram title={title} nodes={nodes} /></div><div className="capability-copy"><h3>{title}</h3><p>{body}</p></div></article>)}</Reveal>
      <CapabilityRailProgress />
      <Link className="text-link section-link" href="/services">Explore our services <ArrowRight /></Link>
    </section>

    <section className="featured-work section"><div className="container"><SectionHeading eyebrow="Customer work" title="Built for real transportation and field operations."><p>Our work starts with the reality of how an operation runs day to day — including the exceptions, dependencies, and coordination work that generic software often misses.</p></SectionHeading><div className="case-grid">{caseStudies.map((study) => <CaseStudyCard study={study} key={study.slug} />)}</div><Link className="text-link section-link" href="/customers">View all customers <ArrowRight /></Link></div></section>

    <section className="complexity-section section container">
      <SectionHeading eyebrow="Built for complexity" title="Simple to use. Built for complexity underneath." />
      <Reveal className="complexity-copy"><p>Real businesses are full of dependencies, exceptions, permissions, calculations, and edge cases.</p><p>Good operational software should hide unnecessary complexity from the people using it without ignoring the complexity the business actually depends on.</p><p>We design the interface and the underlying system together, so the software can stay clear while the business logic remains precise.</p></Reveal>
      <OperationMap />
    </section>

    <section className="section container how-we-work"><SectionHeading eyebrow="How we work" title="Understand the operation. Then build the system."><p>Custom software succeeds when the business is understood before the solution is decided.</p></SectionHeading><Reveal className="process-grid">{[["Understand", "We learn how the operation works today: the people involved, information they use, rules they follow, exceptions they handle, and problems slowing them down."], ["Design", "We turn workflows into a clear system: what should happen, who should do it, what information is needed, and how the parts connect."], ["Build", "We implement the product around the real operation, including the business rules and edge cases generic software often cannot represent."], ["Evolve", "Once software becomes part of daily operations, the business continues to change. We can maintain and evolve the system as requirements appear."]].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</Reveal></section>

    <section className="technology section container"><SectionHeading eyebrow="Engineering" title="Modern software, chosen for the problem."><p>We use modern web technologies and proven engineering tools, choosing the architecture around the needs of the product rather than forcing every project into the same stack.</p></SectionHeading><ArchitectureVisual /><strong>The technology is important. The business outcome is the point.</strong></section>
    <FinalCta title="Your operation is already connected by people. We help connect it with software." body="If your team spends too much time moving information between systems, checking documents, updating customers, or working around software that does not fit, let’s talk about where automation could help." />
  </>;
}

function OperationalSystemVisual() {
  return <Reveal className="hero-operation" amount={0.1} aria-label="Fragmented operational information resolved into one structured request">
    <div className="hero-sources" aria-label="Fragmented sources">
      <div className="source-card source-card--sheet">
        <header>Spreadsheet <span>#024</span></header>
        <div className="source-grid"><small>Customer</small><small>Status</small><strong>M. Parker</strong><em>Pending</em></div>
        <p>Requested<br /><b className="hero-source-highlight">Tomorrow</b></p>
      </div>
      <div className="source-card source-card--message">
        <header>Message <span>#024</span></header>
        <p>Can we move the booking<br />to <b className="hero-message-highlight">tomorrow at 08:30?</b></p>
      </div>
      <div className="source-card source-card--note">
        <header>Manual note <span>#024</span></header>
        <p>Call driver<br />Check payment</p>
      </div>
    </div>
    <div className="operation-result" aria-label="Structured operation">
      <div className="operation-record">
        <header>REQUEST #024 <span className="record-updated">Updated</span></header>
        <div className="record-row"><small>Customer</small><strong>M. Parker</strong></div>
        <div className="record-row record-row--active"><small>Requested change</small><strong className="record-change-highlight">Tomorrow · 08:30</strong></div>
        <div className="record-divider" />
        <div className="record-row"><small>Assignment</small><strong>Team 2</strong><em>Ready</em></div>
        <div className="record-row"><small>Payment</small><strong>Verified</strong><em aria-hidden="true" /></div>
        <div className="record-row"><small>Driver</small><strong>D. Williams</strong><em>Assigned</em></div>
        <footer><i /> Status updated</footer>
      </div>
      <HeroActivity />
    </div>
    <div className="hero-mobile-operation" aria-hidden="true">
      <div className="hero-mobile-fragments">
        <div><header>Spreadsheet <span>#024</span></header><p>M. Parker<br /><em>Pending</em></p></div>
        <div><header>Message <span>#024</span></header><p>Move booking<br />to 08:30?</p></div>
        <div><header>Note <span>#024</span></header><p>Call driver<br />Check payment</p></div>
      </div>
      <div className="hero-mobile-cue"><i /> <i /> <b /></div>
      <div className="hero-mobile-request">
        <header>REQUEST #024 <span>Updated</span></header>
        <p>M. Parker</p>
        <p>Tomorrow · 08:30</p>
        <footer><span>Team 2 · Ready</span><span>Payment verified</span></footer>
      </div>
    </div>
  </Reveal>;
}
function FragmentedToConnected() {
  return <>
    <div className="duplicate-record duplicate-record--desktop"><div className="duplicate-windows"><div><header>Spreadsheet</header><strong>ORDER 184</strong><p>Thursday<br />09:00<br /><em>Pending</em></p></div><div><header>Message</header><p>Order 184 changed<br />to <strong>10:30</strong></p></div><div><header>Notes</header><strong>ORDER 184</strong><p><em>09:00 ?</em><br />confirm time</p></div></div><p className="duplicate-warning">3 sources · 2 different times</p><div className="clean-record"><header>ORDER 184 <b>Confirmed</b></header><p>Thursday · 10:30</p></div></div>
    <div className="problem-mobile-visual" aria-hidden="true">
      <div className="problem-mobile-fragments"><div><header><span className="fragment-full">Spreadsheet</span><span className="fragment-short">Sheet</span></header><p>Thu · 09:00<br /><em>Pending</em></p></div><div><header>Message</header><p>Changed to<br /><strong>10:30</strong></p></div><div><header>Notes</header><p><em>09:00?</em><br />confirm</p></div></div>
      <p className="problem-mobile-warning">3 sources · 2 different times</p>
      <div className="problem-mobile-result"><header>ORDER 184 <b>Confirmed</b></header><p>Thursday · 10:30</p></div>
    </div>
  </>;
}
function CapabilityDiagram({ title }) {
  const type = title.startsWith("Logistics") ? "operations" : title.startsWith("Document") ? "automation" : title.startsWith("Custom") ? "perspectives" : "integrations";
  return <>
    <div className={`mobile-capability-demo mobile-capability-demo--${type}`} aria-hidden="true">
      {type === "operations" && <><header>TODAY</header><div><time>08:30</time><span>Delivery</span><b>Assigned</b></div><div className="is-active"><time>09:10</time><span>Installation</span><b>Team 2</b></div><div><time>10:45</time><span>Pickup</span><b>Assigned</b></div></>}
      {type === "automation" && <><header>NEW REQUEST <b>Automatic</b></header><p className="mobile-request-summary">Standard request <strong>1,250</strong></p><ul><li>Customer verified</li><li>Limit verified</li><li>Required data complete</li></ul><footer>Ready for approval</footer></>}
      {type === "perspectives" && <><div className="mobile-perspective-card"><header>Customer view</header><p>Pickup <strong>Tomorrow · 09:00</strong></p><b>Confirmed</b></div><div className="mobile-perspective-card"><header>REQUEST #024</header><p>Pickup <strong>Tomorrow · 09:00</strong></p><b>Assigned to Team 2</b></div></>}
      {type === "integrations" && <><div className="mobile-source-tags"><span>Email</span><span>Payment</span><span>Existing ERP</span></div><div className="mobile-event-log"><header>Custom system</header><p><time>09:21</time> Payment received</p><p><time>09:22</time> Record updated</p><p><time>09:22</time> Confirmation sent</p></div></>}
    </div>
    {type === "operations" && <div className="micro-demo assignment-demo"><header>TODAY</header><p><time>08:30</time> Delivery <b>Assigned</b></p><p className="is-highlighted"><time>09:10</time> Installation <button>Assign to Team 2</button></p><p><time>10:45</time> Pickup <b>Assigned</b></p></div>}
    {type === "automation" && <div className="micro-demo automation-demo"><header>NEW REQUEST <b>Automatic</b></header><p className="request-summary">Standard request <span>·</span> 1,250</p><div className="automation-checks"><p><i />Customer verified <span>Done</span></p><p><i />Limit verified <span>Done</span></p><p><i />Required data complete <span>Done</span></p></div><footer>Ready for approval</footer></div>}
    {type === "perspectives" && <div className="micro-demo perspective-demo"><div className="mobile-view"><header>Your request</header><p>Pickup<br /><strong>Tomorrow · 09:00</strong></p><b>Confirmed</b></div><i /><div className="team-view"><header>REQUEST #024</header><p>Pickup <strong>Tomorrow · 09:00</strong></p><p>Customer confirmed</p><b>Assigned to Team 2</b></div></div>}
    {type === "integrations" && <div className="micro-demo integration-demo"><div className="external-tags"><span>Email</span><span>Payment</span><span>Existing ERP</span></div><div className="event-list"><header>Custom system</header><p>09:21 <span>Payment received</span></p><p>09:22 <span>Record updated</span></p><p>09:22 <span>Confirmation sent</span></p></div></div>}
  </>;
}
function OperationMap() { return <Reveal className="assignment-check"><div className="assign-action"><header>ASSIGN</header><p>Vehicle <span>Bus 12</span></p><p>Driver <span>D. Williams</span></p><button>Assign</button></div><div className="validation-stack"><p>✓ Driver available</p><p>✓ Vehicle available</p><p>✓ Capacity valid</p><p>✓ No schedule conflict</p></div><footer><i /> Assignment created</footer></Reveal>; }
function ArchitectureVisual() { return <Reveal className="architecture-visual"><div><strong>Interfaces</strong><span>Customer · Employee · Operations</span></div><div><strong>Application</strong><span>Product logic · APIs</span></div><div><strong>Business rules</strong><span>Workflows · Validation</span></div><div><strong>Data &amp; integrations</strong><span>Database · External services</span></div><aside>{["TypeScript", "React", "Next.js", "Python", "PostgreSQL"].map((item) => <span key={item}>{item}</span>)}</aside></Reveal>; }
