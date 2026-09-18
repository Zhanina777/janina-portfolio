function CaseStudyDetails({ items, className = '' }) {
  return (
    <dl className={`case-study-details ${className}`.trim()}>
      {items.map(({ label, value }) => (
        <div className="detail-row" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default CaseStudyDetails
