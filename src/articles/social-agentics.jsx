import { parseMarkdown } from '../utils/markdown'
import PublicationCard from '../components/PublicationCard'
import WorkshopTimelineItem from '../components/WorkshopTimelineItem'

export default function SocialAgenticsArticle() {
  // Related publications (using PublicationCard template)
  const relatedPublications = [
    // Add publications related to social agentics here when available
    // Example format:
    // {
    //   id: 'publication-id',
    //   image: '/path/to/image.png',
    //   conference: 'Conference Name',
    //   title: 'Publication Title',
    //   shortAbstract: 'Brief description',
    //   tags: ['tag1', 'tag2'],
    //   links: { doi: '', pdf: '', video: '', blog: '', code: '' },
    //   authors: 'Author names',
    //   year: 2025,
    //   status: 'published',
    // }
  ]

  // Workshop presentations and participation timeline
  const workshopTimeline = [
    {
      date: 'Jul 23, 2025',
      title: 'COMPASS 2025: 8th ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies',
      location: 'University of Toronto, Toronto, Canada',
      description: 'Positional paper presentation: How Work Really Gets Done: Activity Theory and Persona-Based Social Reasoning for AI Agents.',
      url: 'https://dl.acm.org/doi/10.1145/3715335.3737687#:~:text=This%20one%2Dday%20workshop%20invites,specific%20social%20and%20organizational%20contexts.',
      pdf: '/blogs/social-agentics/HowWorkReallyGetsDone_PositionPaper_COMPASS2025_SocialAgentics.pdf'
    },
    {
      date: 'Nov 12, 2025',
      title: 'IEEE CASCON 2025: 35th IEEE International Conference on Collaborative Advances in Software and Computing',
      location: 'Second Student Centre, York University, Toronto, Canada',
      description: 'Presented the Coordination Laboratory demo at the Social Agentic AI (SAI) track.',
      url: 'https://conf.researchr.org/home/cascon-2025'
    }
  ]
  return (
    <div className="article-content">
    
    <p>
    In the near future, everyone will have an AI agent working as their secretary. But how will they deal with
    {parseMarkdown("** social ambiguity**")}? Imagine you are in the middle of a planned weekend trip and a colleague calls 
    to ask for an urgent meeting. What should an agent do in this type of scenario? 
    {parseMarkdown("** There is no ground truth generalizable to everyone; the answer is shaped by personal values and context.**")} 
    </p>
    <div className="notion-callout notion-callout-yellow">
      <div className="notion-callout-icon"> ✏️ </div>
      <div className="notion-callout-content">
        Our goal is to equip agents with a framework to learn and refine their social understanding through work interactions.
      </div>
    </div>
    <div>
      <p>
      {parseMarkdown("Inspired by **MemGPT** and **Activity Theory**, our approach builds a framework that allows agents to map the user's workplace goals and dynamically update the personas of the colleagues with whom they interact.")}
      </p>
      <div className="blog-image-container">
        <img className="blog-image" src="/blogs/social-agentics/activity_theory.png" alt="activity theory map" />
      </div>
    </div>
    
    <p>
    As a test bed, we are starting with the simplest strategic game inside a professional setting: scheduling with incomplete information.
    </p>

    <p>Our first demo is the <span className="font-bold">Coordination Laboratory</span>.</p>

    <div className="testbeds-container">
      <div className="testbed-box">
        <h3 className="testbed-title">Coordination Laboratory</h3>
        <div className="testbed-content">
          <div className="testbed-text">
            <p>
            We explore Human-to-Agent interaction testing how well a secretary agent represents a user's scheduling decisions across 
            different socially nuanced scenarios.
            </p>
            <p>
            Additionally, we developed an Agent-to-Agent playground inspired by characters from <span className="italic">The Office </span> 
            to explore how agents representing <span className="italic">Michael Scott</span> and <span className="italic">Dwight Schrute</span> would 
            arrange a meeting (e.g., a "critical personnel reduction meeting").
            </p>
          </div>
          <div className="testbed-image">
            <img src="" alt="" />
          </div>
          <div className="testbed-links">
            <a 
              href="https://github.com/lgomezt/social-agentics" 
              className="testbed-button testbed-button-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💻 Code 
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* Related Work Section */}
    <div className="blog-related-work-section">
      
      {/* Related Publications */}
      {relatedPublications.length > 0 && (
        <div className="related-publications-section">
          <h3 className="related-work-subtitle">Publications</h3>
          <div className="related-publications-list">
            {relatedPublications.map((pub, index) => (
              <PublicationCard 
                key={pub.id} 
                publication={pub} 
                isReversed={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
      )}

      {/* Workshop Presentations Timeline */}
      {workshopTimeline.length > 0 && (
        <div className="workshop-timeline-section">
          <h3 className="related-work-subtitle">Workshop Presentations & Participation</h3>
          <div className="workshop-timeline-container">
            {workshopTimeline.map((item, index) => (
              <WorkshopTimelineItem 
                key={index}
                item={item}
                isLast={index === workshopTimeline.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

