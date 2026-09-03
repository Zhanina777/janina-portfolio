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

export default ContactPage
