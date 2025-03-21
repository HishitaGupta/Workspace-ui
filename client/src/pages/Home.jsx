import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar z={100}/>
        <Hero/>
    </div>
  )
}

export default Home