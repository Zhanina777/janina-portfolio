import planningImage from '../assets/plan.png'
import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
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
  { phase: '01 discover', items: [
    { label: '01.1 Research', id: 'research' },
    { label: '01.2 Observations', id: 'observations' },
    { label: '01.3 Interviews', id: 'interviews' },
  ] },
  { phase: '02 define', items: [
    { label: '02.1 user persona', id: 'persona' },
    { label: '02.2 values', id: 'values' },
    { label: '02.3 how might we', id: null },
    { label: '02.4 value proposition canvas', id: null },
  ] },
  { phase: '03 develop', items: [
    { label: '03.1 sketches', id: null },
    { label: '03.2 user flow', id: null },
    { label: '03.3 moodboard', id: null },
    { label: '03.4 style tile', id: null },
    { label: '03.5 low fidelity wireframes and testing', id: null },
    { label: '03.6 final product', id: null },
  ] },
  { phase: '04 deliver', items: [
    { label: '04.1 coded solution', id: null },
  ] },
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
            <h3 id="research">Foundational research</h3>
            <p>We started with foundational research to understand how people experience festivals before defining the problem. Since BLÅ SOL was taking place after our project deadline, we could not study the festival directly. Instead, we combined desk research, netnography, observations, and interviews to get a better understanding of our target users and their environment.</p>
            <p>This helped us identify common behaviours, needs, and challenges that festival-goers experience when attending festivals with friends, giving us a foundation for the next stages of the project.</p>
            <p>We began by researching music festivals, existing festival apps, and digital solutions already available. This helped us understand how festivals currently support their visitors, which features are commonly used, and where there might be opportunities for improvement.</p>
            <p>We also looked into BLÅ SOL itself, including its target audience, identity, communication, and overall concept. This gave us a better understanding of what we were designing for and how our solution could fit into its existing identity.</p>
            <p>Alongside this, we explored content and discussions shared by festival-goers on social media. Looking at comments, posts, and user-generated content gave us insight into people&apos;s expectations, frustrations, and behaviours when attending festivals.</p>

            <div className="case-study-image-row">
              <CaseStudyImagePlaceholder label="Competitor Analysis / netnography" className="case-study-image-wide" />
              <CaseStudyImagePlaceholder label="Relevant articles" className="case-study-image-tall" />
            </div>
            <CaseStudyImagePlaceholder label="Ideals and cultural identity" className="case-study-image-banner" />

            <h3 id="observations">Observations</h3>
            <p>Since we could not observe BLÅ SOL directly, we used visual material from similar Danish festivals as a reference. We paid attention to how people navigated the festival environment, interacted with their friends, and used their phones throughout the day.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to help us explore the topics in more depth. The questions focused on how people plan, communicate, and stay connected with friends during festivals.</p>
            <p>We conducted 18 interviews with people aged 18–34 who regularly attend festivals with friends. The interviews allowed us to hear about their experiences in their own words and helped us uncover behaviours and challenges that were not visible through our previous research methods.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3>The Problem</h3>
            <p>Young adults attending the Blå Sol festival experience difficulties staying connected with their friends during the event. While festivals are highly social environments, the crowded and dynamic setting makes it easy to lose track of one another.</p>
            <p>Visitors currently rely on fragmented communication tools such as messaging apps, which are not designed for real-time coordination in a festival context.</p>
            <p>As a result, this creates stress, reduces spontaneity, and negatively impacts the overall festival experience.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research findings into a more relatable user perspective, we created a persona based on patterns and behaviours identified across our interviews.</p>
            <p>The persona represents our target user and highlights their goals, motivations, frustrations, and behavior when attending festivals with friends. This helped us keep the user&apos;s perspective at the centre of the project throughout the design decisions.</p>
            <CaseStudyImagePlaceholder label="Festival-goer persona" className="case-study-image-portrait" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of our solution, we defined four core values that reflect the identity and atmosphere of BLÅ SOL.</p>
            <CaseStudyImagePlaceholder label="List of values" className="case-study-image-banner" />
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BlaSolProjectPage
