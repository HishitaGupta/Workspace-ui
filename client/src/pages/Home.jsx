import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import HomeAbout from '../components/HomeAbout'
import WorkspaceGrid from '../components/WorkSpaceGrid'
import WorkspaceSlider from '../components/WorkspaceSlider'

const Home = () => {
  return (
    <div>
      <Navbar z={100}/>
        <Hero/>
        <HomeAbout/>
        {/* <WorkspaceGrid/> */}
        <WorkspaceSlider/>
    </div>
  )
}

export default Home