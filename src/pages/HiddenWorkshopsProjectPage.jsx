import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'Personal project' },
  { label: 'Product', value: 'Website for discovering and booking local workshops' },
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

function HiddenWorkshopsProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-copy">
            <h1>HIDDEN WORKSHOPS</h1>
            <p>Helping people discover local workshops in their hometown and book a class in just a few clicks.</p>
          </div>
          <CaseStudyImagePlaceholder label="Website mockups" className="case-study-hero-placeholder" />
        </div>

        <CaseStudyDetails items={DETAILS} />

        <section className="case-study-section">
          <StickySectionTitle>Planning</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Before starting the design process, we mapped out our workflow, setting clear milestones and internal deadlines. This kept us on track and left enough room for testing, iteration, and final polish.</p>
            <CaseStudyImagePlaceholder label="Weekly deadlines overview" className="case-study-image-banner" />
            <p>Planning our time and setting deadlines early gave us space for feedback, testing, and iteration, so we could refine the experience without rushing the final stretch.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Foundational research</h3>
            <p>We started with foundational research to understand how people currently discover and sign up for local workshops and classes. We combined desk research, competitor analysis, and interviews to build a clearer picture of our target users and their habits.</p>
            <p>This helped us uncover common behaviours, motivations, and frustrations that shape how people find and book workshops in their area, giving us a foundation for the rest of the project.</p>
            <p>We looked into existing booking platforms and local event listings to understand what already works well and where there is room to improve.</p>
            <p>We also looked into how small workshop hosts, such as independent artists and craftspeople, currently promote and manage their sessions.</p>

            <div className="case-study-image-row">
              <CaseStudyImagePlaceholder label="Competitor analysis" className="case-study-image-wide" />
              <CaseStudyImagePlaceholder label="Relevant articles" className="case-study-image-tall" />
            </div>
            <CaseStudyImagePlaceholder label="Local workshop landscape overview" className="case-study-image-banner" />

            <h3 id="observations">Observations</h3>
            <p>We browsed existing local listings and social media groups to see how workshops are currently being shared, and how people react to and engage with these posts.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to explore how people discover and decide to join local workshops.</p>
            <p>We spoke with 12 people from our hometown with different levels of interest in crafts, cooking, and creative classes. These conversations helped us understand what makes someone commit to booking a workshop.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3>The Problem</h3>
            <p>People interested in local workshops often don&apos;t know they exist, since information is scattered across social media, flyers, and word of mouth.</p>
            <p>Once they do find a workshop, checking availability and actually booking a spot is often confusing or requires messaging the host directly.</p>
            <p>This creates friction that stops people from discovering and joining workshops they would genuinely enjoy.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research into a more relatable user perspective, we created a persona based on patterns identified across our interviews.</p>
            <p>The persona represents our target visitor and highlights their goals, motivations, and frustrations when looking for something new to try in their hometown. This helped us keep their perspective at the centre of our design decisions.</p>
            <CaseStudyImagePlaceholder label="Workshop seeker persona" className="case-study-image-portrait" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of our solution, we defined a set of core values that reflect what makes discovering and booking a workshop feel effortless and inviting.</p>
            <CaseStudyImagePlaceholder label="List of values" className="case-study-image-banner" />

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through our research, we turned the main problems into How Might We questions, helping us look at them from different angles and start thinking about possible solutions.</p>
            <CaseStudyImagePlaceholder label="How Might We questions" className="case-study-image-banner" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>We used the Value Proposition Canvas to connect what we learned from our research with what our platform could offer, focusing on what people are trying to do, what gets in their way, and what would make booking a workshop easier.</p>

            <div className="vpc-canvas">
              <div className="vpc-panel vpc-panel-profile">
                <h4 className="vpc-panel-title">Customer Profile</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Customer Jobs</span>
                  <p>People want to discover workshops happening near them, see when they&apos;re on, and book a spot without back-and-forth messaging.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pains</span>
                  <p>Workshop listings are scattered across different platforms, availability isn&apos;t always clear, and booking often means waiting on a reply from the host.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gains</span>
                  <p>People want a simple way to browse upcoming workshops, see real availability, and confirm a spot instantly.</p>
                </div>
              </div>
              <div className="vpc-panel vpc-panel-map">
                <h4 className="vpc-panel-title">Value Map</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Products and Services</span>
                  <p>We designed a website where local hosts can list their workshops with schedules, and visitors can browse, filter, and book a class directly.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pain Relievers</span>
                  <p>A single place to browse local workshops with live availability removes the need to search multiple sources or wait on replies.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gain Creators</span>
                  <p>Instant booking and clear schedules make it easy to try something new on a whim, and give hosts a simple way to fill their classes.</p>
                </div>
              </div>
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different layouts for browsing and booking workshops, without focusing too much on detail early on.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Sketch 1" />
              <CaseStudyImagePlaceholder label="Sketch 2" />
              <CaseStudyImagePlaceholder label="Sketch 3" />
              <CaseStudyImagePlaceholder label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>We mapped out a user flow to understand how someone would go from browsing workshops to booking a spot, and how hosts would manage their listings.</p>
            <p>This helped us spot unnecessary steps and simplify the booking process before moving into wireframes.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>We put together a moodboard to explore the look and feel of the platform, gathering colours, typography, and imagery that felt warm, local, and inviting.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Moodboard 1" />
              <CaseStudyImagePlaceholder label="Moodboard 2" />
              <CaseStudyImagePlaceholder label="Moodboard 3" />
            </div>

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity, we chose a warm, approachable colour palette and friendly typography to reflect the community feel of discovering local workshops.</p>
            <CaseStudyImagePlaceholder label="Style tile" className="case-study-image-banner" />

            <h3 id="lofi-wireframes">Lo-fi wireframes and Usability testing</h3>
            <p>Once we had a clear user flow, we moved on to low-fidelity wireframes to quickly visualise the layout of each page before focusing on visual identity.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Layout 1" />
              <CaseStudyImagePlaceholder label="Layout 2" />
              <CaseStudyImagePlaceholder label="Layout 3" />
              <CaseStudyImagePlaceholder label="Layout 4" />
              <CaseStudyImagePlaceholder label="Layout 5" />
              <CaseStudyImagePlaceholder label="Layout 6" />
            </div>
            <p>After finishing the low-fidelity wireframes, we conducted usability testing to see if people could easily find and book a workshop. We ran think-aloud sessions with 6 participants and sorted their feedback into a feedback capture grid.</p>
            <CaseStudyImagePlaceholder label="Feedback capture grid" className="case-study-image-portrait" />

            <h3 id="final-product">Final product</h3>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Final website screen 1" />
              <CaseStudyImagePlaceholder label="Final website screen 2" />
              <CaseStudyImagePlaceholder label="Final website screen 3" />
              <CaseStudyImagePlaceholder label="Final website screen 4" />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default HiddenWorkshopsProjectPage
