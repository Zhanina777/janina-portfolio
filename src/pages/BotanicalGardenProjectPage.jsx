import garden1 from '../assets/garden1.png'
import garden2 from '../assets/garden2.png'
import garden3 from '../assets/garden3.png'
import gardenPersona from '../assets/gardenpersona.png'
import sc1 from '../assets/sc1.png'
import sc2 from '../assets/sc2.png'
import sc3 from '../assets/sc3.png'
import sc4 from '../assets/sc4.png'
import CaseStudyPhoneCollage from '../components/CaseStudyPhoneCollage'
import CaseStudyDetails from '../components/CaseStudyDetails'
import CaseStudyToc from '../components/CaseStudyToc'
import StickySectionTitle from '../components/StickySectionTitle'
import CaseStudyImagePlaceholder from '../components/CaseStudyImagePlaceholder'
import ContactFooter from '../components/ContactFooter'

const OBJECTS_LIST = [
  { id: '001', name: 'Olive / Oliven', section: '11 - Mediterranean house', fact: 'Olive oil was once used as fuel for lamps' },
  { id: '002', name: 'Canary islands candle plant / Kanarieklokke', section: '11 - Mediterranean house', fact: "Looks like a cactus, but it isn't at all — its white juice can burn your skin" },
  { id: '003', name: 'Jerusalem sage / Almindelig løvehale', section: '11 - Mediterranean house', fact: 'Even when it dies, it still looks cool and decorative' },
  { id: '004', name: 'Narrow-leaved bottlebrush / Hvid barberkost', section: '11 - Mediterranean house', fact: 'Some people actually use it to clean bottles' },
  { id: '005', name: 'Arum lily / Arumslilje', section: '11 - Mediterranean house', fact: 'Not actually a true lily — it can trap insects inside and it is poisonous' },
  { id: '006', name: 'Century plant / Agave', section: '12 - The desert house', fact: 'It dies immediately after flowering' },
  { id: '007', name: 'Cactaceae / Cactus family', section: '12 - The desert house', fact: 'Stores tons of water and can live over 200 years' },
  { id: '008', name: 'Upland cotton / Amerikansk bomuld', section: '12 - The desert house', fact: 'The fluffy cotton actually protects the seeds and can "explode" open when ready' },
  { id: '009', name: 'Pebble plants / Levende sten', section: '12 - The desert house', fact: 'Hides from animals by blending in — also called "living stones"' },
  { id: '010', name: 'Golden barrel cactus / Guldkugle', section: '12 - The desert house', fact: 'It stores so much water it can survive years without rain' },
  { id: '011', name: 'Coffee / Kaffe', section: '13 - Montane forest house', fact: 'Legend says goats discovered coffee' },
  { id: '012', name: 'Lemon / Citron', section: '13 - Montane forest house', fact: 'So sour it can clean things' },
  { id: '013', name: 'Kumquat', section: '13 - Montane forest house', fact: 'One of the smallest citrus fruits — you eat it with the peel' },
  { id: '014', name: 'Indian clock vine / Indisk slangeblomst', section: '13 - Montane forest house', fact: 'Looks like hanging flower chains and can grow very tall, like a plant waterfall' },
  { id: '015', name: 'Tea plant / Te', section: '13 - Montane forest house', fact: 'The most drunk drink in the world after water, with special ceremonies in some cultures' },
  { id: '016', name: 'Vanilla', section: '14 - The tropical house', fact: 'Comes from an orchid, not a tree, and each flower must be pollinated by hand' },
  { id: '017', name: 'Cacao tree / Kakao', section: '14 - The tropical house', fact: 'Its name means "food of the gods"' },
  { id: '018', name: 'Vegetable ivory palm / Vegetabilsk elfenbenspalme', section: '14 - The tropical house', fact: 'Seeds are as hard as animal ivory and are used to make buttons and art' },
  { id: '019', name: 'Pavonia multiflora / Dronningens balkjole', section: '14 - The tropical house', fact: 'Flowers look like tiny glowing lanterns' },
  { id: '020', name: 'Water hyacinth / Vandhyacint', section: '14 - The tropical house', fact: 'Can clean polluted water like a natural filter — one plant can turn into thousands in weeks' },
  { id: '021', name: 'Blackburn red bell tree / Mauritansk rødklokketræ', section: '14 - The tropical house', fact: 'Its flowers look like dozens of red bells hanging down' },
  { id: '022', name: 'Baobab', section: '14 - The tropical house', fact: 'Some trees are so big you can fit people inside of the trunk' },
  { id: '023', name: 'Rice / Ris', section: '14 - The tropical house', fact: 'Feeds more than half of all the people on Earth every single day' },
]

