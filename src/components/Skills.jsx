import { useState } from 'react'
import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    color: '#4dd9c0',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'SCSS'],
  },
  {
    label: 'Backend',
    color: '#7c6af7',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth', 'RabbitMQ'],
  },
  {
    label: 'Databases',
    color: '#f7a26a',
    skills: ['MongoDB', 'SQL', 'Redis', 'Pinecone (Vector DB)'],
  },
  {
    label: 'DevOps & Cloud',
    color: '#6aabf7',
    skills: ['Docker', 'AWS ECS Fargate', 'AWS ECR', 'Git', 'GitHub', 'Render', 'Postman'],
  },
  {
    label: 'AI & GenAI',
    color: '#f76aab',
    skills: ['LangChain', 'LangGraph', 'RAG', 'LLMs', 'Gemini API', 'Vector Databases'],
  },
  {
    label: 'Languages & CS',
    color: '#a2f76a',
    skills: ['JavaScript', 'Java', 'C', 'DSA', 'OOP', 'DBMS', 'MVC', 'Microservices'],
  },
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header fade-in">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            A practical breakdown of the tools and technologies I use regularly —
            not just ones I've touched once.
          </p>
        </div>

        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`skills__card fade-in fade-in-delay-${Math.min(i + 1, 4)}${activeCategory === cat.label ? ' skills__card--active' : ''}`}
              style={{ '--cat-color': cat.color }}
              onMouseEnter={() => setActiveCategory(cat.label)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="skills__card-top">
                <span className="skills__card-dot" />
                <h3 className="skills__card-title">{cat.label}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
