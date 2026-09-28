import type { Project } from '../data/profile'
import './ProjectCard.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__bar">
        <span className="mono project-card__file">{project.slug}.tsx</span>
        <span className="mono project-card__period">{project.period}</span>
      </div>
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="project-card__details">
          {project.details.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <ul className="project-card__stack">
          {project.stack.map((tech) => (
            <li key={tech} className="mono">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
