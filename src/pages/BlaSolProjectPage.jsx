import planningImage from '../assets/plan.png'
import bsm1 from '../assets/bsm1-recomposed.png'
import bsm2 from '../assets/bsm2-recomposed.png'
import bsm3 from '../assets/bsm3-trimmed.png'
import competitorAnalysis from '../assets/r.png'
import culturalIdentity from '../assets/r1.png'
import styleTile from '../assets/styletile.png'
import lofi1 from '../assets/lofi1.png'
import lofi2 from '../assets/lofi2.png'
import lofi3 from '../assets/lofi3.png'
import lofi4 from '../assets/lofi4.png'
import moodboard from '../assets/moodboard.png'
import festivalPersona from '../assets/persona 1.png'
import valuesList from '../assets/values.png'
import hmw from '../assets/hmw.png'
import sketch1 from '../assets/s.png'
import sketch2 from '../assets/s1.png'
import sketch3 from '../assets/s2.png'
import sketch4 from '../assets/s3.png'
import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const INTERVIEW_INSIGHTS = {
  heard: [
    '“We texted each other and set meeting points”',
    '“Using Messenger if we split up”',
    '“Apps are messy / not necessary”',
    '“Difficult to find each other”',
    '“Go with the flow”',
  ],
  means: [
    'People rely on external tools to coordinate',
    'Social connection is more important than planning',
    'Festival apps are not trusted or used',
    'Users want low effort solutions',
  ],
  conclusion: 'Festival visitors don’t need more information: they need better ways to stay connected',
}

const PATTERN_FREQUENCY = [
  { label: 'Lost friends', value: 10 },
  { label: 'Used Messenger/SMS', value: 11 },
  { label: "Doesn't use festival apps", value: 10 },
  { label: 'Go with the flow', value: 9 },
]
const PATTERN_FREQUENCY_MAX = 15
const PATTERN_FREQUENCY_TICKS = [0, 5, 10, 15]

