import './Blog.css'

// No posts yet — add entries here as you write them, e.g.:
// { slug: 'my-first-post', title: '...', date: '2026-01-01', excerpt: '...' }
type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

const posts: Post[] = []

export default function Blog() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="kicker mono">blog</span>
          <h1>Notes from building things.</h1>
          <p className="lede">
            Write-ups on projects, problems I've worked through, and what I'm learning.
          </p>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <span className="mono blog-empty__tag">git log --oneline</span>
              <p>Nothing published yet. First post is on the way.</p>
              <p className="blog-empty__hint">
                Add entries to <code className="mono">src/pages/Blog.tsx</code> once you're ready
                to publish.
              </p>
            </div>
          ) : (
            <ul className="blog-list">
              {posts.map((post) => (
                <li key={post.slug} className="blog-list__item">
                  <span className="mono blog-list__date">{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
