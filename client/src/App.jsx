import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Service from './sections/Service'
import DetailedService from './sections/DetailedService'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Hero /> 
      <Service />
     <DetailedService />

     </div>
  )
}

export default App
