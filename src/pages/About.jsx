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
                I am a PhD student at the University of Waterloo advised by <a href="https://edithlaw.ca" target="_blank" rel="noopener noreferrer">Edith Law</a>, working at the intersection of <strong>Human-AI Interaction</strong> and the <strong>Future of Education and Work</strong>.
              </p>

              <p className="about-text">
                My research targets two specific problems:
              </p>
              <ul className="about-list">
                <li>
                  <strong>Education:</strong> Students often passively consume AI outputs. I design "learning-by-teaching" agents that intentionally make
                  mistakes, forcing students to explain concepts and correct errors to develop cognitive and metacognitive skills.
                </li>
                <li>
                  <strong>Social Agentics:</strong> I build agentic systems that are explicitly situated
                  within specific organizational contexts, allowing them to navigate workplace norms and social ambiguity.
                </li>
              </ul>

              <p className="about-text">
                I am a <strong>builder who runs experiments</strong>. I create scalable platforms that allow us to measure the causal mechanisms of these interventions.
                I draw on my background in Economics and prior leadership roles in multi-country risk management to handle complex stakeholder interventions.
              </p>

              <p className="about-text">
                I also serve as an Adjunct Professor at Universidad de los Andes, teaching <a href="https://github.com/lgomezt/Intro_Python" target="_blank" rel="noopener noreferrer">Introduction to Python</a>.
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
                    <a href="https://quantil.co/en/" target="_blank" rel="noopener noreferrer"> applied math lab</a>.
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

