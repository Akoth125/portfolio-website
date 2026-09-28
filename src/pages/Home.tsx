import { Link } from 'react-router-dom'
import { profile, projects, skills } from '../data/profile'
import ProjectCard from '../components/ProjectCard'
import './Home.css'

export default function Home() {
  const featured = projects.slice(0, 2)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__status mono">
            <span className="hero__dot" aria-hidden="true" />
            status: {profile.currentFocus}
          </div>

          <h1 className="hero__title">
            {profile.name}
            <span className="hero__role">
              {profile.role} — {profile.focus}
            </span>
          </h1>

          <p className="hero__lede">{profile.bio[0]}</p>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View projects
            </Link>
            <Link to="/resume" className="btn btn--ghost">
              Resume
            </Link>
          </div>

          <div className="hero__meta mono">
            <span>{profile.location}</span>
            <span>·</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/Akoth125
            </a>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="container">
          <div className="section-head">
            <h2>Recent work</h2>
            <Link to="/projects" className="section-head__link">
              All projects →
            </Link>
          </div>
          <div className="home-projects__grid">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-skills">
        <div className="container">
          <div className="section-head">
            <h2>Core stack</h2>
            <Link to="/skills" className="section-head__link">
              Full breakdown →
            </Link>
          </div>
          <div className="home-skills__row">
            {skills.slice(0, 4).map((group) => (
              <div key={group.category} className="home-skills__group">
                <h3 className="mono">{group.category}</h3>
                <p>{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
