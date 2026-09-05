import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], label'
const EASE = 0.18

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reducedMotion) return

    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: mouse.x, y: mouse.y }
    let rafId

    const handleMove = e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
    }

    const handleOver = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) ring.classList.add('is-hover')
    }
    const handleOut = e => {
      if (e.target.closest?.(HOVER_SELECTOR)) ring.classList.remove('is-hover')
    }
    const handleDown = () => ring.classList.add('is-active')
    const handleUp = () => ring.classList.remove('is-active')

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * EASE
      ringPos.y += (mouse.y - ringPos.y) * EASE
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} />
      <div className="custom-cursor-ring" ref={ringRef} />
    </>
  )
}

export default CustomCursor
