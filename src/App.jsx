import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlaSolProjectPage from './pages/BlaSolProjectPage'

const ROUTED_PAGES = {
  about: AboutPage,
  contact: ContactPage,
  'project-bla-sol': BlaSolProjectPage,
}

function getPageFromHash() {
  const hash = window.location.hash
  if (hash === '#about') return 'about'
  if (hash === '#contact') return 'contact'
  if (hash === '#project-bla-sol') return 'project-bla-sol'
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

  const RoutedPage = ROUTED_PAGES[page]

  return (
    <main className="portfolio">
      <Navigation onLogoClick={() => {
        if (window.location.hash !== '#top') window.location.hash = 'top'
        else setPage('home')
        window.scrollTo(0, 0)
        setHomeAnimKey(k => k + 1)
      }} />
      {RoutedPage ? <RoutedPage /> : <HomePage key={homeAnimKey} />}
    </main>
  )
}

export default App
