function CaseStudyToc({ groups }) {
  return (
    <nav className="case-study-toc" aria-label="Case study outline">
      {groups.map(group => (
        <div className="case-study-toc-group" key={group.phase}>
          <p className="case-study-toc-phase">{group.phase}</p>
          <ul>
            {group.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default CaseStudyToc
