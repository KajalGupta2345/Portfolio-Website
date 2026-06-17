import './Projects.css'

const GITHUB_PROFILE = 'https://github.com/KajalGupta2345'

const projects = [
  {
    title: 'Online Marketplace – Microservices Backend',
    tagline: 'Production-grade distributed backend with AI shopping assistant',
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'RabbitMQ', 'LangChain', 'Docker', 'AWS ECS'],
    highlights: [
      '9 independently deployable microservices (Auth, Product, Cart, Order, Payment, Notification, Seller, AI Buddy) with separate databases per service',
      'AI shopping assistant using LangChain, Gemini & LangGraph with real-time chat via Socket.io',
      'Event-driven inter-service messaging with RabbitMQ for async workflows (order created, email notifications)',
      'JWT auth with Redis-based token blacklisting for stateless yet revocable sessions',
      '85%+ test coverage on Auth service using Jest & Supertest with in-memory MongoDB',
      'Containerized all services with Docker, deployed on AWS ECS Fargate via ECR',
    ],
    github: 'https://github.com/KajalGupta2345/Online-Market-Place-Using-Microservices-Architecture',
    live: null,
    badge: 'Featured',
    badgeColor: '#7c6af7',
  },
  {
    title: 'Real-Time AI Chatbot With Memory System',
    tagline: 'MERN chatbot with short-term + long-term contextual memory',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Pinecone', 'JWT'],
    highlights: [
      'Short-term memory via MongoDB and long-term memory via Pinecone for contextual multi-turn conversations',
      'RAG pipeline using Pinecone — storing conversation embeddings for semantic search & context-aware responses',
      'Real-time bi-directional messaging via Socket.IO with JWT session auth and secure cookie management',
      'Responsive React.js & Tailwind CSS frontend with optimized component rendering',
    ],
    github: 'https://github.com/KajalGupta2345/Real-Time-Chat-Application-With-Memory-System',
    live: null,
    badge: 'AI / GenAI',
    badgeColor: '#f76aab',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header fade-in">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc">
            Two substantial, deployed projects. Both are on GitHub — feel free to
            look at the code.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <div key={i} className={`project-card fade-in fade-in-delay-${i + 1}`}>
              <div className="project-card__top">
                <div className="project-card__meta">
                  <span
                    className="project-card__badge"
                    style={{ '--badge-color': project.badgeColor }}
                  >
                    {project.badge}
                  </span>
                  <div className="project-card__links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__icon-btn"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__icon-btn"
                        aria-label="Live demo"
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
              </div>

              <ul className="project-card__highlights">
                {project.highlights.map((point, j) => (
                  <li key={j} className="project-card__highlight">
                    <span className="project-card__bullet" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-card__tech">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta fade-in">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="projects__github-link"
          >
            <GithubIcon />
            See all repositories on GitHub
            <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default Projects
