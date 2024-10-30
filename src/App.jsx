import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
