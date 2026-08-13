import { useRef } from 'react'
import './Carousel.css'

const projects = [
  {
    name: 'Budget Dashboard',
    link: 'github.com/rubygkendrick/budget-dashboard',
    href: 'https://github.com/rubygkendrick/budget-dashboard',
    desc: 'Full-stack personal finance application. Users track transactions, manage accounts, set per-category spending budgets, create savings goals, and view financial reports with charts. Stack: React, TypeScript, Vite, Node.js, Express, PostgreSQL 16, Prisma ORM, JWT auth, Recharts. Built an AI financial assistant into the app using the Anthropic API. The backend fetches the user\'s real financial data (balances, recent transactions, budgets, goals) and sends it as context with each message, so the assistant can answer questions like "How much did I spend on groceries this month?" with accurate, personalized answers. The architecture required thinking carefully about what context to include, how to structure it for the model, and how to handle the backend data-fetching layer cleanly.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Anthropic API'],
  },
  {
    name: 'Butterfly World',
    link: 'butterfly-world.rubykendrick.com',
    href: 'https://butterfly-world.rubykendrick.com',
    desc: 'A butterfly identification app built in collaboration with a senior developer. Stack: React, Vite, Three.js, iNaturalist API. Features a 3D interactive landing experience built with Three.js and a GLB model created in Meshy and refined in Blender. Deployed to AWS with a full CI/CD pipeline: S3 static hosting, CloudFront distribution, ACM SSL certificate, and GitHub Actions auto-deploying on every push to main. Built a custom Claude Code skill that runs deep research sessions on butterfly biology and appends dated findings to a project knowledge file, keeping the development context current as the app grows. Currently in active development.',
    tags: ['React', 'Three.js', 'Blender', 'AWS', 'GitHub Actions'],
  },
  {
    name: 'RoseBros',
    link: 'github.com/rubygkendrick/RoseBros',
    href: 'https://github.com/rubygkendrick/RoseBros',
    desc: 'E-commerce platform for specialty roses. React.js / React-Strap frontend; C# / .NET Core / Entity Framework Core backend. Features user auth, full CRUD, RESTful API integration, and admin inventory views. Built to production quality with real UX decisions throughout.',
    tags: ['React', 'C#/.NET', 'Entity Framework', 'PostgreSQL'],
  },
  {
    name: 'Stitches',
    link: 'github.com/rubygkendrick/stitches',
    href: 'https://github.com/rubygkendrick/stitches',
    desc: 'A React app where users design and save personalized embroidery kits with custom patterns, color schemes, stitch types, and strand counts. JSON Server backend, custom CSS styling throughout.',
    tags: ['React', 'JSON Server', 'CSS'],
  },
]

function ProjectsCarousel() {
  const ref = useRef(null)
  const scroll = (dir) => ref.current.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">Projects</div>
        <div className="section-rule">
          <div className="stripe-pink"></div>
          <div className="stripe-red"></div>
          <div className="stripe-yellow"></div>
          <div className="stripe-teal"></div>
        </div>
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