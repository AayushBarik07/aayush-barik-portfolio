import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Blog from './components/Blog/blog'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f4f1ea] dark:bg-[#13221c] transition-colors duration-300">
      
      {/* Fixed Toggle Button */}
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          h-14
          w-14
          rounded-full
          bg-black
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:-translate-y-1
          dark:bg-white
          dark:text-black
          cursor-pointer
        "
      >
        {darkMode ? '☀️' : '🌙'}
      </button> */}

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <AboutMe />
                <Project />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;