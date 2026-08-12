import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="corner-tl"></div>
      <div className="corner-br"></div>

      <div className="name-block">
        <div className="dot-grid">
          {Array.from({ length: 12 }).map((_, i) => <span key={i}></span>)}
        </div>
        <div className="name">Ruby<br />Kendrick</div>
        <div className="name-sub">Full-Stack Developer</div>
      </div>

      <div className="photo-placeholder">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
        <span>photo</span>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Contact</div>
        <div className="contact-item"><span className="contact-bullet"></span>706-410-3862</div>
        <div className="contact-item"><span className="contact-bullet"></span><a href="mailto:kendrick.ruby@gmail.com">kendrick.ruby@gmail.com</a></div>
        <div className="contact-item"><span className="contact-bullet"></span><a href="https://github.com/rubygkendrick" target="_blank" rel="noreferrer">github.com/rubygkendrick</a></div>
        <div className="contact-item"><span className="contact-bullet"></span>Nashville, TN</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Skills</div>
        <div className="skill-group">
          <div className="skill-group-label">Languages</div>
          <div className="skill-tags">
            {['JavaScript', 'TypeScript', 'React', 'C#/.NET', 'HTML', 'CSS', 'SQL'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label">Backend & Data</div>
          <div className="skill-tags">
            {['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'REST APIs', 'Entity Framework', 'ADO.NET'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label">Cloud & Tools</div>
          <div className="skill-tags">
            {['AWS', 'GitHub Actions', 'Three.js', 'Blender', 'Squarespace', 'Shopify', 'Figma', 'Vite'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Education</div>
        <div className="edu-item">
          <div className="edu-title">Nashville Software School</div>
          <div className="edu-org">Full Stack Bootcamp · 2024</div>
        </div>
        <div className="edu-item">
          <div className="edu-title">University of Georgia</div>
          <div className="edu-org">Landscape Architecture · 2008–2012</div>
        </div>
        <div className="edu-item">
          <div className="edu-title">TN Real Estate License</div>
          <div className="edu-org">Tennessee Real Estate Commission</div>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar