import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function getPageFromHash() {
  const hash = window.location.hash
  if (hash === '#about') return 'about'
  if (hash === '#contact') return 'contact'
  return 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromHash())
  const [homeAnimKey, setHomeAnimKey] = useState(0)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const handleHashChange = () => setPage(getPageFromHash())
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

  return (
    <main className="portfolio">
      <Navigation onLogoClick={() => setHomeAnimKey(k => k + 1)} />
      {page === 'about' ? <AboutPage /> : page === 'contact' ? <ContactPage /> : <HomePage key={homeAnimKey} />}
    </main>
  )
}

export default App