const DETAILS = [
  { label: 'Client', value: 'City Botanical Garden' },
  { label: 'Product', value: 'Companion app for garden visitors' },
  { label: 'Role', value: 'UX Designer & Content Creator' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Tools', value: 'Figma, Figjam, VS Code' },
  { label: 'Methodology', value: 'Design Thinking & Iterative Design' },
]

const TOC_GROUPS = [
  { phase: '01 discover', items: [
    { label: '01.1 Research', id: 'research' },
    { label: '01.2 Observations', id: 'observations' },
    { label: '01.3 Interviews', id: 'interviews' },
  ] },
  { phase: '02 define', items: [
    { label: '02.1 problem statement', id: 'problem' },
    { label: '02.2 user persona', id: 'persona' },
    { label: '02.3 list of objects', id: 'list-of-objects' },
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
            <p><strong>Botanical Garden Digital Experience</strong> is a companion app concept designed to help garden visitors identify plants and feel more connected to what they&apos;re seeing as they walk through the space. The project focused on solving a common frustration: limited signage and no easy way to learn more without stepping away from the moment to search online.</p>
            <p>Working as part of a team, I contributed to <strong>user research, persona development, ideation, UX design, and usability testing</strong>. I was also involved in developing the <strong>visual identity and refining the interface based on feedback from usability testing</strong>.</p>
            <p>The final solution introduced features such as instant plant identification, curated routes, and bite-sized information cards visitors can browse as they walk. During the iteration process, we also explored ideas like personalised route recommendations to make each visit feel more tailored.</p>
            <p>This project demonstrates my ability to <strong>turn visitor research into practical features, design for a calm, in-context experience, and iterate based on usability testing</strong>.</p>
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
            <p>Working with volunteers. Little name boards at multiple plants, but not all of them → some even have a QR-code. The QR-code leads to a page where they give information about the plants on a boring page (name and information). There is a table with a flower before entering that tells you what a flower is. There was a brochure available with a map of the place. Site shows a lot more than just things about the Botanical Garden, such as things about plants.</p>
            <div className="case-study-image-row-5">
              <CaseStudyImagePlaceholder label="Observation photo 1" />
              <CaseStudyImagePlaceholder label="Observation photo 2" />
              <CaseStudyImagePlaceholder label="Observation photo 3" />
              <CaseStudyImagePlaceholder label="Observation photo 4" />
              <CaseStudyImagePlaceholder label="Observation photo 5" />
            </div>

            <h3 id="interviews">Interviews</h3>
            <p>After gathering our initial findings, we developed an interview guide to explore visitor habits and expectations in more depth.</p>
            <p>We spoke with 15 people of different ages and backgrounds who visit gardens and green spaces regularly. These conversations helped us understand the small frustrations and delights that shape a garden visit.</p>
            <CaseStudyImagePlaceholder label="Interview main insights" className="case-study-image-banner" />

            <h3 id="problem">The Problem</h3>
            <p>Many young students on field trips to the botanical garden quickly lose interest, which negatively impacts their engagement and learning. Walking around, looking at plants, and reading signs does not always keep their attention.</p>

            <h3>The Solution</h3>
            <p>But how do we solve that problem, and how can we make sure that children actually learn something while looking at the plants?</p>
            <p>We designed an interactive mini-game experience that increases student engagement and curiosity during botanical garden visits. By combining exploration with gameplay, we make the botanical garden experience more engaging, educational, and memorable for children.</p>

            <h3 id="persona">Persona</h3>
            <p>To turn our research into a more relatable user perspective, we created a persona based on patterns identified across our interviews and observations.</p>
            <p>The persona represents our target visitor and highlights their goals, motivations, and frustrations when exploring the garden. This helped us keep their perspective at the centre of our design decisions.</p>
            <CaseStudyImagePlaceholder src={gardenPersona} alt="Garden visitor persona: Victor, 13 years old" label="Garden visitor persona" className="case-study-image-natural" />

            <h3 id="list-of-objects">List of Objects</h3>
            <p>As part of the content work, I put together a list of the plants featured across the garden and the app, organised by section, with a fun fact for each one to make learning about them more engaging.</p>
            <div className="objects-list-row">
              {[OBJECTS_LIST.slice(0, 12), OBJECTS_LIST.slice(12)].map((half, col) => (
                <div className="objects-table-wrap" key={col}>
                  <table className="objects-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Section</th>
                        <th>Fact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {half.map(row => (
                        <tr key={row.id}>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.section}</td>
                          <td>{row.fact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <h3 id="sketches">Sketches</h3>
            <p>We started with quick sketches to explore different ideas and layouts. This helped us try out different solutions without focusing too much on the details.</p>
            <div className="case-study-image-grid">
              <CaseStudyImagePlaceholder src={sc1} label="Sketch 1" />
              <CaseStudyImagePlaceholder src={sc2} label="Sketch 2" />
              <CaseStudyImagePlaceholder src={sc3} label="Sketch 3" />
              <CaseStudyImagePlaceholder src={sc4} label="Sketch 4" />
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
