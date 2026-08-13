import "./Sidebar.css";
import devPhoto from "../assets/devPhoto.jpg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div
        style={{
          display: "flex",
          height: "8px",
          margin: "-40px -28px 32px -28px",
        }}
      >
        <div style={{ background: "#E8366A", flex: 1 }}></div>
        <div style={{ background: "#E84B2A", flex: 1 }}></div>
        <div style={{ background: "#F2B800", flex: 1 }}></div>
        <div style={{ background: "#2ABFAA", flex: 1 }}></div>
        <div style={{ background: "#1A1A1A", flex: 2 }}></div>
      </div>
      <div className="corner-tl"></div>
      <div className="corner-br"></div>

      <div className="name-block">
        <div className="dot-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <div className="name">
          Ruby
          <br />
          Kendrick
        </div>
        <div className="name-sub">FULL-STACK DEVELOPER</div>
      </div>

      <div
        style={{
          padding: "6px",
          background:
            "linear-gradient(to right, #E8366A, #E84B2A, #F2B800, #2ABFAA)",
          borderRadius: "10px",
        }}
      >
        <img
          src={devPhoto}
          alt="Ruby Kendrick"
          style={{ width: "100%", borderRadius: "6px", display: "block" }}
        />
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Contact</div>
        <div className="contact-item">
          <span className="contact-bullet"></span>706-410-3862
        </div>
        <div className="contact-item">
          <span className="contact-bullet"></span>
          <a href="mailto:kendrick.ruby@gmail.com">kendrick.ruby@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-bullet"></span>
          <a
            href="https://github.com/rubygkendrick"
            target="_blank"
            rel="noreferrer"
          >
            github.com/rubygkendrick
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-bullet"></span>Nashville, TN
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Skills</div>
        <div className="skill-group">
          <div className="skill-group-label">Languages</div>
          <div className="skill-tags">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "C#/.NET",
              "HTML",
              "CSS",
              "SQL",
            ].map((s, i) => {
              const colors = [
                "rgba(232,54,106,0.75)",
                "rgba(232,75,42,0.75)",
                "rgba(242,184,0,0.75)",
                "rgba(42,191,170,0.75)",
              ];
              const bg = colors[i % colors.length];
              return (
                <span
                  key={s}
                  className="skill-tag"
                  style={{
                    background: bg,
                    border: "none",
                    color: "#1A1A1A",
                    fontWeight: "600",
                  }}
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label">Backend & Data</div>
          <div className="skill-tags">
            {[
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
              "JWT",
              "REST APIs",
              "Entity Framework",
              "ADO.NET",
            ].map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label">Cloud & Tools</div>
          <div className="skill-tags">
            {[
              "AWS",
              "GitHub Actions",
              "Three.js",
              "Blender",
              "Squarespace",
              "Shopify",
              "Figma",
              "Vite",
            ].map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
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
  );
}

export default Sidebar;
