import { projects } from '../data/profile'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="kicker mono">projects</span>
          <h1>Things I've built.</h1>
          <p className="lede">
            A selection of freelance and product work — from a voting platform with audit
            logging to the authentication service I'm building now.
          </p>
        </div>
      </div>

      <section className="projects-list">
        <div className="container projects-list__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
