import { useState } from 'react'
import PublicationCard from '../components/PublicationCard'
import Footer from '../components/Footer'
import { PUBLICATIONS, PROJECTS } from '../constants/data'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Published Work', 'Work in Progress']

  // Combine publications and projects
  const allItems = [...PUBLICATIONS, ...PROJECTS]

  const shouldShow = (item) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Published Work') return item.status === 'published'
    if (activeFilter === 'Work in Progress') return item.status === 'in-progress'
    return true
  }

  const filteredItems = allItems.filter(shouldShow)

  return (
    <div className="projects-page min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-dark-text sm:text-5xl mb-4">
            Projects
          </h1>
          <p className="text-lg text-mid-text max-w-2xl text-center mb-8">
            A collection of my research publications and ongoing projects.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px] min-w-[44px]
                  ${activeFilter === filter 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-mid-text hover:bg-slate-100 hover:text-dark-text'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredItems.map((item, index) => (
            <PublicationCard 
              key={item.id} 
              publication={item} 
              isReversed={index % 2 !== 0} 
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mid-text text-lg">No items found for the selected filter.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Projects

