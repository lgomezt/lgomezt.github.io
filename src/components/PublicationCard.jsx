import './PublicationCard.css'
import { Link } from 'react-router-dom'
import { parseMarkdown } from '../utils/markdown'

function PublicationCard({ publication, isReversed = false }) {
  const getLinkIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'doi': return '🔗';
      case 'video': return '🎥';
      case 'talk': return '🎤';
      case 'blog': return '📝';
      case 'code': return '💻';
      default: return '🔗';
    }
  };

  // Highlight author name (Lucas Gómez-Tobón or Gómez Tobón, Lucas)
  const highlightAuthor = (authors) => {
    if (!authors) return null;
    
    // Patterns to match: "Gómez Tobón, Lucas", "Gómez-Tobón, Lucas", "Lucas Gómez-Tobón", "Lucas Gómez Tobón"
    const patterns = [
      /(Gómez[\s-]?Tobón,?\s*Lucas)/gi,
      /(Lucas\s+Gómez[\s-]?Tobón)/gi,
    ];
    
    const parts = [];
    let lastIndex = 0;
    let foundMatch = false;
    
    // Find all matches
    const matches = [];
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(authors)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0]
        });
      }
    });
    
    // Sort matches by start position
    matches.sort((a, b) => a.start - b.start);
    
    // Remove overlapping matches (keep first)
    const nonOverlapping = [];
    matches.forEach(match => {
      if (nonOverlapping.length === 0 || match.start >= nonOverlapping[nonOverlapping.length - 1].end) {
        nonOverlapping.push(match);
      }
    });
    
    // Build React elements
    nonOverlapping.forEach((match, idx) => {
      // Add text before match
      if (match.start > lastIndex) {
        parts.push(authors.substring(lastIndex, match.start));
      }
      
      // Add highlighted match
      parts.push(
        <strong key={`author-${idx}`} className="author-highlight">
          {match.text}
        </strong>
      );
      
      lastIndex = match.end;
      foundMatch = true;
    });
    
    // Add remaining text
    if (lastIndex < authors.length) {
      parts.push(authors.substring(lastIndex));
    }
    
    return foundMatch ? parts : authors;
  };

  // Get available links (non-empty)
  // Handles both old format (array) and new format (object)
  const getAvailableLinks = () => {
    if (!publication.links) return [];
    
    // New format: object with doi, pdf, video, talk, blog, code
    if (typeof publication.links === 'object' && !Array.isArray(publication.links)) {
      const linkTypes = ['doi', 'pdf', 'video', 'talk', 'blog', 'code'];
      return linkTypes
        .filter(type => publication.links[type] && publication.links[type].trim() !== '')
        .map(type => ({
          type,
          url: publication.links[type]
        }));
    }
    
    // Old format: array of { type, url }
    if (Array.isArray(publication.links)) {
      return publication.links.filter(link => link && link.url);
    }
    
    return [];
  };

  const availableLinks = getAvailableLinks();

  return (
    <div className={`publication-card ${isReversed ? 'reversed' : ''}`}>
      <div className="publication-content">
        <div className={`publication-layout ${isReversed ? 'flex-row-reverse' : ''}`}>
          <div className="publication-image-container">
            <img 
              src={publication.image} 
              alt={publication.title}
              className="publication-image"
            />
          </div>
          <div className="publication-text">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
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
            <h3 className="publication-title">{publication.title}</h3>
            {publication.authors && (
              <p className="publication-authors">
                {highlightAuthor(publication.authors)}
              </p>
            )}
            {(publication.shortAbstract || publication.abstract || publication.description) && (
              <p className="publication-abstract">
                {parseMarkdown(publication.shortAbstract || publication.abstract || publication.description)}
              </p>
            )}
            {publication.tags && publication.tags.length > 0 && (
              <div className="publication-tags">
                {publication.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
            {availableLinks.length > 0 && (
              <div className="publication-links">
                {availableLinks.map((link, index) => {
                  // Blog links are internal (if they don't start with http), others are external
                  const isInternal = link.type === 'blog' && !link.url.startsWith('http');
                  
                  if (isInternal) {
                    return (
                      <Link
                        key={index}
                        to={link.url}
                        className="link-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{getLinkIcon(link.type)}</span>
                        <span>{link.type.toUpperCase()}</span>
                      </Link>
                    );
                  }
                  
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{getLinkIcon(link.type)}</span>
                      <span>{" " + link.type.toUpperCase()}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicationCard

