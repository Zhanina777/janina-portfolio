import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT_X = 5
const HOTSPOT_Y = 4

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
          <line x1="15.5" y1="1.5" x2="12.5" y2="5.5" />
          <line x1="22" y1="5" x2="17.5" y2="7.5" />
        </g>
        <path
          fill="#111"
          d="M5 3
             Q4 1.6 5.4 2.2
             L19.5 13.5
             Q21.5 15.3 19 16.8
             Q17 18 15 16.8
             L13 15.6
             L15.3 20.5
             Q16.4 22.8 14 23.6
             Q11.8 24.3 10.7 22
             L8.3 17
             L6.6 18.6
             Q4.7 20.3 3.6 18.3
             Q2.8 16.8 4 15.2
             L4.6 14.4
             Z"
        />
      </svg>
    </div>
  )
}

export default CustomCursor
