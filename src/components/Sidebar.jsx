import "./Sidebar.css";
import devPhoto from "../assets/devPhoto.jpg";
import Dragonfly from "./Dragonfly";

const skillColors = [
  "rgba(232,54,106,0.75)",
  "rgba(232,75,42,0.75)",
  "rgba(242,184,0,0.75)",
  "rgba(42,191,170,0.75)",
];

function SkillTag({ s, i }) {
  const bg = skillColors[i % skillColors.length];
  return (
    <span
      className="skill-tag"
      style={{
        background: bg,
        border: "none",
        color: "#1A1A1A",
        fontWeight: "600",
        transition: "transform 0.15s, box-shadow 0.15s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.08)";
        e.target.style.boxShadow = `0 4px 12px ${bg}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "none";
      }}
    >
      {s}
    </span>
  );
}

function SkillGroup({ label, skills }) {
  return (
    <div className="skill-group">
      <div className="skill-group-label">{label}</div>
      <div className="skill-tags">
        {skills.map((s, i) => (
          <SkillTag key={s} s={s} i={i} />
        ))}
      </div>
    </div>
  );
}

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

      <div className="name-block" style={{ position: "relative" }}>
        <Dragonfly />
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

        <SkillGroup
          label="Languages"
          skills={[
            "JavaScript",
            "TypeScript",
            "React",
            "C#/.NET",
            "HTML",
            "CSS",
            "SQL",
          ]}
        />

        <SkillGroup
          label="Backend & Data"
          skills={[
            "Node.js",
            "Express",
            "PostgreSQL 16",
            "Prisma ORM",
            "Entity Framework Core",
            "RESTful APIs",
            "ADO.NET",
            "JWT",
            "bcryptjs",
          ]}
        />

        <SkillGroup
          label="Libraries & Tools"
          skills={[
            "Vite",
            "Three.js",
            "Git/GitHub",
            "GitHub Actions",
            "VS Code",
            "Figma",
            "Squarespace",
            "Shopify",
            "Asana",
            "Postman",
            "Miro",
          ]}
        />

        <SkillGroup
          label="Cloud & Deployment"
          skills={["AWS (S3, CloudFront, IAM, ACM)", "CI/CD pipelines"]}
        />

        <SkillGroup
          label="3D & Design"
          skills={[
            "Blender",
            "Adobe Photoshop",
            "Final Cut Pro",
            "UI/UX wireframing",
            "Print & digital production",
          ]}
        />
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Education</div>
        <div className="edu-item">
          <div className="edu-title">Nashville Software School</div>
          <div className="edu-org">Full Stack Bootcamp · 2024</div>
        </div>
        <div className="edu-item">
          <div className="edu-title">TN Real Estate License</div>
          <div className="edu-org">Tennessee Real Estate Commission · 2021</div>
        </div>
        <div className="edu-item">
          <div className="edu-title">University of Georgia</div>
          <div className="edu-org">Landscape Architecture · 2008–2012</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
