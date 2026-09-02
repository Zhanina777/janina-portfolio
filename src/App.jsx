import { useEffect, useRef, useState } from 'react'
import './App.css'
import userPhoto from './assets/user.png'
import aboutPhoto from './assets/pic2.jpeg'
import aboutPhoto2 from './assets/pic3.jpg'
import aboutPhoto3 from './assets/pic4.jpg'
import aboutPhoto4 from './assets/pic5.jpeg'
import shopifyIcon from './assets/selfhst_shopify.png'
import afterEffectsIcon from './assets/skill-icons_aftereffects.png'
import figmaIcon from './assets/devicon_figma.png'
import illustratorIcon from './assets/devicon_illustrator.png'
import photoshopIcon from './assets/devicon_photoshop.png'
import claudeIcon from './assets/logos_claude-icon.png'
import wordpressIcon from './assets/selfhst_wordpress-dark.png'

const ABOUT_PHOTOS = [aboutPhoto, aboutPhoto2, aboutPhoto3, aboutPhoto4]

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

function ContactFooter() {
  return (
    <footer className="contact" id="contact">
      <div className="footer-content">
        <h2>Have I caught your attention? Let&apos;s start creating together!</h2>
        <div className="contact-links">
          <a href="tel:+4552681177"><span className="contact-icon" aria-hidden="true">☎</span>+45 52 68 11 77</a>
          <a href="mailto:zhaninasabeva8@gmail.com"><span className="contact-icon" aria-hidden="true">✉</span>zhaninasabeva8@gmail.com</a>
          <a href="https://www.linkedin.com/in/janina-sabeva-1b666a339" target="_blank" rel="noreferrer"><span className="contact-icon linkedin-icon" aria-hidden="true">in</span>Janina Sabeva</a>
        </div>
        <p className="copyright">2026 Janina Sabeva. All rights reserved.</p>
      </div>
    </footer>
  )
}

function ContactPage() {
  return (
    <section className="contact-page" id="contact-page">
      <div className="contact-page-inner">
        <div className="contact-page-copy">
          <h1>Have I caught your attention? Let&apos;s start creating together!</h1>
          <div className="contact-links">
            <a href="tel:+4552681177"><span className="contact-icon" aria-hidden="true">☎</span>+45 52 68 11 77</a>
            <a href="mailto:zhaninasabeva8@gmail.com"><span className="contact-icon" aria-hidden="true">✉</span>zhaninasabeva8@gmail.com</a>
            <a href="https://www.linkedin.com/in/janina-sabeva-1b666a339" target="_blank" rel="noreferrer"><span className="contact-icon linkedin-icon" aria-hidden="true">in</span>Janina Sabeva</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true">⤓</span>Resume</a>
          </div>
        </div>
        <a className="quick-chat-button" href="mailto:zhaninasabeva8@gmail.com?subject=Quick%20chat">
          <span className="quick-chat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
              <path d="M3 6.5 12 13 21 6.5" />
            </svg>
          </span>
          Quick chat
        </a>
      </div>
      <p className="copyright">2026 Janina Sabeva. All rights reserved.</p>
    </section>
  )
}

function AboutPortraitStack() {
  const [index, setIndex] = useState(0)

  const advance = () => setIndex(i => (i + 1) % ABOUT_PHOTOS.length)

  return (
    <div
      className="about-portrait-stack"
      onMouseEnter={advance}
      onFocus={advance}
      tabIndex={0}
    >
      {ABOUT_PHOTOS.map((src, i) => {
        const distance = (i - index + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length
        const state = distance === 0 ? ' is-active' : distance === 1 ? ' is-next' : ''
        return <img key={src} className={`about-portrait${state}`} src={src} alt="Photo of Janina" />
      })}
    </div>
  )
}

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
            <article><div className="interest-image-placeholder">swimming image</div><h3>swimming</h3><p>Swimming has been a big part of my life and has shaped the way I approach challenges. Years of training taught me discipline, consistency, and the importance of being organised to achieve long-term goals. It strengthened my ability to plan, track progress, and continuously improve.</p></article>
            <article><div className="interest-image-placeholder">photography image</div><h3>photography</h3><p>Photography is a hobby I enjoy mainly while travelling and exploring new places. I like capturing everyday moments, especially how people interact with their surroundings and experience different environments. Through photography, I have learned to slow down, notice details that are often overlooked, and explore different perspectives.</p></article>
            <article><div className="interest-image-placeholder">travelling image</div><h3>travelling</h3><p>Traveling and exploring new places inspires my curiosity and helps me understand different perspectives. I enjoy noticing how people interact with spaces, services, and cultures - something that influences the way I think about creating user-centred experiences.</p></article>
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

function getPageFromHash() {
  const hash = window.location.hash
  if (hash === '#about') return 'about'
  if (hash === '#contact') return 'contact'
  return 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromHash())
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const handleHashChange = () => {
      setPage(getPageFromHash())
      setMenuOpen(false)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (page !== 'home') {
      window.scrollTo(0, 0)
    } else if (window.location.hash === '#projects') {
      requestAnimationFrame(() => document.getElementById('projects')?.scrollIntoView())
    }
  }, [page])

  useEffect(() => {
    if (!menuOpen) return
    const handlePointerDown = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    const handleKeyDown = e => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <main className="portfolio">
      <nav className="navigation" aria-label="Main navigation" ref={navRef}>
        <a className="monogram" href="#top" aria-label="Home">JS</a>
        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <a href="#projects">projects</a>
          <a href="#about">about me</a>
          <a href="#contact">contact</a>
        </div>
      </nav>
      {page === 'about' ? <AboutPage /> : page === 'contact' ? <ContactPage /> : <HomePage />}
    </main>
  )
}

export default App