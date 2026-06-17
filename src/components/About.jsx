import './About.css'

const LEETCODE = 'https://leetcode.com/u/Kajal_Gupta_85/'
const GFG = 'https://www.geeksforgeeks.org/profile/kk234xww3'
const RESUME = 'https://drive.google.com/file/d/16YvtV_S171BI5djTm9j4YgEyryzLRORP/view'

const highlights = [
  {
    icon: '⚡',
    title: 'Backend Architecture',
    desc: 'Built production-grade microservices with Node.js, deployed on AWS ECS Fargate with event-driven messaging.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Integrated LangChain, RAG pipelines, and vector databases to build context-aware AI assistants.',
  },
  {
    icon: '🧩',
    title: 'Full Stack',
    desc: 'Comfortable across the whole stack — from React frontends to REST APIs to database design.',
  },
  {
    icon: '📐',
    title: 'Problem Solver',
    desc: 'Solved 200+ DSA problems. I enjoy breaking down complex problems into clean, efficient solutions.',
  },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__layout">
          <div className="about__text fade-in">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              B.Tech CSE Graduate.<br />
              <span className="about__title-accent">Full Stack Developer.</span>
            </h2>
            <p className="about__para">
              I'm Kajal Kumari, a Computer Science & Engineering graduate from Sitamarhi
              Institute of Technology (2026, CGPA 8.67). I love building things
              that work well — whether that's a microservices backend with proper test
              coverage, a real-time chat app, or an AI-powered assistant.
            </p>
            <p className="about__para">
              My focus is backend systems and distributed architecture, but I
              genuinely enjoy frontend too. I've been diving deep into AI/GenAI tooling —
              LangChain, RAG, vector databases — because I think the most interesting
              engineering challenges of the next few years live at that intersection.
            </p>
            <p className="about__para">
              I'm actively looking for entry-level full-stack, backend, or software
              engineering roles where I can ship real code and keep learning fast.
            </p>

            <div className="about__quick-info">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Bihar, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <a href="mailto:kk2347994@gmail.com" className="about__info-value about__info-link">
                  kk2347994@gmail.com
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">LeetCode</span>
                <a href={LEETCODE} target="_blank" rel="noreferrer" className="about__info-value about__info-link">
                  Kajal_Gupta_85 →
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">GeeksforGeeks</span>
                <a href={GFG} target="_blank" rel="noreferrer" className="about__info-value about__info-link">
                  kk234xww3 →
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Resume</span>
                <a href={RESUME} target="_blank" rel="noreferrer" className="about__info-value about__info-link">
                  View PDF →
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Available</span>
                <span className="about__info-value about__info-available">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div key={i} className={`about__highlight-card fade-in fade-in-delay-${i + 1}`}>
                <span className="about__highlight-icon">{item.icon}</span>
                <div>
                  <h3 className="about__highlight-title">{item.title}</h3>
                  <p className="about__highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
