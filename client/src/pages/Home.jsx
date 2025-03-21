import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import HomeAbout from '../components/HomeAbout'
import WorkspaceGrid from '../components/WorkSpaceGrid'
import WorkspaceSlider from '../components/WorkspaceSlider'
import FeedbackSlider from '../components/Feedback'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <Navbar z={100}/>
        <Hero/>
        <HomeAbout/>
        
        <WorkspaceSlider/>
        <WorkspaceGrid/>
        <FeedbackSlider/>
        <CTA/>
        <FAQ/>
        
        <Footer/>
    </div>
  )
}

export default Home