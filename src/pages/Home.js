import React from 'react'
import Hero from '../components/home/Hero'
import HeroBottomSec from '../components/home/HeroBottomSec'
import HomeAbout from '../components/home/HomeAbout'
import HomeFeatureCard from '../components/home/HomeFeatureCard'
import HomeGallery from '../components/home/HomeGallery'
import HomeProduct from '../components/home/HomeProduct'

function Home({setPage}) {

    setPage(true);
    

  

  return (
    <>
      <Hero/>
      <HeroBottomSec/>
      <HomeAbout/>
      <HomeProduct/>
      <HomeFeatureCard/>
      <HomeGallery/>
    </>
  )
}

export default Home