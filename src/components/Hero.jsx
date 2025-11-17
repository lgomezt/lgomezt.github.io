import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section py-20 sm:py-24">
      <div className="text-center space-y-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text tracking-tight">
          Lucas Gómez Tobón
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-mid-text max-w-3xl mx-auto">
          Research in applied ML for Social Good ⇆ Applied math ⇆ Teaching
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            to="/about"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
          </Link>
          <Link
            to="/publications"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-light-bg transition-colors duration-300"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

