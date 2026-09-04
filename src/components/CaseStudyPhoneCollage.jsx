import PhonePreview from './PhonePreview'

function CaseStudyPhoneCollage({ variant = 'festival' }) {
  return (
    <div className="case-study-phones">
      <PhonePreview variant={variant} className="case-phone case-phone-left" />
      <PhonePreview variant={variant} className="case-phone case-phone-center" />
      <PhonePreview variant={variant} className="case-phone case-phone-right" />
    </div>
  )
}

export default CaseStudyPhoneCollage
