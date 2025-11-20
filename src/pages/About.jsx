import Footer from '../components/Footer'
import { FileText } from 'lucide-react' // Assuming you are using lucide-react or similar for icons
import './About.css'

function About() {
  return (
    <div className="about-page min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <h1 className="about-title">About</h1>

        <div className="about-content-wrapper">
          {/* Image Side */}
          <div className="about-image-container flex flex-col items-center gap-4">
            <img
              src="/Happy_lucas.jpeg"
              alt="Lucas Gómez-Tobón"
              className="about-image"
            />
            {/* CV Download Button */}
            <a
              href="/Lucas Gomez - CV (2025-11).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <FileText size={18} />
              <span className="font-medium">CV</span>
            </a>
          </div>

          {/* Content Side */}
          <div className="about-text-container">

            {/* Current Role - Updated with Project Names */}
            <section className="about-section">
              <h2 className="about-section-title">Current Role</h2>
              <p className="about-text">
                I am a PhD student at the University of Waterloo advised by <a href="https://edithlaw.ca" target="_blank" rel="noopener noreferrer">Edith Law</a>.
                I characterize myself as a <strong>builder who runs experiments</strong>: I engineer full-stack platforms to measure the causal mechanisms of AI interventions.
              </p>

              <p className="about-text">
                My research targets two specific problems:
              </p>
              <ul className="about-list">
                <li>
                  <strong><a href="/blog/social-agentics">Social Agentics:</a></strong> How do AI agents navigate social ambiguity? I developed the <strong>Coordination Laboratory</strong>, a multi-agent testbed that uses Activity Theory and personas (inspired by <em>The Office</em>) to simulate complex workplace negotiations.
                </li>
                <li>
                  <strong><a href="/blog/teaching-the-agent">AI for Education:</a></strong> Students often passively consume AI outputs. I design "learning-by-teaching" systems, such as <strong>Learning by Debugging</strong>, where students must identify and correct intentional errors made by an AI peer.
                </li>
              </ul>
            </section>

            {/* Teaching - Added Futures Lab */}
            <section className="about-section">
              <h2 className="about-section-title">Teaching & Service</h2>
              <p className="about-text">
                Beyond research, I actively teach:
              </p>
              <ul className="about-list">
                <li>
                  <strong>Futures Lab Workshop:</strong> I co-organize an 8-week workshop on GenAI-driven product design at UWaterloo.
                </li>
                <li>
                  <strong>Adjunct Professor:</strong> I teach <a href="https://github.com/lgomezt/Intro_Python" target="_blank" rel="noopener noreferrer">Introduction to Python</a> at Universidad de los Andes.
                </li>
              </ul>
            </section>

            {/* Professional Experience - Injected TidyX and Impact */}
            <section className="about-section">
              <h2 className="about-section-title">Professional Background</h2>
              <p className="about-text">
                My background is in Economics (M.A. & B.A.), but I spent my pre-PhD career building data products and managing risk.
              </p>

              <div className="about-experience-grid">
                <div className="about-experience-card">
                  <h3 className="about-experience-title">Financial Risk Management</h3>
                  <p className="about-experience-text">
                    Led the <span className="font-bold">Financial Risk department</span> for a major stockbroker, overseeing operations in Colombia, Panamá, and Miami. I managed risk for over <strong>$4.8 billion USD in AUM</strong>.
                  </p>
                </div>

                <div className="about-experience-card">
                  <h3 className="about-experience-title">Engineering & Applied Math</h3>
                  <p className="about-experience-text">
                    At <a href="https://quantil.co/en/" target="_blank" rel="noopener noreferrer">Quantil</a>, I progressed to Deputy Director of Data Mining. I developed <strong><a href="https://tidyx.readthedocs.io/en/latest/">tidyX</a></strong> (an open-source library with 7k+ downloads) and deployed production ML models for credit scoring and fraud detection.
                  </p>
                </div>

                <div className="about-experience-card">
                  <h3 className="about-experience-title">Economic Research</h3>
                  <p className="about-experience-text">
                    Started as a Research Assistant at CEDE, where I cut my teeth on large-scale data processing, including analyzing <strong>45 million tweets</strong> to map political polarization.
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