import './About.css'

function About() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">About Me</div>
        <div className="section-rule"></div>
      </div>
      <p className="about-text">I'm a full-stack developer with a background that runs through songwriting, real estate, and code. I've been a working songwriter in Nashville for over a decade, with a studio here in town and records out on New West, Aerobic International, and Chowtown. Before pivoting to development, I spent five years as a licensed broker, managing client relationships, digital marketing, and the full arc of a real estate transaction. For the past two years I've been doing that same work as a freelance developer, building and maintaining websites for clients across music, real estate, and small business, owning projects from brief to launch. Reading rooms, managing expectations, and taking full ownership of outcomes has been the through-line of my career.</p>
      <p className="about-text">React is where I feel most at home on the technical side. I build full-stack web applications using React, Node.js, and PostgreSQL, alongside CMS platforms like Squarespace and Shopify when clients need them. Lately I've been expanding into deployment with AWS and exploring 3D rendering with Blender, mostly out of curiosity but increasingly showing up in my work.</p>
    </section>
  )
}

export default About