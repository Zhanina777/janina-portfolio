import './App.css'
import userPhoto from './assets/user.png'

function PhonePreview({ variant = 'festival' }) {
  return (
    <div className={`phone-preview ${variant}`} aria-hidden="true">
      <div className="phone-speaker" />
      <div className="phone-screen">
        {variant === 'festival' ? (
          <>
            <span className="screen-label">BLA SOL</span>
            <span className="screen-sun">SOL</span>
            <span className="screen-wave" />
            <span className="screen-button">GET TICKETS</span>
          </>
        ) : (
          <>
            <span className="plant plant-one" />
            <span className="plant plant-two" />
            <span className="screen-label">BOTANICAL<br />GARDEN</span>
            <span className="screen-button">EXPLORE</span>
          </>
        )}
      </div>
      <div className="phone-home" />
    </div>
  )
}

function App() {
  return (
    <main className="portfolio">
      <nav className="navigation" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Home">JS</a>
        <div className="nav-links">
          <a href="#projects">projects</a>
          <a href="#about">about me</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

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

      <section className="about section" id="about">
        <div className="about-copy">
          <h2>HEY, I&apos;M JANINA</h2>
          <p className="body-copy">
            Hi! I&apos;m a UX/UI designer committed to creating meaningful digital
            experiences. I love finding the balance between curious ideas,
            thoughtful details, and simple interactions.
          </p>
          <a className="button" href="#contact">more about me</a>
        </div>
        <img
          className="portrait"
          src={userPhoto}
          alt="Portrait of Janina"
        />
      </section>

      <section className="projects section" id="projects">
        <h2 className="projects-title">Projects</h2>
        <article className="project project-first">
          <div className="project-copy">
            <h3>BLÅ SOL FESTIVAL</h3>
            <p>
              Mobile app focused on improving the festival experience by
              supporting seamless communication and enriching between friends.
            </p>
            <a className="button" href="#contact">see more</a>
          </div>
          <PhonePreview />
        </article>
        <article className="project project-second">
          <PhonePreview variant="garden" />
          <div className="project-copy">
            <h3>BOTANICAL GARDEN<br />DIGITAL EXPERIENCE</h3>
            <p>
              Digital experience designed to engage botanical garden visitors
              with plant identification, stories, and easy access to the garden.
            </p>
            <a className="button" href="#contact">see more</a>
          </div>
        </article>
        <article className="project project-third">
          <div className="project-copy">
            <h3>CREATIVE STUDIO<br />BRAND IDENTITY</h3>
            <p>
              Visual identity and digital direction for a creative studio built
              around bold ideas, clear storytelling, and human connections.
            </p>
            <a className="button" href="#contact">see more</a>
          </div>
          <PhonePreview />
        </article>
      </section>

      <footer className="contact" id="contact">
        <div className="footer-content">
          <h2>Have I caught your attention? Let&apos;s start creating together!</h2>
          <div className="contact-links">
            <a href="tel:+4552681177"><svg className="contact-icon phone-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" /></svg>+45 52 68 11 77</a>
            <a href="mailto:zhaninasabeva8@gmail.com"><span className="contact-icon" aria-hidden="true">✉</span>zhaninasabeva8@gmail.com</a>
            <a href="https://www.linkedin.com/in/janina-sabeva-1b666a339" target="_blank" rel="noreferrer"><span className="contact-icon linkedin-icon" aria-hidden="true">in</span>Janina Sabeva</a>
          </div>
          <p className="copyright">2026 Janina Sabeva. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default App