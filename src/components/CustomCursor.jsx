import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const HOTSPOT_X = 9.1
const HOTSPOT_Y = 7.7

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
      <svg className="custom-cursor-icon" ref={iconRef} width="27" height="34.8" viewBox="0 0 225 290">
        <g stroke="#111" strokeWidth="15" strokeLinecap="round">
          <line x1="11" y1="107" x2="46" y2="87" />
          <line x1="36" y1="11" x2="58" y2="45" />
          <line x1="98" y1="56" x2="133" y2="36" />
        </g>
        <path
          fill="#111"
          d="M76,64
             C100,90 175,130 214,164
             C213,190 210,216 207,240
             C204,262 188,278 167,278
             C148,278 135,255 125,239
             C118,248 108,247 101,247
             C78,247 62,230 59,211
             C57,175 58,110 64,80
             C68,72 72,66 76,64
             Z"
        />
      </svg>
    </div>
  )
}

export default CustomCursor
