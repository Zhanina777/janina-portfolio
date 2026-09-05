import { useEffect, useRef, useState } from 'react'

const TOP_OFFSET = 120
const RELEASE_MARGIN = 24
const MOBILE_BREAKPOINT = 560

function StickySectionTitle({ as: Tag = 'h2', className = '', children }) {
  const wrapRef = useRef(null)
  const titleRef = useRef(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    const update = () => {
      const wrap = wrapRef.current
      const title = titleRef.current
      const container = wrap?.parentElement
      if (!wrap || !title || !container) return

      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        wrap.style.height = ''
        setStyle({})
        return
      }

      const titleHeight = title.offsetHeight
      wrap.style.height = `${titleHeight}px`

      const wrapRect = wrap.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const containerPaddingBottom = parseFloat(getComputedStyle(container).paddingBottom) || 0
      const releaseThreshold = containerRect.bottom - containerPaddingBottom - titleHeight

      if (wrapRect.top > TOP_OFFSET) {
        setStyle({})
      } else if (releaseThreshold < TOP_OFFSET + RELEASE_MARGIN) {
        setStyle({ position: 'absolute', bottom: containerPaddingBottom, left: wrap.offsetLeft, width: wrap.offsetWidth })
      } else {
        setStyle({ position: 'fixed', top: TOP_OFFSET, left: wrapRect.left, width: wrapRect.width, zIndex: 5 })
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
    <div className="sticky-section-title-wrap" ref={wrapRef}>
      <Tag className={className} ref={titleRef} style={style}>{children}</Tag>
    </div>
  )
}

export default StickySectionTitle
