import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'City Botanical Garden' },
  { label: 'Product', value: 'Companion app for garden visitors' },
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

function BotanicalGardenProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-copy">
            <h1>BOTANICAL GARDEN DIGITAL EXPERIENCE</h1>
            <p>Helping visitors discover, identify, and connect with the plants around them.</p>
          </div>
          <CaseStudyPhoneCollage variant="garden" />
        </div>

        <CaseStudyDetails items={DETAILS} />

        <section className="case-study-section">
          <StickySectionTitle>Planning</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Before starting the design process, we mapped out our workflow as a team, setting clear milestones and internal deadlines. This kept us on track and left enough room for testing, iteration, and final polish.</p>
            <CaseStudyImagePlaceholder label="Weekly deadlines overview" className="case-study-image-banner" />
            <p>Planning our time and setting deadlines early gave us space for feedback, testing, and iteration, so we could refine the experience without rushing the final stretch.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Foundational research</h3>
            <p>We started with foundational research to understand how people currently explore and engage with botanical gardens. We combined desk research, observation, and interviews to build a clearer picture of our target visitors and their needs.</p>
            <p>This helped us uncover common behaviours, motivations, and frustrations that shape how people move through and interact with a garden, giving us a foundation for the rest of the project.</p>
            <p>We looked into existing garden apps, plant identification tools, and other visitor-facing digital experiences to understand what already works well and where there is room to improve.</p>
            <p>We also researched the botanical garden itself, its layout, collections, and the audiences it typically attracts, from casual visitors to plant enthusiasts and families.</p>

            <div className="case-study-image-row">
              <CaseStudyImagePlaceholder label="Competitor analysis" className="case-study-image-wide" />
              <CaseStudyImagePlaceholder label="Relevant articles" className="case-study-image-tall" />
            </div>
            <CaseStudyImagePlaceholder label="Garden layout and visitor flow" className="case-study-image-banner" />

            <h3 id="observations">Observations</h3>
            <p>We visited similar public gardens to observe how visitors moved through the space, where they paused, and how they interacted, or struggled to interact, with existing signage and information points.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to explore visitor habits and expectations in more depth.</p>
            <p>We spoke with 15 people of different ages and backgrounds who visit gardens and green spaces regularly. These conversations helped us understand the small frustrations and delights that shape a garden visit.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3>The Problem</h3>
            <p>Visitors to the botanical garden often struggle to identify plants and access relevant information while walking through the space. Signage is limited, and looking things up online means stepping away from the experience itself.</p>
            <p>This creates a disconnect between curiosity and discovery, and makes it harder for visitors, especially newcomers, to feel engaged with what they are seeing.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research into a more relatable user perspective, we created a persona based on patterns identified across our interviews and observations.</p>
            <p>The persona represents our target visitor and highlights their goals, motivations, and frustrations when exploring the garden. This helped us keep their perspective at the centre of our design decisions.</p>
            <CaseStudyImagePlaceholder label="Garden visitor persona" className="case-study-image-portrait" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of our solution, we defined a set of core values that reflect the spirit of the botanical garden experience.</p>
            <CaseStudyImagePlaceholder label="List of values" className="case-study-image-banner" />

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through our research, we turned the main problems into How Might We questions, helping us look at them from different angles and start thinking about possible solutions.</p>
            <CaseStudyImagePlaceholder label="How Might We questions" className="case-study-image-banner" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>We used the Value Proposition Canvas to connect what we learned from our research with what our solution could offer, focusing on what visitors are trying to do, what gets in their way, and what would make their visit more enjoyable.</p>

            <div className="vpc-canvas">
              <div className="vpc-panel vpc-panel-profile">
                <h4 className="vpc-panel-title">Customer Profile</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Customer Jobs</span>
                  <p>Visitors want to identify the plants they see, learn interesting facts about them, and make the most of their time in the garden without feeling lost.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pains</span>
                  <p>Limited signage makes it hard to identify plants on the spot, and searching online pulls visitors out of the moment and away from the experience.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gains</span>
                  <p>Visitors want a simple way to learn as they go, discover recommended routes, and feel more connected to the garden and its collections.</p>
                </div>
              </div>
              <div className="vpc-panel vpc-panel-map">
                <h4 className="vpc-panel-title">Value Map</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Products and Services</span>
                  <p>We designed a companion app with plant identification, curated routes, and bite-sized information cards visitors can browse as they walk.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pain Relievers</span>
                  <p>Instant plant identification and on-the-spot information reduce the need to search elsewhere, keeping visitors present and engaged.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gain Creators</span>
                  <p>Curated routes and short, engaging facts make each visit feel more personal and give visitors a reason to come back and explore further.</p>
                </div>
              </div>
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different ideas and layouts. This helped us try out different solutions without focusing too much on the details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Sketch 1" />
              <CaseStudyImagePlaceholder label="Sketch 2" />
              <CaseStudyImagePlaceholder label="Sketch 3" />
              <CaseStudyImagePlaceholder label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>We mapped out a user flow to understand how visitors would move through the app, from identifying a plant to exploring a suggested route.</p>
            <p>This helped us spot unnecessary steps and simplify the overall navigation before moving into wireframes.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>We put together a moodboard to explore the look and feel of the experience, gathering colours, typography, and imagery that reflected the calm, natural atmosphere of the garden.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Moodboard 1" />
              <CaseStudyImagePlaceholder label="Moodboard 2" />
              <CaseStudyImagePlaceholder label="Moodboard 3" />
            </div>

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity, we leaned into natural tones and organic shapes to reflect the garden&apos;s atmosphere, pairing an earthy colour palette with a clean, legible typeface.</p>
            <CaseStudyImagePlaceholder label="Style tile" className="case-study-image-banner" />

            <h3 id="lofi-wireframes">Lo-fi wireframes and Usability testing</h3>
            <p>Once we had a clear user flow, we moved on to low-fidelity wireframes to quickly visualise the layout of each screen before focusing on visual identity.</p>
            <div className="case-study-image-grid case-study-image-grid-phones">
              <CaseStudyImagePlaceholder label="Wireframe 1" />
              <CaseStudyImagePlaceholder label="Wireframe 2" />
              <CaseStudyImagePlaceholder label="Wireframe 3" />
              <CaseStudyImagePlaceholder label="Wireframe 4" />
              <CaseStudyImagePlaceholder label="Wireframe 5" />
              <CaseStudyImagePlaceholder label="Wireframe 6" />
            </div>
            <p>After finishing the low-fidelity wireframes, we conducted usability testing to see if visitors could easily identify plants and navigate the app. We ran think-aloud sessions with 6 participants and sorted their feedback into a feedback capture grid.</p>
            <CaseStudyImagePlaceholder label="Feedback capture grid" className="case-study-image-portrait" />

            <h3 id="final-product">Final product</h3>
            <div className="case-study-image-grid case-study-image-grid-phones">
              <CaseStudyImagePlaceholder label="Final product screen 1" />
              <CaseStudyImagePlaceholder label="Final product screen 2" />
              <CaseStudyImagePlaceholder label="Final product screen 3" />
              <CaseStudyImagePlaceholder label="Final product screen 4" />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BotanicalGardenProjectPage
