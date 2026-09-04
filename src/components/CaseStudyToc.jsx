import { useEffect, useRef, useState } from 'react'

const TOP_OFFSET = 120
const RELEASE_MARGIN = 24
const MOBILE_BREAKPOINT = 560
const SCROLL_PADDING = 20

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET - SCROLL_PADDING
  window.scrollTo({ top, behavior: 'smooth' })
}

function CaseStudyToc({ groups }) {
  const wrapRef = useRef(null)
  const navRef = useRef(null)
  const [navStyle, setNavStyle] = useState({})

  useEffect(() => {
    const update = () => {
      const wrap = wrapRef.current
      const nav = navRef.current
      const container = wrap?.parentElement
      if (!wrap || !nav || !container) return

      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        wrap.style.height = ''
        setNavStyle({})
        return
      }

      const navHeight = nav.offsetHeight
      wrap.style.height = `${navHeight}px`

      const wrapRect = wrap.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const containerPaddingBottom = parseFloat(getComputedStyle(container).paddingBottom) || 0
      const releaseThreshold = containerRect.bottom - containerPaddingBottom - navHeight

      if (wrapRect.top > TOP_OFFSET) {
        setNavStyle({})
      } else if (releaseThreshold < TOP_OFFSET + RELEASE_MARGIN) {
        setNavStyle({ position: 'absolute', bottom: containerPaddingBottom, left: wrap.offsetLeft, width: wrap.offsetWidth })
      } else {
        setNavStyle({ position: 'fixed', top: TOP_OFFSET, left: wrapRect.left, width: wrapRect.width, zIndex: 5 })
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="case-study-toc-wrap" ref={wrapRef}>
      <nav className="case-study-toc" ref={navRef} style={navStyle} aria-label="Case study outline">
        {groups.map(group => (
          <div className="case-study-toc-group" key={group.phase}>
            <p className="case-study-toc-phase">{group.phase}</p>
            <ul>
              {group.items.map(item => (
                <li key={item.label} className={item.id ? '' : 'is-disabled'}>
                  {item.id
                    ? <button type="button" onClick={() => scrollToSection(item.id)}>{item.label}</button>
                    : item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default CaseStudyToc
