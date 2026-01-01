import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Service from './sections/Service'
import DetailedService from './sections/DetailedService'
import ReactLenis from "lenis/react";
import About from './sections/About'
import Works from './sections/works'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Hero /> 
      <Service />
     <DetailedService />
     <About />
     <Works />
     </ReactLenis>
  )
}

export default App
