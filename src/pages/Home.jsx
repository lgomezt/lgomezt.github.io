import { Link } from 'react-router-dom'
import PublicationCard from '../components/PublicationCard'
import ProjectCard from '../components/ProjectCard'
import NewsItemCard from '../components/NewsItemCard'
import Footer from '../components/Footer'
import { PUBLICATIONS, PROJECTS, NEWS } from '../constants/data'
import './Home.css'

// Dynamically get all available article files
// This uses Vite's import.meta.glob to discover all .jsx files in the articles folder
const articleModules = import.meta.glob('../articles/*.jsx', { eager: false })
// Extract article IDs from file paths (e.g., '../articles/teaching-the-agent.jsx' -> 'teaching-the-agent')
const getAvailableArticleIds = () => {
  return Object.keys(articleModules).map(path => {
    const match = path.match(/\/articles\/(.+)\.jsx$/)
    return match ? match[1] : null
  }).filter(Boolean)
}

function Home() {
  const availableArticleIds = getAvailableArticleIds()
  const Section = ({ id, title, children }) => (
    <section id={id} className="section py-16 sm:py-20">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  )

  return (
    <div className="home min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6">
        {/* Main Content Section */}
        <section className="home-main-section py-8 sm:py-12 md:py-16">
          <div className="home-content-wrapper">
            {/* Image Side */}
            <div className="home-image-container">
              <img 
                src="/Lucas_frailejones.png" 
                alt="Lucas Gómez-Tobón" 
                className="home-image"
              />
              {/* Contact Info Below Image */}
              <div className="home-contact-info">
                <div> Feel free to contact me via: </div>
    
                <a 
                  href="https://www.linkedin.com/in/lucasgomeztobon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="home-contact-icon"
                  aria-label="LinkedIn"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:lgomezto@uwaterloo.ca"
                  className="home-contact-icon"
                  aria-label="Email"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/lgomezt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="home-contact-icon"
                  aria-label="GitHub"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Name and Summary Side */}
            <div className="home-text-container">
              <h1 className="home-name">
                Lucas Gómez-Tobón
              </h1>
              <p className="home-tagline">
                Research for the Future of Education and Work
              </p>
              <div className="home-summary">
                <p>
                  I'm a second year PhD student in CS at University of Waterloo. Here are some of the projects I'm currently working on:
                </p>
              </div>
              {/* Research Areas Cards */}
              <div className="home-research-areas">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PROJECTS.map((proj) => {
                    // Check if an article exists for this project by checking if the article ID exists
                    const hasArticle = availableArticleIds.includes(proj.id);
                    const blogPath = hasArticle ? `/blog/${proj.id}` : null;
                    
                    const CardWrapper = blogPath ? Link : 'div';
                    const wrapperProps = blogPath 
                      ? { to: blogPath, className: 'block' }
                      : { className: 'block' };
                    
                    return (
                      <CardWrapper key={proj.id} {...wrapperProps}>
                        <ProjectCard project={proj} />
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="w-full border-t border-slate-200 my-16"></div>

        {/* News */}
        <Section id="news" title="Latest News">
          <div className="max-w-2xl mx-auto">
            <div className="relative border-l-2 border-slate-200">
              {[...NEWS]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((item, index) => {
                  const hasBlogLink = item.blog && item.blog.trim() !== '';
                  const blogPath = hasBlogLink ? item.blog : null;
                  
                  const CardWrapper = blogPath ? Link : 'div';
                  const wrapperProps = blogPath 
                    ? { to: blogPath, className: 'block' }
                    : { className: 'block' };
                  
                  return (
                    <CardWrapper key={item.id} {...wrapperProps}>
                      <NewsItemCard item={item} isFirst={index === 0} isClickable={!!blogPath} />
                    </CardWrapper>
                  );
                })}
            </div>
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" title="Selected Publications">
          <div className="space-y-12">
            {PUBLICATIONS.map((pub, index) => {
              // Check if blog link exists (new format: object) and is internal
              const hasBlogLink = pub.links && 
                typeof pub.links === 'object' && 
                !Array.isArray(pub.links) &&
                pub.links.blog && 
                pub.links.blog.trim() !== '';
              
              // If blog link is internal (doesn't start with http), use it. Otherwise use /blog/:id
              const blogPath = hasBlogLink 
                ? (pub.links.blog.startsWith('http') ? null : pub.links.blog)
                : null;
              
              const CardWrapper = blogPath ? Link : 'div';
              const wrapperProps = blogPath 
                ? { to: blogPath, className: 'block' }
                : { className: 'block' };
              
              return (
                <CardWrapper key={pub.id} {...wrapperProps}>
                  <PublicationCard publication={pub} isReversed={index % 2 !== 0} />
                </CardWrapper>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
