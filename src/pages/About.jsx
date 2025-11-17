import Footer from '../components/Footer'
import './About.css'

function About() {
  return (
    <div className="about-page min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <h1 className="about-title">About</h1>
        
        <div className="about-content-wrapper">
          {/* Image Side */}
          <div className="about-image-container">
            <img 
              src="/Happy_lucas.jpeg" 
              alt="Lucas Gómez-Tobón" 
              className="about-image"
            />
          </div>

          {/* Content Side */}
          <div className="about-text-container">
            {/* Current Role */}
            <section className="about-section">
              <h2 className="about-section-title">Current Role</h2>
              <p className="about-text">
                I am a second-year PhD student in Computer Science at the University of Waterloo, working at the <a href="https://edithlaw.ca" target="_blank" rel="noopener noreferrer">Augmented Intelligence Lab</a> under the supervision of Prof. Edith Law.
              </p>
              <p className="about-text">
                Currently, I also serve as an Adjunct Professor at the Universidad de los Andes Economics Department, where I 
                teach <a href="https://github.com/lgomezt/Intro_Python" target="_blank" rel="noopener noreferrer">Introduction to Python</a>.
              </p>
            </section>

            {/* Education */}
            <section className="about-section">
              <h2 className="about-section-title">Education</h2>
              <p className="about-text">
                My academic background is in Economics, holding both a Master's and Bachelor's degree from Universidad de los Andes in Colombia.
              </p>
            </section>

            {/* Professional Experience */}
            <section className="about-section">
              <h2 className="about-section-title">Professional Experience</h2>
              <p className="about-text">
                Prior to my PhD, my professional experience focused on applied mathematics and finance:
              </p>
              
              <div className="about-experience-grid">
                <div className="about-experience-card">
                  <h3 className="about-experience-title">Financial Risk Management</h3>
                  <p className="about-experience-text">
                    Led the <span className="font-bold">Financial Risk department for operations in Colombia, Panamá, and Miami</span>. I held responsibility for over 4.8 billion USD in AUM and 100,000 client accounts across these three regions.
                  </p>
                </div>

                <div className="about-experience-card">
                  <h3 className="about-experience-title">Data Mining & Applied Math</h3>
                  <p className="about-experience-text">
                    I progressed from Junior Researcher to Deputy Director of the Data Mining Department at an 
                    <a href="https://quantil.co/en/" target="_blank" rel="noopener noreferrer">applied math lab</a>. 
                    My work included deploying machine learning models for credit scoring, fraud detection, portfolio optimization, and macroeconomic forecasting.
                  </p>
                </div>

                <div className="about-experience-card">
                  <h3 className="about-experience-title">Economic Research</h3>
                  <p className="about-experience-text">
                    I began my research career as an Assistant at the Center for Economic Development Studies (CEDE), focusing on network analysis projects.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

