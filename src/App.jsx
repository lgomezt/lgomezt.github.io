import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import BlogArticle from './pages/BlogArticle'
import './App.css'

function App() {
  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('/?/')) {
      const newPath = path.replace('/?/', '/')
      window.history.replaceState({}, '', newPath)
    }
  }, [])

  return (
    <Router basename="/personal_webpage">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

