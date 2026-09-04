function CaseStudyDetails({ items }) {
  return (
    <dl className="case-study-details">
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
