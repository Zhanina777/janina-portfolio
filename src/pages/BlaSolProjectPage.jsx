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
    { label: '02.3 how might we', id: 'how-might-we' },
    { label: '02.4 value proposition canvas', id: 'value-proposition-canvas' },
  ] },
  { phase: '03 develop', items: [
    { label: '03.1 sketches', id: 'sketches' },
    { label: '03.2 user flow', id: 'user-flow' },
    { label: '03.3 moodboard', id: 'moodboard' },
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

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through our research, we turned some of the main problems into How Might We questions. This helped us look at the problems from a different perspective and start thinking about possible solutions.</p>
            <CaseStudyImagePlaceholder label="How Might We questions" className="case-study-image-banner" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>We used the Value Proposition Canvas to connect what we learned from our research with what our solution could offer. We looked at what festival-goers are trying to do, what frustrates them, and what would make their experience easier and more enjoyable.</p>

            <h4>Customer Jobs</h4>
            <p>We found that staying connected with friends was one of the main things people wanted to achieve. They wanted to find each other when separated, decide what to do together, and enjoy the festival as a group without having to constantly communicate.</p>

            <h4>Pains</h4>
            <p>One of the biggest frustrations was losing friends in crowded areas. Participants also mentioned confusing locations, delayed messages and calls, and the feeling that existing festival apps can be too complicated for what they actually need.</p>

            <h4>Gains</h4>
            <p>People wanted a simple way to find their friends, spend more time together, and move around the festival without unnecessary stress. They also valued being able to stay spontaneous instead of constantly making plans.</p>

            <h4>Products and Services</h4>
            <p>Based on our findings, we developed a lightweight festival tool with a social map, approximate friend locations, group coordination, and smart meeting points.</p>

            <h4>Pain Relievers</h4>
            <p>Our concept aims to reduce frustrations by making finding friends quicker and easier. Approximate friend locations and smart meeting points help with coordination, while a simple interface reduces the need for constant messaging and avoids the complexity of traditional festival apps.</p>

            <h4>Gain Creators</h4>
            <p>The solution is designed to make the festival experience feel more connected and effortless. By making it easier to meet up and coordinate with friends, users can spend less time organising and more time enjoying the festival together.</p>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different ideas and layouts. This helped us try out different solutions without focusing too much on the details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Sketch 1" />
              <CaseStudyImagePlaceholder label="Sketch 2" />
              <CaseStudyImagePlaceholder label="Sketch 3" />
              <CaseStudyImagePlaceholder label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>We created a user flow to map out how users would move through the app and interact with its main features. This helped us understand the steps users would take to complete key tasks and make sure the experience felt simple and logical.</p>
            <p>It also helped us identify unnecessary steps and improve the overall navigation before developing the final design.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>We made a moodboard to explore the overall look and feel we wanted for the app. We collected colours, typography, images, and other visual references that matched the energy and atmosphere of BLÅ SOL.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder label="Moodboard 1" />
              <CaseStudyImagePlaceholder label="Moodboard 2" />
              <CaseStudyImagePlaceholder label="Moodboard 3" />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BlaSolProjectPage
