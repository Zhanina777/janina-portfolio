import planningImage from '../assets/planning.png'
import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import ContactFooter from '../components/ContactFooter'

const DETAILS = [
  { label: 'Client', value: 'BLÅ SOL' },
  { label: 'Product', value: 'Additional features in an established app' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Role', value: 'UX/UI Designer (user research, ideation, wireframing, prototyping, and usability testing)' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

const TOC_GROUPS = [
  { phase: '01 discover', items: ['01.1 Research', '01.2 Observations', '01.3 Interviews'] },
  { phase: '02 define', items: ['02.1 user persona', '02.2 values', '02.3 how might we', '02.4 value proposition canvas'] },
  { phase: '03 develop', items: ['03.1 sketches', '03.2 user flow', '03.3 moodboard', '03.4 style tile', '03.5 low fidelity wireframes and testing', '03.6 final product'] },
  { phase: '04 deliver', items: ['04.1 coded solution'] },
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
          <div className="case-study-section-body">
            <p>Before starting the design process, we organized our workflow as a team by creating a clear timeline with milestones and internal deadlines. This helped us stay on track and leave enough time for testing, iterations, and final refinements.</p>
            <img className="case-study-planning-image" src={planningImage} alt="Weekly deadlines overview for the BLÅ SOL project" />
            <p>Planning our time and setting deadlines from the beginning gave us enough space for feedback, testing, and iterations. This helped us avoid rushing towards the final deadline and allowed us to refine our work throughout the process.</p>
          </div>
        </section>

        <div className="case-study-process">
          <CaseStudyToc groups={TOC_GROUPS} />
          <div className="case-study-content">
            <h3>Foundational research</h3>
            <p>We started with foundational research to understand how people experience festivals before defining the problem. Since BLÅ SOL was taking place after our project deadline, we could not study the festival directly. Instead, we combined desk research, netnography, observations, and interviews to get a better understanding of our target users and their environment.</p>
            <p>This helped us identify common behaviours, needs, and challenges that festival-goers experience when attending festivals with friends, giving us a foundation for the next stages of the project.</p>
            <p>We began by researching music festivals, existing festival apps, and digital solutions already available. This helped us understand how festivals currently support their visitors, which features are commonly used, and where there might be opportunities for improvement.</p>
            <p>We also looked into BLÅ SOL itself, including its target audience, identity, communication, and overall concept. This gave us a better understanding of what we were designing for and how our solution could fit into its existing identity.</p>
            <p>Alongside this, we explored content and discussions shared by festival-goers on social media. Looking at comments, posts, and user-generated content gave us insight into people&apos;s expectations, frustrations, and behaviours when attending festivals.</p>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BlaSolProjectPage
