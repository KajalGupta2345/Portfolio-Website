import './Education.css'

const RESUME =
  'https://drive.google.com/file/d/16YvtV_S171BI5djTm9j4YgEyryzLRORP/view'

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Sitamarhi Institute of Technology',
    location: 'Sitamarhi, Bihar',
    period: '2022 – 2026',
    cgpa: '8.67 / 10',
    status: 'Completed',
    details: [
      'Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Computer Networks',
      'Completed multiple certification programs alongside academics',
      'Focused on full-stack development as elective areas',
    ],
  },
]

const experience = [
  {
    role: 'Web Development Intern',
    company: 'CodeSoft',
    type: 'Remote',
    period: 'Dec 2023 – Jan 2024',
    points: [
      'Built responsive interfaces using HTML5, CSS3 (Flexbox/Grid), Bootstrap 5, and Vanilla JavaScript',
      'Developed interactive UI components — calculators, form validation modules, and landing pages',
      'Optimized media assets, reducing page load time by 40–60%',
    ],
  },

  {
    role: 'Full Stack Developer Intern',
    company: 'Invigo Infotech',
    type: 'Remote',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB',
      'Built responsive user interfaces and integrated REST APIs for seamless frontend-backend communication',
      'Collaborated with the development team using Git/GitHub and followed industry-standard development practices',
    ],
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__header fade-in">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Experience</h2>

          <div style={{ marginTop: '1rem' }}>
            <a
              href={RESUME}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-accent)',
                textDecoration: 'none',
                border: '1px solid var(--color-accent)',
                padding: '8px 18px',
                borderRadius: '6px',
              }}
            >
              📄 View Resume
            </a>
          </div>
        </div>

        <div className="education__layout">
          {/* Education */}
          <div className="education__col fade-in">
            <h3 className="education__col-title">
              <span className="education__col-icon">🎓</span>
              Education
            </h3>

            <div className="edu-timeline">
              {education.map((item, i) => (
                <div key={i} className="edu-card">
                  <div className="edu-card__header">
                    <div>
                      <h4 className="edu-card__degree">{item.degree}</h4>
                      <p className="edu-card__institution">
                        {item.institution}
                      </p>
                      <p className="edu-card__location">{item.location}</p>
                    </div>

                    <div className="edu-card__right">
                      <span className="edu-card__period">{item.period}</span>
                      <span className="edu-card__cgpa">
                        CGPA: {item.cgpa}
                      </span>

                      {item.status && (
                        <span
                          style={{
                            fontSize: '11px',
                            color: '#3B6D11',
                            background: '#EAF3DE',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            fontWeight: 500,
                          }}
                        >
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="edu-card__details">
                    {item.details.map((d, j) => (
                      <li key={j} className="edu-card__detail">
                        <span className="edu-card__dot"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="education__col fade-in fade-in-delay-2">
            <h3 className="education__col-title">
              <span className="education__col-icon">💼</span>
              Experience
            </h3>

            <div className="edu-timeline">
              {experience.map((item, i) => (
                <div key={i} className="edu-card edu-card--exp">
                  <div className="edu-card__header">
                    <div>
                      <h4 className="edu-card__degree">{item.role}</h4>

                      <p className="edu-card__institution">
                        {item.company}
                        <span className="edu-card__type">
                          {' '}
                          • {item.type}
                        </span>
                      </p>
                    </div>

                    <span className="edu-card__period">{item.period}</span>
                  </div>

                  <ul className="edu-card__details">
                    {item.points.map((p, j) => (
                      <li key={j} className="edu-card__detail">
                        <span className="edu-card__dot"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
