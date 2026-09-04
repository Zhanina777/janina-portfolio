import PhonePreview from '../components/PhonePreview'
import ContactFooter from '../components/ContactFooter'

function BlaSolProjectPage() {
  return (
    <>
      <section className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero-copy">
            <h1>BLÅ SOL FESTIVAL MOBILE APP</h1>
            <p>Helping festival-goers stay connected with their friends throughout the event.</p>
          </div>
          <div className="case-study-phones">
            <PhonePreview className="case-phone case-phone-left" />
            <PhonePreview className="case-phone case-phone-center" />
            <PhonePreview className="case-phone case-phone-right" />
          </div>
        </div>

        <dl className="case-study-details">
          <div className="detail-row"><dt>Client</dt><dd>BLÅ SOL</dd></div>
          <div className="detail-row"><dt>Product</dt><dd>Additional features in an established app</dd></div>
          <div className="detail-row"><dt>Duration</dt><dd>4 weeks</dd></div>
          <div className="detail-row"><dt>Role</dt><dd>UX/UI Designer (user research, ideation, wireframing, prototyping, and usability testing)</dd></div>
          <div className="detail-row"><dt>Tools</dt><dd>Figma, Figjam, VS Code</dd></div>
          <div className="detail-row"><dt>Methodology</dt><dd>Double Diamond</dd></div>
        </dl>

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
