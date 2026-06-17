import './Certifications.css'

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Job Ready Cohort',
    icon: '🌐',
    color: '#7c6af7',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Job Ready Cohort',
    icon: '🧮',
    color: '#4dd9c0',
  },
  {
    title: 'DevOps Fundamentals',
    issuer: 'Job Ready Cohort',
    icon: '⚙️',
    color: '#6aabf7',
  },
  {
    title: 'Aptitude & Problem Solving',
    issuer: 'Job Ready Cohort',
    icon: '🎯',
    color: '#f7a26a',
  },
  {
    title: 'C Programming',
    issuer: 'NPTEL — Score: 75%',
    icon: '💻',
    color: '#a2f76a',
  },
  {
    title: 'Full Stack Development Training',
    issuer: 'Invigo Infotech — Score: 98%',
    icon: '🏆',
    color: '#f7d26a',
  },
]

const achievements = [
  { icon: '⚡', text: 'Solved 200+ DSA problems on LeetCode and GeeksforGeeks' },
  { icon: '🏗️', text: 'Architected and deployed an 8-service microservices system on AWS ECS Fargate' },
  { icon: '🤖', text: 'Built a production RAG pipeline with Pinecone and LangChain from scratch' },
  { icon: '📊', text: 'Achieved 85%+ test coverage on a production Auth service' },
  { icon: '🚀', text: '40–60% page load reduction through media asset optimization at CodeSoft internship' },
  { icon: '📝', text: 'Scored 98% in Full Stack Development assessment at Invigo Infotech' },
]

function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <div className="container">
        <div className="certs__header fade-in">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Certifications & Achievements</h2>
        </div>

        <div className="certs__layout">
          <div className="certs__left fade-in">
            <h3 className="certs__sub-heading">Certifications</h3>
            <div className="certs__grid">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`cert-card fade-in fade-in-delay-${Math.min(i + 1, 4)}`}
                  style={{ '--cert-color': cert.color }}
                >
                  <span className="cert-card__icon">{cert.icon}</span>
                  <div>
                    <p className="cert-card__title">{cert.title}</p>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certs__right fade-in fade-in-delay-2">
            <h3 className="certs__sub-heading">Highlights</h3>
            <div className="achievements__list">
              {achievements.map((item, i) => (
                <div key={i} className="achievement-item">
                  <span className="achievement-item__icon">{item.icon}</span>
                  <p className="achievement-item__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
