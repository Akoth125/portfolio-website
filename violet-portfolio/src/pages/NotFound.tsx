import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="mono not-found__code">404</span>
      <h1>Page not found</h1>
      <p>That route doesn't exist. Try going back home.</p>
      <Link to="/" className="btn btn--primary btn--dark">
        Back to home
      </Link>
    </div>
  )
}
