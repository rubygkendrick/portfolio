import './Carousel.css'

const experience = [
  {
    date: '2023 — Present',
    title: 'Freelance Developer & Creative Consultant',
    org: 'Nashville, TN',
    bullets: [
      'Own the full client relationship: scoping, communication, delivery, and iteration',
      'Build and maintain production websites using React, Squarespace 7.1, and Shopify',
      'Execute the annual Defy Film Festival website including custom fonts, 52-film grid, and full email campaigns',
      'Build and maintain an ongoing site for a college consulting client across multiple project phases',
      'Built a custom donation-at-checkout cart for a nonprofit, increasing overall revenue',
    ]
  },
  {
    date: '2019 — 2024',
    title: 'Affiliate Broker & Brand/Web Developer',
    org: 'simpliHOM | Compass',
    bullets: [
      'Managed a real estate CRM for a high-volume team, owning lead tracking and pipeline communication',
      'Designed and maintained the team website, branded materials, and email marketing campaigns',
      'Generated leads through strategic outreach, digital marketing, and community networking',
      'Created listing-level visual branding that differentiated properties in a competitive market',
    ]
  },
  {
    date: '2011 — 2022',
    title: 'Independent Artist & Producer',
    org: 'New West Records | Aerobic International | BMI',
    bullets: [
      'Released 4 full-length albums and led multiple national tours',
      'Ran all digital operations: website, email marketing, crowdfunding, and social content',
      'Collaborated with visual, audio, and label teams; directed music videos and oversaw film/TV licensing',
      'Built and retained a loyal audience for over a decade through direct communication',
    ]
  },
]

function ExperienceCarousel() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">Experience</div>
        <div className="section-rule"></div>
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
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceCarousel