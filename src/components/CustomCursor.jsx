import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT_X = 4
const HOTSPOT_Y = 1

function CustomCursor() {
  const posRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reducedMotion) return

    document.body.classList.add('has-custom-cursor')

    const pos = posRef.current
    const icon = iconRef.current

    const handleMove = e => {
      pos.style.opacity = '1'
      pos.style.transform = `translate3d(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px, 0)`
    }
    const handleLeave = () => {
      pos.style.opacity = '0'
    }
    const handleOver = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) icon.classList.add('is-hover')
    }
    const handleOut = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) icon.classList.remove('is-hover')
    }
    const handleDown = () => icon.classList.add('is-active')
    const handleUp = () => icon.classList.remove('is-active')

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('blur', handleLeave)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
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
      <svg className="custom-cursor-icon" ref={iconRef} width="26" height="30" viewBox="0 0 26 30">
        <g stroke="#111" strokeWidth="1.6" strokeLinecap="round">
          <line x1="8" y1="0" x2="5" y2="4.5" />
          <line x1="14" y1="2" x2="9" y2="5.5" />
        </g>
        <g fill="#111">
          <path d="M4 1 L19 16 L10 16 Z" />
          <circle cx="10.5" cy="19" r="5" />
          <circle cx="17" cy="22.5" r="7" />
        </g>
      </svg>
    </div>
  )
}

export default CustomCursor
