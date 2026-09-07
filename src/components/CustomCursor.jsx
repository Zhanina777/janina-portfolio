import { useEffect, useRef } from 'react'
import cursorImage from '../assets/cursor-transparent.png'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const DARK_BG_SELECTOR = '.hero, .contact, .contact-page, .interests-reference'
const HOTSPOT_X = 12.4
const HOTSPOT_Y = 8.1

function CustomCursor() {
  const posRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reducedMotion) return

    document.body.classList.add('has-custom-cursor')

    const pos = posRef.current
    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2

    const updateDarkState = (x, y) => {
      const under = document.elementFromPoint(x, y)
      pos.classList.toggle('is-on-dark', !!under?.closest?.(DARK_BG_SELECTOR))
    }
    const handleMove = e => {
      lastX = e.clientX
      lastY = e.clientY
      pos.style.opacity = '1'
      pos.style.transform = `translate3d(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px, 0)`
      updateDarkState(e.clientX, e.clientY)
    }
    const handleScroll = () => {
      updateDarkState(lastX, lastY)
    }
    const handleLeave = () => {
      pos.style.opacity = '0'
    }
    const handleOver = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) pos.classList.add('is-hover')
    }
    const handleOut = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) pos.classList.remove('is-hover')
    }
    const handleDown = () => pos.classList.add('is-active')
    const handleUp = () => pos.classList.remove('is-active')

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('blur', handleLeave)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('blur', handleLeave)
    }
  }, [])

  return (
    <div className="custom-cursor-pos" ref={posRef} style={{ opacity: 0 }}>
      <img className="custom-cursor-img" src={cursorImage} alt="" width="34" height="37.3" />
    </div>
  )
}

export default CustomCursor
