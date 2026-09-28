import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono footer__line">
          {profile.name} — {profile.location}
        </p>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer__copy mono">© {year}</p>
      </div>
    </footer>
  )
}
