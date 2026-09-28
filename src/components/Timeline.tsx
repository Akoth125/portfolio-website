import type { ExperienceItem } from '../data/profile'
import './Timeline.css'

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.role + item.org} className="timeline__item">
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <span className="mono timeline__period">{item.period}</span>
            <h3 className="timeline__role">{item.role}</h3>
            <p className="timeline__org">{item.org}</p>
            <ul className="timeline__bullets">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
