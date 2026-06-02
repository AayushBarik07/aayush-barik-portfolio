import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Project from './components/Project'

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Home />
          <AboutMe />
          <Project />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
