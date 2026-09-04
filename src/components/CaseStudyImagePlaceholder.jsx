function CaseStudyImagePlaceholder({ src, alt, label, className = '' }) {
  if (src) {
    return <img className={`case-study-image ${className}`.trim()} src={src} alt={alt || label} />
  }
  return (
    <div className={`case-study-image case-study-image-placeholder ${className}`.trim()}>
      {label}
    </div>
  )
}

export default CaseStudyImagePlaceholder
