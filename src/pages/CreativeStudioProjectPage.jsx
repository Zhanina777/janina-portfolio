import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'Independent creative studio' },
  { label: 'Product', value: 'Brand identity and digital direction' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

const TOC_GROUPS = [
  { phase: '01 discover', items: [
    { label: '01.1 Research', id: 'research' },
    { label: '01.2 Observations', id: 'observations' },
    { label: '01.3 Interviews', id: 'interviews' },
  ] },
  { phase: '02 define', items: [
    { label: '02.1 user persona', id: 'persona' },
    { label: '02.2 values', id: 'values' },
    { label: '02.3 how might we', id: 'how-might-we' },
    { label: '02.4 value proposition canvas', id: 'value-proposition-canvas' },
  ] },
  { phase: '03 develop', items: [
    { label: '03.1 sketches', id: 'sketches' },
    { label: '03.2 user flow', id: 'user-flow' },
    { label: '03.3 moodboard', id: 'moodboard' },
    { label: '03.4 style tile', id: 'style-tile' },
    { label: '03.5 low fidelity wireframes and testing', id: 'lofi-wireframes' },
    { label: '03.6 final product', id: 'final-product' },
  ] },
  { phase: '04 deliver', items: [
    { label: '04.1 coded solution', id: 'final-product' },
  ] },
]

function CreativeStudioProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-copy">
            <h1>CREATIVE STUDIO BRAND IDENTITY</h1>
            <p>Building a bold, cohesive visual identity for a studio built around big ideas and human connection.</p>
          </div>
          <CaseStudyImagePlaceholder label="Brand identity mockups" className="case-study-hero-placeholder" />
        </div>

        <CaseStudyDetails items={DETAILS} />

        <section className="case-study-section">
          <StickySectionTitle>Planning</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Before starting the design process, we mapped out our workflow as a team, setting clear milestones and internal deadlines. This kept us on track and left enough room for testing, iteration, and final polish.</p>
            <CaseStudyImagePlaceholder label="Weekly deadlines overview" className="case-study-image-banner" />
            <p>Planning our time and setting deadlines early gave us space for feedback, testing, and iteration, so we could refine the identity without rushing the final stretch.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Foundational research</h3>
            <p>We started with foundational research to understand how creative studios position themselves and communicate their identity. We combined desk research, competitor analysis, and interviews to build a clearer picture of the studio&apos;s audience and voice.</p>
            <p>This helped us identify what makes a studio&apos;s identity feel authentic and memorable, giving us a foundation for the direction of the brand.</p>
            <p>We looked into other creative studios and agencies, their visual identities, tone of voice, and how they present their work to potential clients.</p>
            <p>We also spoke with the studio&apos;s founders to understand their values, working style, and the kind of clients and projects they want to attract.</p>

            <div className="case-study-image-row">
              <CaseStudyImagePlaceholder label="Competitor analysis" className="case-study-image-wide" />
              <CaseStudyImagePlaceholder label="Relevant references" className="case-study-image-tall" />
            </div>
            <CaseStudyImagePlaceholder label="Brand values and positioning" className="case-study-image-banner" />

            <h3 id="observations">Observations</h3>
            <p>We reviewed a range of creative studio websites and portfolios to see how they used colour, type, and imagery to express personality, and where identities tended to blend together.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to explore how the studio wanted to be perceived and how their current clients experienced their brand.</p>
            <p>We spoke with the founders and a handful of past clients to understand the gap between how the studio saw itself and how it came across to others.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3>The Problem</h3>
            <p>The studio&apos;s current identity feels generic and doesn&apos;t reflect the boldness and personality behind their work. Potential clients struggle to tell them apart from similar studios.</p>
            <p>This makes it harder to stand out and attract the kind of ambitious projects the studio wants to work on.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research into a more relatable perspective, we created a persona representing the studio&apos;s ideal client.</p>
            <p>The persona highlights their goals, expectations, and what would make them trust a studio with their brand. This helped us keep their perspective at the centre of our design decisions.</p>
            <CaseStudyImagePlaceholder label="Ideal client persona" className="case-study-image-portrait" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of the identity, we defined a set of core values that reflect the studio&apos;s personality and way of working.</p>
            <CaseStudyImagePlaceholder label="List of values" className="case-study-image-banner" />

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through our research, we turned the main problems into How Might We questions to help us think about the identity from different angles.</p>
            <CaseStudyImagePlaceholder label="How Might We questions" className="case-study-image-banner" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>We used the Value Proposition Canvas to connect what we learned from our research with what the new identity could offer, focusing on what the studio needs to communicate and what would help them stand out.</p>

            <div className="vpc-canvas">
              <div className="vpc-panel vpc-panel-profile">
                <h4 className="vpc-panel-title">Customer Profile</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Customer Jobs</span>
                  <p>The studio wants to attract ambitious clients, communicate their personality clearly, and stand out in a crowded creative market.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pains</span>
                  <p>Their current identity feels generic, doesn&apos;t reflect their tone of voice, and makes it hard for potential clients to remember them.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gains</span>
                  <p>They want an identity that feels bold and distinct, and that clients immediately associate with confident, high-quality creative work.</p>
                </div>
              </div>
              <div className="vpc-panel vpc-panel-map">
                <h4 className="vpc-panel-title">Value Map</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Products and Services</span>
                  <p>We designed a flexible visual identity system with a bold logo, a distinct colour palette, and guidelines for applying it across digital and print.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pain Relievers</span>
                  <p>A more distinct, consistent identity makes the studio easier to recognise and remember, reducing the risk of blending in with competitors.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gain Creators</span>
                  <p>A bold, flexible system lets the studio confidently show up across different formats while staying instantly recognisable.</p>
                </div>
              </div>
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different logo and layout ideas. This helped us try out different directions without focusing too much on the details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Sketch 1" />
              <CaseStudyImagePlaceholder label="Sketch 2" />
              <CaseStudyImagePlaceholder label="Sketch 3" />
              <CaseStudyImagePlaceholder label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>We mapped out how the new identity would flow across key touchpoints, from the website to social media and printed materials, to ensure a consistent experience wherever a client encounters the brand.</p>
            <p>This helped us spot inconsistencies early and plan how each element of the identity should adapt across different formats.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>We put together a moodboard to explore the look and feel of the identity, gathering colours, typography, and imagery that reflected the studio&apos;s bold, confident personality.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Moodboard 1" />
              <CaseStudyImagePlaceholder label="Moodboard 2" />
              <CaseStudyImagePlaceholder label="Moodboard 3" />
            </div>

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity, we built a bold colour palette and expressive typography that reflects the studio&apos;s confident personality, paired with flexible layout patterns for their portfolio and social presence.</p>
            <CaseStudyImagePlaceholder label="Style tile" className="case-study-image-banner" />

            <h3 id="lofi-wireframes">Lo-fi wireframes and Usability testing</h3>
            <p>Once we had a clear direction for the identity, we moved on to low-fidelity layouts to quickly explore how it could translate onto the studio&apos;s website before focusing on final visual details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Layout 1" />
              <CaseStudyImagePlaceholder label="Layout 2" />
              <CaseStudyImagePlaceholder label="Layout 3" />
              <CaseStudyImagePlaceholder label="Layout 4" />
              <CaseStudyImagePlaceholder label="Layout 5" />
              <CaseStudyImagePlaceholder label="Layout 6" />
            </div>
            <p>After finishing the low-fidelity layouts, we tested them with a small group of people to see if the identity felt cohesive and easy to navigate across formats. We sorted their feedback into a feedback capture grid.</p>
            <CaseStudyImagePlaceholder label="Feedback capture grid" className="case-study-image-portrait" />

            <h3 id="final-product">Final product</h3>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Final identity application 1" />
              <CaseStudyImagePlaceholder label="Final identity application 2" />
              <CaseStudyImagePlaceholder label="Final identity application 3" />
              <CaseStudyImagePlaceholder label="Final identity application 4" />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default CreativeStudioProjectPage
