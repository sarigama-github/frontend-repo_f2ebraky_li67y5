import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CaseStudies from './components/CaseStudies'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <CaseStudies />
      <WhyUs />
      <Team />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
