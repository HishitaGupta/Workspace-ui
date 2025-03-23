import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import AboutText from '../components/AboutText'
import OurValues from '../components/OurValues'

const About = () => {
  return (
    <div>
        <Navbar z={100}/>
        <AboutHero/>
        <AboutText/>
        <OurValues/>
    </div>
  )
}

export default About