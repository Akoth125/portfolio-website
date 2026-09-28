import { skills } from '../data/profile'
import './Skills.css'

export default function Skills() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="kicker mono">skills</span>
          <h1>What I work with.</h1>
          <p className="lede">
            Grouped by how I actually use them day to day — from building interfaces to
            connecting them to real data.
          </p>
        </div>
      </div>

      <section className="skills-grid-section">
        <div className="container skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h2>{group.category}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skill-card__tick" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
