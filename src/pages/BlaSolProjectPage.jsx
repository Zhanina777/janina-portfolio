import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'BLÅ SOL' },
  { label: 'Product', value: 'Additional features in an established app' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Role', value: 'UX/UI Designer (user research, ideation, wireframing, prototyping, and usability testing)' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

function BlaSolProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-copy">
            <h1>BLÅ SOL FESTIVAL MOBILE APP</h1>
            <p>Helping festival-goers stay connected with their friends throughout the event.</p>
          </div>
          <CaseStudyPhoneCollage />
        </div>

        <CaseStudyDetails items={DETAILS} />

        <section className="case-study-section">
          <h2>Planning</h2>
          <p>Before starting the design process, we organized our workflow as a team by creating a clear timeline with milestones and internal deadlines. This helped us stay on track and leave enough time for testing, iterations, and final refinements.</p>
        </section>
      </section>
      <ContactFooter />
    </>
  )
}

export default BlaSolProjectPage
