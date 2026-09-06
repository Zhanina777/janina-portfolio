import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT = 3.5

function CustomCursor() {
  const posRef = useRef(null)
  const penRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reducedMotion) return

    document.body.classList.add('has-custom-cursor')

    const pos = posRef.current
    const pen = penRef.current

    const handleMove = e => {
      pos.style.transform = `translate3d(${e.clientX - HOTSPOT}px, ${e.clientY - HOTSPOT}px, 0)`
    }
    const handleOver = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) pen.classList.add('is-hover')
    }
    const handleOut = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) pen.classList.remove('is-hover')
    }
    const handleDown = () => pen.classList.add('is-active')
    const handleUp = () => pen.classList.remove('is-active')

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [])

  return (
    <div className="custom-cursor-pos" ref={posRef}>
      <svg className="custom-cursor-pen" ref={penRef} width="24" height="24" viewBox="0 0 24 24">
        <g transform="rotate(-45 12 12)">
          <polygon points="12,0 15.5,6.5 8.5,6.5" fill="#111" />
          <rect x="10" y="6" width="4" height="13" rx="1.5" fill="#111" />
          <line x1="12" y1="7.5" x2="12" y2="17" stroke="rgba(255,255,255,.4)" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

export default CustomCursor
