import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'

const Works = () => {
    const text = "Showcasing a portfolio of diverse projects that highlight my expertise in web development, design, and problem-solving skills."
  return (
    <section id='works' className='flex flex-col min-h-screen' >
        <AnimatedHeaderSection
        subtitle="code with purpose, design with passion"
        title="works"
        text={text}
        textColor="text-black"
        withScrollTrigger={true}
      />
    </section>
  )
}

export default Works
