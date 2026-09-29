import CaseStudyDetails from '../components/CaseStudyDetails'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'Personal project' },
  { label: 'Product', value: 'Web app for learning to make crystals at home' },
  { label: 'Role', value: 'UX/UI Designer' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
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
            <p>I&apos;m working on this project solo, as <strong>UX/UI Designer</strong>, using the Double Diamond methodology over a 4-week timeline.</p>
            <p>This project is still in progress &mdash; check back soon for the full case study, including research, design process, and final designs.</p>
          </div>
        </section>
      </section>
      <ContactFooter />
    </>
  )
}

export default HiddenWorkshopsProjectPage
