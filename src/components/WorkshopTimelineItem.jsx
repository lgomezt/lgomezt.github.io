import './WorkshopTimelineItem.css'

function WorkshopTimelineItem({ item, isLast = false }) {
  // Parse title to extract conference name (before colon) and subtitle (after colon)
  const titleParts = item.title.split(':')
  const conferenceName = titleParts[0]?.trim() || item.title
  const subtitle = titleParts.slice(1).join(':').trim()

  return (
    <div className="workshop-timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-date">{item.date}</div>
        <h4 className="timeline-title">
          {item.url ? (
            <>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="timeline-title-link"
              >
                {conferenceName}
              </a>
              {subtitle && `: ${subtitle}`}
            </>
          ) : (
            item.title
          )}
        </h4>
        <div className="timeline-location">{item.location}</div>
        {item.description && (
          <p className="timeline-description">{item.description}</p>
        )}
        {item.pdf && (
          <a 
            href={item.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="timeline-link"
          >
            📄 View position paper →
          </a>
        )}
      </div>
    </div>
  )
}

export default WorkshopTimelineItem

