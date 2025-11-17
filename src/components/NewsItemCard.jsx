import './NewsItemCard.css'
import { parseMarkdown } from '../utils/markdown'

function NewsItemCard({ item, isFirst = false, isClickable = false }) {
  // Format date to display full date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString; // Fallback to original if parsing fails
    }
  };

  return (
    <div className={`news-item ${isFirst ? 'first' : ''} ${isClickable ? 'clickable' : ''}`}>
      <div className="news-timeline">
        <div className="news-dot"></div>
      </div>
      <div className="news-content">
        <div className="news-date">{formatDate(item.date)}</div>
        <div className="news-text">{parseMarkdown(item.content)}</div>
      </div>
    </div>
  )
}

export default NewsItemCard

