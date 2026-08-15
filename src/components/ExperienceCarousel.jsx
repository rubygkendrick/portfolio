import "./Carousel.css";

const experience = [
  {
    date: "2023 — Present",
    title: "Freelance Developer",
    org: "Nashville, TN",
    bullets: [
      "Own the full client relationship across a recurring roster of clients: scoping, communication, delivery, and iteration",
      "Build and maintain production websites using React, Squarespace 7.1, and Shopify; write custom HTML, CSS, and JavaScript to solve problems the platforms can't handle natively",
      "Execute the annual Defy Film Festival website each year, including self-hosted custom fonts, a 52-film grid built around platform limits, custom mobile carousel behavior, and full email marketing campaigns via GMass",
      "Build and maintain an ongoing Squarespace site for a college consulting client using heavy CSS and JavaScript code injection to achieve a fully custom design, navigating multiple rounds of iterative feedback, scope decisions, and content changes",
      "Updated and refreshed an existing client website for Girls Write, a nonprofit songwriting organization for teen girls",
    ],
  },
  {
    date: "2019 — 2024",
    title: "Affiliate Broker | Brand & Web Developer",
    org: "simpliHOM | Compass",
    bullets: [
      "Managed a real estate CRM for a high-volume team, owning lead tracking, pipeline communication, and contact hygiene",
      "Designed and maintained the team website, branded materials, and email marketing campaigns, directly responsible for the digital face of the business",
      "Generated leads through strategic outreach, digital marketing, and community networking",
      "Created listing-level visual branding that differentiated properties in a competitive market",
    ],
  },
  {
    date: "2011 — 2022",
    title: "Independent Artist & Producer",
    org: "New West Records | Aerobic International | BMI",
    bullets: [
      "Released 4 full-length albums and led multiple national tours, handling logistics, budgets, and on-the-ground problem-solving in real time",
      "Ran all digital operations: website, email marketing, crowdfunding campaigns, and social content",
      "Collaborated with visual, audio, and label teams across time zones and disciplines; directed music videos and oversaw film/TV licensing",
      "Built and retained a loyal audience for over a decade through direct communication and genuine follow-through",
    ],
  },
];

function ExperienceCarousel() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">Experience</div>
        <div className="section-rule">
          <div className="stripe-pink"></div>
          <div className="stripe-red"></div>
          <div className="stripe-yellow"></div>
          <div className="stripe-teal"></div>
        </div>
      </div>
      <div className="exp-stack">
        {experience.map((job) => (
          <div key={job.date} className="exp-card">
            <div className="exp-card-header">
              <div>
                <div className="exp-title">{job.title}</div>
                <div className="exp-org">{job.org}</div>
              </div>
              <div className="exp-date">{job.date}</div>
            </div>
            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceCarousel;
