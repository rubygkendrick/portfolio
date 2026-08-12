import { useRef } from 'react'
import './Carousel.css'

const projects = [
  {
    name: 'Budget Dashboard',
    link: 'github.com/rubygkendrick/budget-dashboard',
    href: 'https://github.com/rubygkendrick/budget-dashboard',
    desc: 'Full-stack personal finance app with transaction tracking, budgets, savings goals, and charts. Features a context-aware AI financial assistant built with the Anthropic API — the backend fetches real user data and sends it as context so Claude can answer personalized questions about spending and goals.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Anthropic API'],
  },
  {
    name: 'Butterfly World',
    link: 'butterfly-world.rubykendrick.com',
    href: 'https://butterfly-world.rubykendrick.com',
    desc: 'Butterfly identification app with a 3D interactive landing experience built in Three.js using a GLB model created in Meshy and refined in Blender. Deployed to AWS with a full CI/CD pipeline via GitHub Actions. Includes a custom Claude Code skill for ongoing research sessions.',
    tags: ['React', 'Three.js', 'Blender', 'AWS', 'GitHub Actions'],
  },
  {
    name: 'RoseBros',
    link: 'github.com/rubygkendrick/RoseBros',
    href: 'https://github.com/rubygkendrick/RoseBros',
    desc: 'E-commerce platform for specialty roses. Full CRUD, user auth, RESTful API integration, and admin inventory views. Built to production quality with real UX decisions throughout.',
    tags: ['React', 'C#/.NET', 'Entity Framework', 'PostgreSQL'],
  },
  {
    name: 'Stitches',
    link: 'github.com/rubygkendrick/stitches',
    href: 'https://github.com/rubygkendrick/stitches',
    desc: 'A React app where users design and save personalized embroidery kits with custom patterns, color schemes, stitch types, and strand counts. JSON Server backend, custom CSS throughout.',
    tags: ['React', 'JSON Server', 'CSS'],
  },
]

function ProjectsCarousel() {
  const ref = useRef(null)

  const scroll = (dir) => {
    ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">Projects</div>
        <div className="section-rule"></div>
        <div className="carousel-arrows">
          <button onClick={() => scroll(-1)} className="arrow-btn">←</button>
          <button onClick={() => scroll(1)} className="arrow-btn">→</button>
        </div>
      </div>
      <div className="carousel" ref={ref}>
        {projects.map((proj) => (
          <div key={proj.name} className="proj-card">
            <div className="proj-name">{proj.name}</div>
            <a className="proj-link" href={proj.href} target="_blank" rel="noreferrer">{proj.link}</a>
            <p className="proj-desc">{proj.desc}</p>
            <div className="proj-tags">
              {proj.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsCarousel