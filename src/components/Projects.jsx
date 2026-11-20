import { projects } from '../data.js';

export default function Projects() {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <header className="project-head">
                <h3 className="project-title">
                  {project.title}
                  {project.tag && <span className="badge">{project.tag}</span>}
                </h3>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </header>

              {project.context && <p className="project-context">{project.context}</p>}
              <p className="body-text project-summary">{project.summary}</p>

              <ul className="bullet-list">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="project-tech">
                <span className="tech-label">Technologies:</span>{' '}
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
