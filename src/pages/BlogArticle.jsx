import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'
import Footer from '../components/Footer'
import { PUBLICATIONS, PROJECTS } from '../constants/data'
import { parseMarkdown } from '../utils/markdown'
import './BlogArticle.css'

function BlogArticle() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Find the publication or project by id (the id in the URL should match the id)
  // First check publications, then projects
  const publication = PUBLICATIONS.find(pub => 
    pub.id === id || 
    (pub.links && pub.links.blog && pub.links.blog === `/blog/${id}`)
  ) || PROJECTS.find(proj => proj.id === id)
  
  if (!publication) {
    return (
      <div className="blog-article-page min-h-screen bg-light-bg">
        <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="blog-article-page min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        
        <article className="blog-article">
          <header className="blog-header">
            <div className="blog-badges">
              {publication.conference && (
                <div className="conference-badge">
                  {publication.conference} {publication.year && publication.year}
                </div>
              )}
              {!publication.conference && publication.year && (
                <div className="conference-badge">{publication.year}</div>
              )}
              {publication.status === 'in-progress' && (
                <div className="conference-badge" style={{ background: '#f59e0b' }}>
                  Work in Progress
                </div>
              )}
            </div>
            
            <h1 className="blog-title">{publication.title}</h1>
            
            {publication.authors && (
              <p className="blog-authors">
                {publication.authors.split(', ').map((author, index, array) => {
                  const isHighlighted = /Gómez[\s-]?Tobón|Lucas\s+Gómez/i.test(author);
                  return (
                    <span key={index}>
                      {isHighlighted ? (
                        <strong className="author-highlight">{author}</strong>
                      ) : (
                        author
                      )}
                      {index < array.length - 1 && ', '}
                    </span>
                  );
                })}
              </p>
            )}
            
            {publication.tags && publication.tags.length > 0 && (
              <div className="blog-tags">
                {publication.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </header>

          {publication.image && (
            <div className="blog-image-container">
              <img 
                src={publication.image} 
                alt={publication.title}
                className="blog-image"
              />
            </div>
          )}

          <div className="blog-content">
            {publication.longAbstract && (
              <div className="blog-abstract">
                <h2>Abstract</h2>
                <div className="abstract-content">
                  {parseMarkdown(publication.longAbstract)}
                </div>
              </div>
            )}
            
            {/* Blog article content will be loaded from the articles folder */}
            <div className="blog-body">
              <ArticleContent id={id} />
            </div>
          </div>

          {publication.links && 
           typeof publication.links === 'object' && 
           !Array.isArray(publication.links) && (
            <div className="blog-links">
              <h3>Links</h3>
              <div className="publication-links">
                {publication.links.doi && (
                  <a
                    href={publication.links.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>🔗</span>
                    <span>DOI</span>
                  </a>
                )}
                {publication.links.pdf && (
                  <a
                    href={publication.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>📄</span>
                    <span>PDF</span>
                  </a>
                )}
                {publication.links.code && (
                  <a
                    href={publication.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>💻</span>
                    <span>CODE</span>
                  </a>
                )}
                {publication.links.video && (
                  <a
                    href={publication.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>🎥</span>
                    <span>VIDEO</span>
                  </a>
                )}
                {publication.links.talk && (
                  <a
                    href={publication.links.talk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>🎤</span>
                    <span>TALK</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}

// Component to dynamically load article content
function ArticleContent({ id }) {
  const [ArticleComponent, setArticleComponent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Try to dynamically import the article component
    const loadArticle = async () => {
      try {
        // Try to import the article file
        const articleModule = await import(`../articles/${id}.jsx`)
        setArticleComponent(() => articleModule.default)
      } catch (err) {
        // If article file doesn't exist, show placeholder
        console.log(`Article file for ${id} not found. Create src/articles/${id}.jsx to add content.`)
        setError(true)
      }
    }

    loadArticle()
  }, [id])

  if (error) {
    return (
      <div className="blog-placeholder">
        <p>
          Article content not found. Create a file at <code>src/articles/{id}.jsx</code> to add content.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
          You can copy <code>src/articles/example-article.jsx</code> as a template.
        </p>
      </div>
    )
  }

  if (!ArticleComponent) {
    return (
      <div className="blog-placeholder">
        <p>Loading article...</p>
      </div>
    )
  }

  return (
    <Suspense fallback={<div className="blog-placeholder">Loading article...</div>}>
      <ArticleComponent />
    </Suspense>
  )
}

export default BlogArticle

