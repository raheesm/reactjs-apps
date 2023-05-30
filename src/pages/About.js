import React from 'react'
import PageBanner from '../components/layout/PageBanner'
import AboutSec from '../components/about/AboutSec'
import MissionVision from '../components/about/MissionVision'
import '../assets/css/innerstyle.css'
function About() {

  
  return (
    <main>
      <PageBanner title="About Us"/>
      <AboutSec/>
      <MissionVision/>
    </main>
  )
}

export default About