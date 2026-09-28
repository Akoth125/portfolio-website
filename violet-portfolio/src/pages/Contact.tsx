import { profile } from '../data/profile'
// @ts-expect-error CSS is handled by the bundler and has no TypeScript declarations.
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="kicker mono">contact</span>
          <h1>Let's talk.</h1>
          <p className="lede">
            Open to junior software development roles and freelance frontend work. The fastest
            way to reach me is email.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="mono contact-card__label">Email</span>
            <span className="contact-card__value">{profile.email}</span>
          </a>
          <a className="contact-card" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <span className="mono contact-card__label">Phone</span>
            <span className="contact-card__value">{profile.phone}</span>
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="mono contact-card__label">LinkedIn</span>
            <span className="contact-card__value">violet-ongonge</span>
          </a>
          <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
            <span className="mono contact-card__label">GitHub</span>
            <span className="contact-card__value">Akoth125</span>
          </a>
          <div className="contact-card contact-card--static">
            <span className="mono contact-card__label">Location</span>
            <span className="contact-card__value">{profile.location}</span>
          </div>
        </div>
      </section>
    </>
  )
}
