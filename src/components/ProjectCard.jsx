import './ProjectCard.css'
import { parseMarkdown } from '../utils/markdown'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{parseMarkdown(project.description)}</p>
      </div>
    </div>
  )
}

export default ProjectCard

