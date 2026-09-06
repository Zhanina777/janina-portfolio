import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT_X = 4.2
const HOTSPOT_Y = 4.2

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
      <svg className="custom-cursor-icon" ref={iconRef} width="24" height="24" viewBox="0 0 24 24">
        <g transform="rotate(-45 12 12)">
          <path fill="#111" d="M12 1 L14.2 6.2 L9.8 6.2 Z" />
          <rect x="10.6" y="6.2" width="2.8" height="13.5" rx="1.2" fill="#111" />
          <line x1="12" y1="7.2" x2="12" y2="18.2" stroke="rgba(255,255,255,.4)" strokeWidth=".8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

export default CustomCursor
