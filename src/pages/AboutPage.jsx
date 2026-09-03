import shopifyIcon from '../assets/selfhst_shopify.png'
import afterEffectsIcon from '../assets/skill-icons_aftereffects.png'
import figmaIcon from '../assets/devicon_figma.png'
import illustratorIcon from '../assets/devicon_illustrator.png'
import photoshopIcon from '../assets/devicon_photoshop.png'
import claudeIcon from '../assets/logos_claude-icon.png'
import wordpressIcon from '../assets/selfhst_wordpress-dark.png'
import AboutPortraitStack from '../components/AboutPortraitStack'
import { SwimmingIcon, CameraIcon, CompassIcon } from '../components/InterestIcons'
import ContactFooter from '../components/ContactFooter'

function AboutPage() {
  return (
    <>
      <section className="about-reference" id="about">
        <div className="about-reference-intro">
          <div className="about-reference-copy">
            <h1>more about me</h1>
            <p>I&apos;m a Multimedia Design student from Bulgaria, currently based in Aarhus, Denmark. I&apos;m fascinated by the way design can shape the way we experience and understand the world.</p>
            <p>I&apos;m curious, empathetic, and always looking for new ways to communicate ideas through thoughtful digital experiences.</p>
            <p>Through both individual and collaborative projects, I&apos;ve gained experience following the design process from research and ideation to prototyping and development.</p>
            <p>I&apos;m passionate about creating digital experiences that are intuitive, accessible, and user-centred.</p>
          </div>
          <AboutPortraitStack />
        </div>

        <section className="interests-reference">
          <h2>interests that shape me</h2>
          <div className="interests-reference-grid">
            <article className="interest-card" tabIndex={0}><span className="interest-icon"><SwimmingIcon /></span><h3>swimming</h3><p>Swimming has been a big part of my life and has shaped the way I approach challenges. Years of training taught me discipline, consistency, and the importance of being organised to achieve long-term goals. It strengthened my ability to plan, track progress, and continuously improve.</p></article>
            <article className="interest-card" tabIndex={0}><span className="interest-icon"><CameraIcon /></span><h3>photography</h3><p>Photography is a hobby I enjoy mainly while travelling and exploring new places. I like capturing everyday moments, especially how people interact with their surroundings and experience different environments. Through photography, I have learned to slow down, notice details that are often overlooked, and explore different perspectives.</p></article>
            <article className="interest-card" tabIndex={0}><span className="interest-icon"><CompassIcon /></span><h3>travelling</h3><p>Traveling and exploring new places inspires my curiosity and helps me understand different perspectives. I enjoy noticing how people interact with spaces, services, and cultures - something that influences the way I think about creating user-centred experiences.</p></article>
          </div>
        </section>

        <section className="toolkit-reference">
          <h2>my creative toolkit</h2>
          <div className="toolkit-reference-list">
            <span><img src={shopifyIcon} alt="" /><small>Shopify</small></span>
            <span><img src={afterEffectsIcon} alt="" /><small>After Effects</small></span>
            <span><img src={figmaIcon} alt="" /><small>Figma</small></span>
            <span><img src={illustratorIcon} alt="" /><small>Illustrator</small></span>
            <span><img src={photoshopIcon} alt="" /><small>Photoshop</small></span>
            <span><img src={claudeIcon} alt="" /><small>AI Workflows</small></span>
            <span><img src={wordpressIcon} alt="" /><small>WordPress</small></span>
          </div>
        </section>
      </section>
      <ContactFooter />
    </>
  )
}

export default AboutPage
