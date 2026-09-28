import { profile, education, leadership, certifications } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="kicker mono">about</span>
          <h1>The pieces have to connect.</h1>
          <p className="lede">
            A bit about my background, how I got into development, and what I'm doing outside of
            code.
          </p>
        </div>
      </div>

      <section className="about-bio">
        <div className="container about-bio__grid">
          <div className="about-bio__text">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <aside className="about-facts">
            <h2 className="mono">Facts</h2>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{profile.focus}</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Building auth flows at Inspire Spaces</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="about-education">
        <div className="container">
          <h2>Education</h2>
          <ul className="edu-list">
            {education.map((item) => (
              <li key={item.title} className="edu-list__item">
                <span className="mono edu-list__period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-leadership">
        <div className="container">
          <h2>Leadership &amp; community</h2>
          <ul className="edu-list">
            {leadership.map((item) => (
              <li key={item.role} className="edu-list__item">
                <span className="mono edu-list__period">{item.period}</span>
                <div>
                  <h3>
                    {item.role} — {item.org}
                  </h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          {certifications.length > 0 && (
            <div className="about-certs">
              <h3 className="mono">Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
