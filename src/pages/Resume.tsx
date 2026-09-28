import { experience, education } from '../data/profile'
import Timeline from '../components/Timeline'
import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className="page-head resume-head">
        <div className="container resume-head__row">
          <div>
            <span className="kicker mono">resume</span>
            <h1>Experience, in order.</h1>
            <p className="lede">The full work history behind the projects.</p>
          </div>
          <a className="btn btn--primary btn--dark" href="/resume.pdf" download>
            Download PDF
          </a>
        </div>
      </div>

      <section className="resume-timeline">
        <div className="container">
          <h2>Experience</h2>
          <Timeline items={experience} />
        </div>
      </section>

      <section className="resume-education">
        <div className="container">
          <h2>Education</h2>
          <ul className="resume-education__list">
            {education.map((item) => (
              <li key={item.title}>
                <span className="mono">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
