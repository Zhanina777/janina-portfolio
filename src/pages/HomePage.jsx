import userPhoto from '../assets/user.png'
import PhonePreview from '../components/PhonePreview'
import ContactFooter from '../components/ContactFooter'

function HomePage() {
  return (
    <>
      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to my</p>
          <h1>PORT<span className="portfolio-f">f</span>OLIO</h1>
          <p className="signature">Janina Sabeva</p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 70 C110 65 180 40 300 42 C445 45 545 69 680 78 C815 87 920 84 1000 72 L1000 100 L0 100 Z" />
        </svg>
      </header>

      <section className="about section">
        <div className="about-copy">
          <h2>HEY, I&apos;M JANINA</h2>
          <p className="body-copy">-an aspiring UI/UX designer currently studying Multimedia Design, driven by curiosity, creativity, and human-centered design.</p>
          <a className="button" href="#about">more about me</a>
        </div>
        <img className="portrait" src={userPhoto} alt="Portrait of Janina" />
      </section>

      <section className="projects section" id="projects">
        <h2 className="projects-title">Projects</h2>
        <article className="project project-first">
          <div className="project-copy">
            <h3>BLÅ SOL FESTIVAL</h3>
            <p>Mobile app focused on improving the festival experience by supporting seamless communication and enriching between friends.</p>
            <a className="button" href="#contact">see more</a>
          </div>
          <PhonePreview />
        </article>
        <article className="project project-second">
          <PhonePreview variant="garden" />
          <div className="project-copy">
            <h3>BOTANICAL GARDEN<br />DIGITAL EXPERIENCE</h3>
            <p>Digital experience designed to engage botanical garden visitors with plant identification, stories, and easy access to the garden.</p>
            <a className="button" href="#contact">see more</a>
          </div>
        </article>
        <article className="project project-third">
          <div className="project-copy">
            <h3>CREATIVE STUDIO<br />BRAND IDENTITY</h3>
            <p>Visual identity and digital direction for a creative studio built around bold ideas, clear storytelling, and human connections.</p>
            <a className="button" href="#contact">see more</a>
          </div>
          <PhonePreview />
        </article>
      </section>

      <ContactFooter />
    </>
  )
}

export default HomePage
