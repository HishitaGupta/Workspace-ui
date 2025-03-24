import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import AboutText from '../components/AboutText'
import OurValues from '../components/OurValues'
import WorkspaceSlider from '../components/WorkspaceSlider'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar z={100}/>
        <AboutHero/>
        <AboutText/>
        <WorkspaceSlider/>
        <OurValues/>
        <Partners/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default About