import feedbackTable from '../assets/Table.png'
import persona1 from '../assets/persona1.png'
import values3 from '../assets/values3.png'
import hmww from '../assets/hmww.png'
import vpc3 from '../assets/vpc3.png'
import crazy8 from '../assets/crazy8.png'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import ss4 from '../assets/ss4.png'
import wlofi1 from '../assets/wlofi1.png'
import wlofi2 from '../assets/wlofi2.png'
import wlofi3 from '../assets/wlofi3.png'
import wlofi4 from '../assets/wlofi4.png'
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
          <div className="case-study-hero-row">
            <div className="case-study-hero-copy">
              <h1>HIDDEN WORKSHOPS</h1>
              <p>Helping people discover local workshops in their hometown and book a class in just a few clicks.</p>
              <CaseStudyDetails items={DETAILS} className="case-study-details-inline" />
            </div>
            <CaseStudyImagePlaceholder label="Website mockups" className="case-study-hero-placeholder" />
          </div>
        </div>

        <section className="case-study-section">
          <StickySectionTitle>Overview</StickySectionTitle>
          <div className="case-study-section-body">
            <p><strong>Hidden Workshops</strong> is a website concept created to promote traditional workshops and local crafts in the Old Town of Dobrich, Bulgaria. The goal was to make the workshops easier to discover while giving visitors a simple way to see what is happening and plan their visit.</p>
            <p>I worked on the project from <strong>research and concept development through to the website design</strong>. I focused on structuring the content, creating the visual direction, and designing the user interface to make the information clear and easy to navigate.</p>
            <p>The final website allows visitors to explore the different workshops, learn about the crafts and people behind them, and check the programme to see when workshops and activities are taking place.</p>
            <p>This project demonstrates my skills in <strong>UX research and planning, content organisation, UI design, and creating clear navigation for information-rich websites</strong>.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>Planning</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Before starting the design process, I mapped out my workflow, setting clear milestones and internal deadlines. This kept me on track and left enough room for testing, iteration, and final polish.</p>
            <CaseStudyImagePlaceholder label="Weekly deadlines overview" className="case-study-image-banner" />
            <p>Planning my time and setting deadlines early gave me space for feedback, testing, and iteration, so I could refine the experience without rushing the final stretch.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Foundational research</h3>
            <p>I started with foundational research to understand how people currently discover and sign up for local workshops and classes. I combined desk research, competitor analysis, and interviews to build a clearer picture of my target users and their habits.</p>
            <p>This helped me uncover common behaviours, motivations, and frustrations that shape how people find and book workshops in their area, giving me a foundation for the rest of the project.</p>
            <p>I looked into existing booking platforms and local event listings to understand what already works well and where there is room to improve.</p>
            <p>I also looked into how small workshop hosts, such as independent artists and craftspeople, currently promote and manage their sessions.</p>

            <div className="case-study-image-row">
              <CaseStudyImagePlaceholder label="Competitor analysis" className="case-study-image-wide" />
              <CaseStudyImagePlaceholder label="Relevant articles" className="case-study-image-tall" />
            </div>
            <CaseStudyImagePlaceholder label="Local workshop landscape overview" className="case-study-image-banner" />

            <h3 id="observations">Observations</h3>
            <p>I browsed existing local listings and social media groups to see how workshops are currently being shared, and how people react to and engage with these posts.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering my initial findings, I developed an interview guide to explore how people discover and decide to join local workshops.</p>
            <p>I spoke with 12 people from my hometown with different levels of interest in crafts, cooking, and creative classes. These conversations helped me understand what makes someone commit to booking a workshop.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3>The Problem</h3>
            <p>People interested in local workshops often don&apos;t know they exist, since information is scattered across social media, flyers, and word of mouth.</p>
            <p>Once they do find a workshop, checking availability and actually booking a spot is often confusing or requires messaging the host directly.</p>
            <p>This creates friction that stops people from discovering and joining workshops they would genuinely enjoy.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn my research into a more relatable user perspective, I created a persona based on patterns identified across my interviews.</p>
            <p>The persona represents my target visitor and highlights their goals, motivations, and frustrations when looking for something new to try in their hometown. This helped me keep their perspective at the centre of my design decisions.</p>
            <CaseStudyImagePlaceholder src={persona1} alt="Workshop seeker persona: Anna Ivanova, The Explorer" label="Workshop seeker persona" className="case-study-image-portrait case-study-image-full" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of my solution, I defined a set of core values that reflect what makes discovering and booking a workshop feel effortless and inviting.</p>
            <CaseStudyImagePlaceholder src={values3} alt="List of values: Authentic, Cozy, Warm, Traditional" label="List of values" className="case-study-image-banner case-study-image-full" />

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through my research, I turned the main problems into How Might We questions, helping me look at them from different angles and start thinking about possible solutions.</p>
            <CaseStudyImagePlaceholder src={hmww} alt="How Might We questions and parts of the solution" label="How Might We questions" className="case-study-image-banner case-study-image-full case-study-image-cap-md" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>I used the Value Proposition Canvas to connect what I learned from my research with what the website could offer, focusing on what visitors are trying to do, what gets in their way, and what would make planning a visit to the Old Town workshops easier.</p>

            <CaseStudyImagePlaceholder src={vpc3} alt="Value Proposition Canvas: customer jobs, pains, gains, products and services, pain relievers, and gain creators" label="Value Proposition Canvas" className="case-study-image-natural case-study-image-cap-md" />

            <h3 id="sketches">Sketches</h3>
            <p>I started with the Crazy 8s technique, sketching eight quick ideas in eight minutes to explore as many directions as possible before narrowing in on what worked best.</p>
            <CaseStudyImagePlaceholder src={crazy8} alt="Crazy 8s ideation sketches" label="Crazy 8s" className="case-study-image-natural" />
            <p>From there, I developed more detailed sketches for the desktop and mobile layouts of both the front page and the workshop sub-pages.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder src={ss1} alt="Frontpage mobile sketch" label="Sketch 1" />
              <CaseStudyImagePlaceholder src={ss2} alt="Front page desktop sketch" label="Sketch 2" />
              <CaseStudyImagePlaceholder src={ss3} alt="Sub-page desktop sketch" label="Sketch 3" />
              <CaseStudyImagePlaceholder src={ss4} alt="Subpage mobile sketch" label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>I mapped out a user flow to understand how someone would go from browsing workshops to booking a spot, and how hosts would manage their listings.</p>
            <p>This helped me spot unnecessary steps and simplify the booking process before moving into wireframes.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>I put together a moodboard to explore the look and feel of the platform, gathering colours, typography, and imagery that felt warm, local, and inviting.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Moodboard 1" />
              <CaseStudyImagePlaceholder label="Moodboard 2" />
              <CaseStudyImagePlaceholder label="Moodboard 3" />
            </div>

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity, I chose a warm, approachable colour palette and friendly typography to reflect the community feel of discovering local workshops.</p>
            <CaseStudyImagePlaceholder label="Style tile" className="case-study-image-banner" />

            <h3 id="lofi-wireframes">Lo-fi wireframes and Usability testing</h3>
            <p>Once I had a clear user flow, I moved on to low-fidelity wireframes to quickly visualise the layout of each page before focusing on visual identity.</p>
            <div className="case-study-image-grid case-study-image-grid-phones case-study-image-grid-4">
              <CaseStudyImagePlaceholder src={wlofi1} alt="Lo-fi wireframe: workshops list" label="Layout 1" />
              <CaseStudyImagePlaceholder src={wlofi2} alt="Lo-fi wireframe: workshop description" label="Layout 2" />
              <CaseStudyImagePlaceholder src={wlofi3} alt="Lo-fi wireframe: workshop detail and sign up" label="Layout 3" />
              <CaseStudyImagePlaceholder src={wlofi4} alt="Lo-fi wireframe: navigation menu" label="Layout 4" />
            </div>
            <p>After finishing the low-fidelity wireframes, I conducted usability testing to see if people could easily find and book a workshop. I ran think-aloud sessions with 6 participants and sorted their feedback into a feedback capture grid.</p>
            <CaseStudyImagePlaceholder src={feedbackTable} alt="Feedback capture grid from usability testing" label="Feedback capture grid" className="case-study-image-banner case-study-image-full" />

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
