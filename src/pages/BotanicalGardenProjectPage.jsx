import garden1 from '../assets/garden1.png'
import garden2 from '../assets/garden2.png'
import garden3 from '../assets/garden3.png'
import garden4 from '../assets/garden4.png'
import gardenPersona from '../assets/gardenpersona.png'
import sc1 from '../assets/sc1.png'
import sc2 from '../assets/sc2.png'
import sc3 from '../assets/sc3.png'
import sc4 from '../assets/sc4.png'
import styleTile from '../assets/tile.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import lofi1 from '../assets/11.png'
import lofi2 from '../assets/12.png'
import lofi3 from '../assets/13.png'
import lofi4 from '../assets/14.png'
import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'City Botanical Garden' },
  { label: 'Product', value: 'Companion app for garden visitors' },
  { label: 'Role', value: 'UX Designer & Content Creator' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

const TOC_GROUPS = [
  { phase: '01 discover', items: [
    { label: '01.1 Research & Observations', id: 'research' },
  ] },
  { phase: '02 define', items: [
    { label: '02.1 user persona', id: 'persona' },
  ] },
  { phase: '03 develop', items: [
    { label: '03.1 storytelling', id: 'storytelling' },
    { label: '03.2 sketches', id: 'sketches' },
    { label: '03.3 style tile', id: 'style-tile' },
    { label: '03.4 low fidelity wireframes', id: 'lofi-wireframes' },
    { label: '03.5 final product', id: 'final-product' },
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
          <div className="case-study-hero-row">
            <div className="case-study-hero-copy">
              <h1>BOTANICAL GARDEN DIGITAL EXPERIENCE</h1>
              <p>Helping visitors discover, identify, and connect with the plants around them.</p>
              <CaseStudyDetails items={DETAILS} className="case-study-details-inline" />
            </div>
            <CaseStudyPhoneCollage images={[garden1, garden2, garden3]} layout="row" />
          </div>
        </div>

        <section className="case-study-section">
          <StickySectionTitle>Overview</StickySectionTitle>
          <div className="case-study-section-body">
            <p>A companion app for the Botanical Garden, designed to make exploring the garden more interactive and engaging for children. The app combines the physical environment with digital activities, allowing children to discover plants, learn about different climate zones, and complete interactive games as they move through the garden. QR codes placed around the garden connect the physical plants to the digital experience, turning exploration into a playful learning journey.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>The Problem</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Many young students on field trips to the botanical garden quickly lose interest, which negatively impacts their engagement and learning. Walking around, looking at plants, and reading signs does not always keep their attention.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>The Solution</StickySectionTitle>
          <div className="case-study-section-body">
            <p>But how do we solve that problem, and how can we make sure that children actually learn something while looking at the plants?</p>
            <p>We designed an interactive mini-game experience that increases student engagement and curiosity during botanical garden visits. By combining exploration with gameplay, we make the botanical garden experience more engaging, educational, and memorable for children.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Research &amp; Observations</h3>
            <p>To understand the existing visitor experience, we conducted research and observations at the Botanical Garden. We explored how information is currently presented and how visitors can access it throughout the garden.</p>

            <p>During our visit, we observed:</p>
            <ul className="case-study-list">
              <li>Plant identification signs were placed next to some plants, but not consistently throughout the garden.</li>
              <li>Some plants had QR codes linking to individual information pages with the plant&apos;s name and description.</li>
              <li>The QR-code pages were mainly text-based, with limited visual or interactive content.</li>
              <li>Staff and volunteers were available to assist visitors and provide information.</li>
              <li>A printed brochure with a map was available at the entrance to support navigation.</li>
              <li>An informational table near the entrance introduced visitors to different types of flowers and plants.</li>
              <li>The Botanical Garden&apos;s website provides broader information about plants in addition to information about the garden itself.</li>
            </ul>

            <p>Some plants had small identification signs, while others included QR codes leading to additional plant information. The QR-code experience was mainly text-based, with limited interaction.</p>
            <p>We saw potential in the QR codes as a bridge between the physical garden and a digital experience, so we adopted this existing element in our concept. Instead of using QR codes only to provide information, we incorporated them into our interactive games, allowing children to scan plants around the garden and turn exploration into a more engaging learning experience.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder src={img1} alt="Plant identification sign with a QR code" label="QR code sign" />
              <CaseStudyImagePlaceholder src={img2} alt="Plant sign for the olive tree with a QR code" label="Olive plant sign" />
              <CaseStudyImagePlaceholder src={img3} alt="Plant sign for Jerusalem sage with a QR code" label="Jerusalem sage sign" />
            </div>

            <h3 id="persona">Persona</h3>
            <p>To turn our research into a more relatable user perspective, we created a persona based on patterns identified across our interviews and observations.</p>
            <p>The persona represents our target visitor and highlights their goals, motivations, and frustrations when exploring the garden. This helped us keep their perspective at the centre of our design decisions.</p>
            <CaseStudyImagePlaceholder src={gardenPersona} alt="Garden visitor persona: Victor, 13 years old" label="Garden visitor persona" className="case-study-image-natural" />

            <h3 id="storytelling">Storytelling</h3>
            <p>To make the experience more engaging for children, we explored how storytelling and visual direction could work together to bring the mini-game to life.</p>
            <div className="storytelling-columns">
              <div>
                <h4 className="storytelling-col-title">Story</h4>
                <div className="storytelling-note"><p>Add a storyline by giving kids a mission to complete. A character tells the storyline and asks for their help.</p></div>
                <div className="storytelling-note"><p>Complete the mission through 5&ndash;6 tasks, like scanning QR codes and finding specific places or plants.</p></div>
              </div>
              <div>
                <h4 className="storytelling-col-title">Layout</h4>
                <div className="storytelling-note"><p>Use green and the colours the botanical garden&apos;s own site already has, with plenty of white space and green details.</p></div>
                <div className="storytelling-note"><p>Keep the design simple so it stays coherent with the garden&apos;s existing site and clearly feels part of the same brand.</p></div>
              </div>
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different ideas and layouts. This helped us try out different solutions without focusing too much on the details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder src={sc1} label="Sketch 1" />
              <CaseStudyImagePlaceholder src={sc2} label="Sketch 2" />
              <CaseStudyImagePlaceholder src={sc3} label="Sketch 3" />
              <CaseStudyImagePlaceholder src={sc4} label="Sketch 4" />
            </div>

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity, we leaned into natural tones and organic shapes to reflect the garden&apos;s atmosphere, pairing an earthy colour palette with a clean, legible typeface.</p>
            <CaseStudyImagePlaceholder src={styleTile} alt="Botanical Garden style tile: colours, typography, and reference screenshot" label="Style tile" className="case-study-image-natural case-study-image-cap-md" />

            <h3 id="lofi-wireframes">Lo-fi wireframes</h3>
            <p>We moved on to low-fidelity wireframes to quickly visualise the layout of each screen before focusing on visual identity.</p>
            <div className="case-study-image-grid case-study-image-grid-phones">
              <CaseStudyImagePlaceholder src={lofi1} alt="Lo-fi wireframe 1" label="Wireframe 1" className="case-study-image-top" />
              <CaseStudyImagePlaceholder src={lofi2} alt="Lo-fi wireframe 2" label="Wireframe 2" className="case-study-image-top" />
              <CaseStudyImagePlaceholder src={lofi3} alt="Lo-fi wireframe 3" label="Wireframe 3" className="case-study-image-top" />
              <CaseStudyImagePlaceholder src={lofi4} alt="Lo-fi wireframe 4" label="Wireframe 4" className="case-study-image-top" />
            </div>

            <h3 id="final-product">Final product</h3>
            <div className="case-study-image-grid case-study-image-grid-phones">
              <CaseStudyImagePlaceholder src={garden1} alt="Final product screen 1" label="Final product screen 1" />
              <CaseStudyImagePlaceholder src={garden2} alt="Final product screen 2" label="Final product screen 2" />
              <CaseStudyImagePlaceholder src={garden4} alt="Final product screen 3" label="Final product screen 3" />
            </div>
            <div className="case-study-cta">
              <a className="button" href="https://www.figma.com/proto/G8eaYyjBBwMxW0DtSVNo0b/landingpage--Copy-?node-id=31-114&viewport=571%2C504%2C0.04&t=NESoZ42k1RaRZL3i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A2248&show-proto-sidebar=1&page-id=31%3A113" target="_blank" rel="noopener noreferrer">See Figma prototype</a>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BotanicalGardenProjectPage
