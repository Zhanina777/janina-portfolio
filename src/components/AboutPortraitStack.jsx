import { useState } from 'react'
import aboutPhoto from '../assets/pic2.jpeg'
import aboutPhoto2 from '../assets/pic3.jpg'
import aboutPhoto3 from '../assets/pic4.jpg'
import aboutPhoto4 from '../assets/pic5.jpeg'
import aboutPhoto5 from '../assets/tr.JPG'

const ABOUT_PHOTOS = [aboutPhoto, aboutPhoto2, aboutPhoto3, aboutPhoto4, aboutPhoto5]

function AboutPortraitStack() {
  const [index, setIndex] = useState(0)

  const advance = () => setIndex(i => (i + 1) % ABOUT_PHOTOS.length)

  return (
    <div
      className="about-portrait-stack"
      onMouseEnter={advance}
      onFocus={advance}
      tabIndex={0}
    >
      {ABOUT_PHOTOS.map((src, i) => {
        const distance = (i - index + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length
        const state = distance === 0 ? ' is-active' : distance === 1 ? ' is-next' : ''
        return <img key={src} className={`about-portrait${state}`} src={src} alt="Photo of Janina" />
      })}
    </div>
  )
}

export default AboutPortraitStack
