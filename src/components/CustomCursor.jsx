import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT_X = 11.5
const HOTSPOT_Y = 9.7

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
      <svg className="custom-cursor-icon" ref={iconRef} width="34" height="43.8" viewBox="0 0 225 290">
        <g stroke="#111" strokeWidth="20" strokeLinecap="round">
          <line x1="11" y1="107" x2="46" y2="87" />
          <line x1="36" y1="11" x2="58" y2="45" />
          <line x1="98" y1="56" x2="133" y2="36" />
        </g>
        <g fill="#111">
          <path d="M76,64 L130,130 L68,120 Z" />
          <circle cx="78" cy="155" r="38" />
          <circle cx="118" cy="165" r="48" />
        </g>
      </svg>
    </div>
  )
}

export default CustomCursor
