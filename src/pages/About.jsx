import Footer from '../components/Footer'
import './About.css'

function About() {
  return (
    <div className="about-page min-h-screen bg-light-bg">
      <main className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <p>
            I hold a Master's degree in Economics from Universidad de los Andes. My thesis, titled{' '}
            <a href="https://repositorio.uniandes.edu.co/handle/1992/58861" target="_blank" rel="noopener noreferrer">
              "Perreology: Leveraging Music in Statistical Analysis"
            </a>, utilized Convolutional Neural Networks (CNNs) to derive vector representations of music. 
            This methodology informed the development of two applications. The first predicts the likelihood of a song 
            ranking among the top 50 tracks in Colombia with a recall of 69%. The second application shows that the 
            musical embeddings of the monthly top 50 songs in Colombia can explain up to 82% of the variability in the 
            Consumer Confidence Index.
          </p>
          <p>
            A demo of the predictive application is available{' '}
            <a href="https://perreologia.quantil.co/" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
          <p>
            I currently serve as an Adjunct Professor at Universidad de los Andes, offering courses on machine learning 
            and game theory. Additionally, I hold the position of Deputy Director of the Data Mining Department at{' '}
            <a href="https://quantil.co/en" target="_blank" rel="noopener noreferrer">Quantil</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

