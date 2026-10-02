import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'Group project' },
  { label: 'Product', value: 'Web app for learning to make crystals at home' },
  { label: 'Role', value: 'UX/UI Designer' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

const TOC_GROUPS = [
  { phase: '01 discover', items: [
    { label: '01.1 Research & observations', id: 'research' },
  ] },
  { phase: '02 define', items: [
    { label: '02.1 User persona', id: 'persona' },
    { label: '02.2 How might we', id: 'how-might-we' },
  ] },
  { phase: '03 develop', items: [
    { label: '03.1 Sketches', id: 'sketches' },
    { label: '03.2 Style tile', id: 'style-tile' },
    { label: '03.3 Low fidelity wireframes', id: 'lofi-wireframes' },
    { label: '03.4 Final product', id: 'final-product' },
  ] },
  { phase: '04 deliver', items: [
    { label: '04.1 Coded solution', id: 'final-product' },
  ] },
]

function HiddenWorkshopsProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-row">
            <div className="case-study-hero-copy">
              <h1>HOME CRYSTALS</h1>
              <p>A web app concept that guides people through making their own crystals at home.</p>
              <CaseStudyDetails items={DETAILS} className="case-study-details-inline" />
            </div>
            <CaseStudyImagePlaceholder label="Website mockups" className="case-study-hero-placeholder" />
          </div>
        </div>

        <section className="case-study-section">
          <StickySectionTitle>Overview</StickySectionTitle>
          <div className="case-study-section-body">
            <p><strong>Home Crystals</strong> is a web app concept designed to guide people through making their own crystals at home, covering the process, materials, and techniques needed to get started.</p>
            <p>I&apos;m working on this project as part of a team, as <strong>UX/UI Designer</strong>, using the Double Diamond methodology over a 4-week timeline.</p>
            <p>This project is still in progress &mdash; check back soon for the full case study, including research, design process, and final designs.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>The Problem</StickySectionTitle>
          <div className="case-study-section-body">
            <p>People who want to make crystals at home often struggle to find clear, approachable guidance. Information about materials, timing, and techniques is spread across different sources and can feel difficult to follow.</p>
            <p>We wanted to make the process easier to understand by bringing the essential steps together in one calm, practical experience.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>The Solution</StickySectionTitle>
          <div className="case-study-section-body">
            <p>Home Crystals guides users from choosing a project to completing it, with clear instructions, useful preparation details, and a visual experience that makes the process feel accessible.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3 id="research">Research &amp; observations</h3>
            <p>This section will document our research into how people learn creative processes at home, what materials they need, and where existing guidance becomes confusing.</p>
            <CaseStudyImagePlaceholder label="Research and observations" />

            <h3 id="persona">User persona</h3>
            <p>We will use our research findings to define the needs, goals, and frustrations of the people we are designing for.</p>
            <CaseStudyImagePlaceholder label="User persona" className="case-study-image-natural" />

            <h3 id="how-might-we">How Might We</h3>
            <p>These questions will help us turn our research findings into opportunities for a more supportive and approachable learning experience.</p>
            <CaseStudyImagePlaceholder label="How Might We questions" className="case-study-image-banner" />

            <h3 id="sketches">Sketches</h3>
            <p>We will explore different ways to structure the content and guide users through each stage of making crystals at home.</p>
            <div className="case-study-image-grid case-study-image-grid-4">
              <CaseStudyImagePlaceholder label="Sketch 1" />
              <CaseStudyImagePlaceholder label="Sketch 2" />
              <CaseStudyImagePlaceholder label="Sketch 3" />
              <CaseStudyImagePlaceholder label="Sketch 4" />
            </div>

            <h3 id="style-tile">Style tile</h3>
            <p>This section will show the visual direction for the Home Crystals experience, including colour, typography, and interface references.</p>
            <CaseStudyImagePlaceholder label="Style tile" className="case-study-image-banner" />

            <h3 id="lofi-wireframes">Low fidelity wireframes</h3>
            <p>We will test the structure and navigation before refining the visual design.</p>
            <div className="case-study-image-grid case-study-image-grid-phones case-study-image-grid-4">
              <CaseStudyImagePlaceholder label="Wireframe 1" />
              <CaseStudyImagePlaceholder label="Wireframe 2" />
              <CaseStudyImagePlaceholder label="Wireframe 3" />
              <CaseStudyImagePlaceholder label="Wireframe 4" />
            </div>

            <h3 id="final-product">Final product</h3>
            <p>The finished experience and coded solution will be added here when the project is complete.</p>
            <CaseStudyImagePlaceholder label="Final product" className="case-study-image-banner" />
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default HiddenWorkshopsProjectPage
