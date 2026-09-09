import PhonePreview from './PhonePreview'

function CaseStudyPhoneCollage({ variant = 'festival', images, layout = 'fan' }) {
  if (images && layout === 'row') {
    return (
      <div className="case-study-phones-row">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="case-phone-img-row" />
        ))}
      </div>
    )
  }

  if (images) {
    return (
      <div className="case-study-phones case-study-phones-real">
        <img src={images[0]} alt="" className="case-phone-img case-phone-img-left" />
        <img src={images[1]} alt="" className="case-phone-img case-phone-img-center" />
        <img src={images[2]} alt="" className="case-phone-img case-phone-img-right" />
      </div>
    )
  }

  return (
    <div className="case-study-phones">
      <PhonePreview variant={variant} className="case-phone case-phone-left" />
      <PhonePreview variant={variant} className="case-phone case-phone-center" />
      <PhonePreview variant={variant} className="case-phone case-phone-right" />
    </div>
  )
}

export default CaseStudyPhoneCollage
