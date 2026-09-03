import { useEffect, useRef, useState } from 'react'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleHashChange = () => setMenuOpen(false)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
  )
}

export default Navigation
