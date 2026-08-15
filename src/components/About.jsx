import "./About.css";

function About() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">About Me</div>
        <div className="section-rule">
          <div className="stripe-pink"></div>
          <div className="stripe-red"></div>
          <div className="stripe-yellow"></div>
          <div className="stripe-teal"></div>
        </div>
      </div>

      <div className="ai-box">
        <p className="about-text">
          I'm a full-stack developer with a background in songwriting, real
          estate, and code. I've been a working songwriter in Nashville for over
          a decade with a studio here in town and records on New West, Aerobic
          International, and Chowtown. Before pivoting to development I worked
          in real estate, holding a broker's license from 2021 to 2024. For the
          past two years I've been freelancing as a developer, building and
          maintaining websites for clients across music, real estate, and small
          businesses, owning projects from brief to launch. Reading rooms,
          managing expectations, and taking full ownership of outcomes has been
          the through-line of my career.
        </p>
        <p className="about-text">
          React is where I feel most at home on the technical side. I build
          full-stack web applications using React, Node.js, and PostgreSQL,
          alongside CMS platforms like Squarespace and Shopify when clients need
          them. Lately I've been expanding into deployment with AWS and
          exploring 3D rendering with Blender, mostly out of curiosity but
          increasingly showing up in my work.
        </p>
      </div>
    </section>
  );
}

export default About;