const DETAILS = [
  { label: 'Client', value: 'BLÅ SOL' },
  { label: 'Product', value: 'Additional features in an established app' },
  { label: 'Role', value: 'UX Researcher & UI Designer' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Double Diamond' },
]

const FEEDBACK_GRID = [
  {
    user: 1,
    likes: [
      'Easy to find which artists your friends like',
      'Nice with invitation to meet',
      'Nice buttons to invite to meet and send location',
      'Group icon is understandable',
    ],
    dislikes: [
      "He ignored most of the pop ups and then he was confused because he can't read",
      "Didn't know you can click on friends in the map to make their info bigger and get more options",
    ],
    questions: [
      'Lots of questions because this tester is crazy and I should have tested on someone who can read',
    ],
    ideas: [
      'Add friend to group icon is weird and confusing',
      'Make lines between friends on the map / friends list so it looks more like you can click on them',
    ],
  },
  {
    user: 2,
    likes: [
      'Easy navigation and overall easy understanding of each task',
      "The app is similar to other apps so it's easy to know or find out what to do",
    ],
    dislikes: [
      'Didn’t know she can click on friends on the map list',
      "Sending the location was not that clear because she didn't know where to find it, but when she got to that part it was easy",
    ],
    questions: [
      'Not much questions, just why the location sending is on the map and not in the group page',
    ],
    ideas: [
      'Add sending location to the group as well',
    ],
  },
  {
    user: 3,
    likes: ['The map page'],
    dislikes: ['The account page was hard to find'],
    questions: ['Was confused about the button for the group'],
    ideas: ['Switch the account and group page'],
  },
  {
    user: 4,
    likes: ['Clear program and map page'],
    dislikes: ['Confusing group page', 'Account page is hidden'],
    questions: ['Could not find how to send location to friends'],
    ideas: ['Fix / set meeting page'],
  },
  {
    user: 5,
    likes: ['Nice app and the map page is great'],
    dislikes: ['Account was not easy to find'],
    questions: ['Just questioning where the profile is'],
    ideas: ['Make the profile more visible'],
  },
  {
    user: 6,
    likes: ["App is easy to use because it's similar to other apps and makes sense"],
    dislikes: ['Friends list was not very clickable-like'],
    questions: ['Not many questions'],
    ideas: ['Make friends more clickable'],
  },
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

function BlaSolProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-row">
            <div className="case-study-hero-copy">
              <h1><span className="hero-title-line">BLÅ SOL FESTIVAL</span><br />MOBILE APP</h1>
              <p>Helping festival-goers stay connected with their friends throughout the event.</p>
              <CaseStudyDetails items={DETAILS} className="case-study-details-inline" />
            </div>
            <CaseStudyPhoneCollage images={[bsm1, bsm2, bsm3]} layout="row" />
          </div>
        </div>

        <section className="case-study-section">
          <StickySectionTitle>Overview</StickySectionTitle>
          <div className="case-study-section-body">
            <p>BLÅ SOL is a real music festival, and this project asked how its official app could help visitors stay connected with the friends they came with. Festivals are crowded, unpredictable environments, and the people we spoke to described the same problem over and over: they lose track of each other, fall back on messaging apps that were never built for that kind of chaos, and end up spending more energy coordinating than actually enjoying the event.</p>
            <p>Over four weeks, working through research, definition, ideation, and testing, we designed a set of additional features for BLÅ SOL&apos;s app: a live map for finding friends, quick group coordination, and shared meeting points, shaped around four values we set for the experience &mdash; connecting, youthful, community-driven, and dazzling. Eighteen interviews, a persona, and usability testing with six participants guided every decision, from the earliest sketches to the final interface.</p>
            <p>The result is a lightweight, festival-native way to stay in touch that fits naturally into BLÅ SOL&apos;s existing identity &mdash; reducing the friction of finding friends so people can spend less time coordinating and more time enjoying the festival together.</p>
          </div>
        </section>

        <section className="case-study-section">
          <StickySectionTitle>Planning</StickySectionTitle>
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

            <CaseStudyImagePlaceholder src={competitorAnalysis} alt="Competitor analysis and netnography of similar festivals" label="Competitor Analysis / netnography" className="case-study-image-natural" />
            <CaseStudyImagePlaceholder src={culturalIdentity} alt="BLÅ SOL music and cultural identity moodboard" label="Ideals and cultural identity" className="case-study-image-natural" />

            <h3 id="observations">Observations</h3>
            <p>Since we could not observe BLÅ SOL directly, we used visual material from similar Danish festivals as a reference. We paid attention to how people navigated the festival environment, interacted with their friends, and used their phones throughout the day.</p>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to help us explore the topics in more depth. The questions focused on how people plan, communicate, and stay connected with friends during festivals.</p>
            <p>We conducted 18 interviews with people aged 18–34 who regularly attend festivals with friends. The interviews allowed us to hear about their experiences in their own words and helped us uncover behaviours and challenges that were not visible through our previous research methods.</p>
            <div className="interview-insights">
              <span className="interview-insights-title">Interview main insights</span>
              <div className="interview-insights-flow">
                <div className="interview-insights-card">
                  <span className="interview-insights-label">What we heard</span>
                  <ul>{INTERVIEW_INSIGHTS.heard.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
                <span className="interview-insights-arrow" aria-hidden="true">&rarr;</span>
                <div className="interview-insights-card">
                  <span className="interview-insights-label">What it means</span>
                  <ul>{INTERVIEW_INSIGHTS.means.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
                <span className="interview-insights-arrow" aria-hidden="true">&rarr;</span>
                <div className="interview-insights-card interview-insights-conclusion">
                  <p>{INTERVIEW_INSIGHTS.conclusion}</p>
                </div>
              </div>

              <div className="interview-chart">
                <span className="interview-chart-title">Pattern frequency</span>
                {PATTERN_FREQUENCY.map(row => (
                  <div className="interview-chart-row" key={row.label}>
                    <span className="interview-chart-label">{row.label}</span>
                    <span className="interview-chart-track">
                      <span className="interview-chart-bar" style={{ width: `${(row.value / PATTERN_FREQUENCY_MAX) * 100}%` }} />
                    </span>
                    <span className="interview-chart-value">{row.value}</span>
                  </div>
                ))}
                <div className="interview-chart-axis">
                  <span />
                  <span className="interview-chart-axis-ticks">
                    {PATTERN_FREQUENCY_TICKS.map(tick => (
                      <span className="interview-chart-tick" key={tick} style={{ left: `${(tick / PATTERN_FREQUENCY_MAX) * 100}%` }}>{tick}</span>
                    ))}
                  </span>
                  <span />
                </div>
              </div>
            </div>

            <h3>The Problem</h3>
            <p>Young adults attending the Blå Sol festival experience difficulties staying connected with their friends during the event. While festivals are highly social environments, the crowded and dynamic setting makes it easy to lose track of one another.</p>
            <p>Visitors currently rely on fragmented communication tools such as messaging apps, which are not designed for real-time coordination in a festival context.</p>
            <p>As a result, this creates stress, reduces spontaneity, and negatively impacts the overall festival experience.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research findings into a more relatable user perspective, we created a persona based on patterns and behaviours identified across our interviews.</p>
            <p>The persona represents our target user and highlights their goals, motivations, frustrations, and behavior when attending festivals with friends. This helped us keep the user&apos;s perspective at the centre of the project throughout the design decisions.</p>
            <CaseStudyImagePlaceholder src={festivalPersona} alt="Festival-goer persona: Ella Karberg" label="Festival-goer persona" className="case-study-image-portrait case-study-image-full" />

            <h3 id="values">Values</h3>
            <p>To guide the direction of our solution, we defined four core values that reflect the identity and atmosphere of BLÅ SOL.</p>
            <CaseStudyImagePlaceholder src={valuesList} alt="List of values: Connecting, Youthful, Community-driven, Dazzling" label="List of values" className="case-study-image-banner case-study-image-full case-study-image-cap-md" />

            <h3 id="how-might-we">How Might We</h3>
            <p>After going through our research, we turned some of the main problems into How Might We questions. This helped us look at the problems from a different perspective and start thinking about possible solutions.</p>
            <CaseStudyImagePlaceholder src={hmw} alt="How Might We questions" label="How Might We questions" className="case-study-image-banner case-study-image-full case-study-image-cap-md" />

            <h3 id="value-proposition-canvas">Value Proposition Canvas</h3>
            <p>We used the Value Proposition Canvas to connect what we learned from our research with what our solution could offer. We looked at what festival-goers are trying to do, what frustrates them, and what would make their experience easier and more enjoyable.</p>

            <div className="vpc-canvas">
              <div className="vpc-panel vpc-panel-profile">
                <h4 className="vpc-panel-title">Customer Profile</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Customer Jobs</span>
                  <p>We found that staying connected with friends was one of the main things people wanted to achieve. They wanted to find each other when separated, decide what to do together, and enjoy the festival as a group without having to constantly communicate.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pains</span>
                  <p>One of the biggest frustrations was losing friends in crowded areas. Participants also mentioned confusing locations, delayed messages and calls, and the feeling that existing festival apps can be too complicated for what they actually need.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gains</span>
                  <p>People wanted a simple way to find their friends, spend more time together, and move around the festival without unnecessary stress. They also valued being able to stay spontaneous instead of constantly making plans.</p>
                </div>
              </div>
              <div className="vpc-panel vpc-panel-map">
                <h4 className="vpc-panel-title">Value Map</h4>
                <div className="vpc-card">
                  <span className="vpc-card-label">Products and Services</span>
                  <p>Based on our findings, we developed a lightweight festival tool with a social map, approximate friend locations, group coordination, and smart meeting points.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Pain Relievers</span>
                  <p>Our concept aims to reduce frustrations by making finding friends quicker and easier. Approximate friend locations and smart meeting points help with coordination, while a simple interface reduces the need for constant messaging and avoids the complexity of traditional festival apps.</p>
                </div>
                <div className="vpc-card">
                  <span className="vpc-card-label">Gain Creators</span>
                  <p>The solution is designed to make the festival experience feel more connected and effortless. By making it easier to meet up and coordinate with friends, users can spend less time organising and more time enjoying the festival together.</p>
                </div>
              </div>
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different ideas and layouts. This helped us try out different solutions without focusing too much on the details.</p>
            <div className="case-study-image-grid case-study-image-grid-sketches case-study-image-grid-4">
              <CaseStudyImagePlaceholder src={sketch1} alt="Sketch 1" label="Sketch 1" />
              <CaseStudyImagePlaceholder src={sketch2} alt="Sketch 2" label="Sketch 2" />
              <CaseStudyImagePlaceholder src={sketch3} alt="Sketch 3" label="Sketch 3" />
              <CaseStudyImagePlaceholder src={sketch4} alt="Sketch 4" label="Sketch 4" />
            </div>

            <h3 id="user-flow">User Flow</h3>
            <p>We created a user flow to map out how users would move through the app and interact with its main features. This helped us understand the steps users would take to complete key tasks and make sure the experience felt simple and logical.</p>
            <p>It also helped us identify unnecessary steps and improve the overall navigation before developing the final design.</p>

            <h3 id="moodboard">Moodboard</h3>
            <p>We made a moodboard to explore the overall look and feel we wanted for the app. We collected colours, typography, images, and other visual references that matched the energy and atmosphere of BLÅ SOL.</p>
            <CaseStudyImagePlaceholder src={moodboard} alt="BLÅ SOL moodboard" label="Moodboard" className="case-study-image-portrait case-study-image-full" />

            <h3 id="style-tile">Styletile</h3>
            <p>For the visual identity of our project, we build on the already existing design of the festival rather than creating a completely new style. We kept the primary and secondary color palettes which reflect the vibrant and youthful atmosphere of the festival. We also followed the existing typography for heading and body text and reused the logo variations.</p>
            <CaseStudyImagePlaceholder src={styleTile} alt="BLÅ SOL style tile" label="Style tile" className="case-study-image-banner case-study-image-full" />

            <h3 id="lofi-wireframes">Lo-fi wireframes and Usability testing</h3>
            <p>Once we established the user flow and after understanding how users would navigate through the app we moved on to low-fidelity wireframes. This allowed us to quickly visualise the layout of each screen before focusing on visual identity.</p>
            <div className="case-study-image-grid case-study-image-grid-phones case-study-image-grid-4">
              <CaseStudyImagePlaceholder src={lofi1} alt="Lo-fi wireframe 1" label="Wireframe 1" />
              <CaseStudyImagePlaceholder src={lofi2} alt="Lo-fi wireframe 2" label="Wireframe 2" />
              <CaseStudyImagePlaceholder src={lofi3} alt="Lo-fi wireframe 3" label="Wireframe 3" />
              <CaseStudyImagePlaceholder src={lofi4} alt="Lo-fi wireframe 4" label="Wireframe 4" />
            </div>
            <p>After finishing the low-fidelity wireframes we conducted usability testing to see if users could easily navigate and complete tasks. We conducted think aloud testing on 6 users, giving them 7 scenarios and see how they would complete them. We sorted the feedback in a feedback capture grid.</p>
            <div className="feedback-grid-wrap">
              <table className="feedback-grid-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                    <th>Questions</th>
                    <th>Ideas</th>
                  </tr>
                </thead>
                <tbody>
                  {FEEDBACK_GRID.map(row => (
                    <tr key={row.user}>
                      <td className="feedback-grid-user">{row.user}</td>
                      <td><ul>{row.likes.map((item, i) => <li key={i}>{item}</li>)}</ul></td>
                      <td><ul>{row.dislikes.map((item, i) => <li key={i}>{item}</li>)}</ul></td>
                      <td><ul>{row.questions.map((item, i) => <li key={i}>{item}</li>)}</ul></td>
                      <td><ul>{row.ideas.map((item, i) => <li key={i}>{item}</li>)}</ul></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 id="final-product">Final product</h3>
            <div className="case-study-image-grid case-study-image-grid-phones">
              <CaseStudyImagePlaceholder label="Final product screen 1" />
              <CaseStudyImagePlaceholder label="Final product screen 2" />
              <CaseStudyImagePlaceholder label="Final product screen 3" />
              <CaseStudyImagePlaceholder label="Final product screen 4" />
            </div>
            <div className="case-study-cta">
              <a className="button" href="https://eaa25.github.io/" target="_blank" rel="noopener noreferrer">See final prototype</a>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  )
}

export default BlaSolProjectPage
