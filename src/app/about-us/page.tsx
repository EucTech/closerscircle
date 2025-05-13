import AboutHero from '@/components/AboutUs/AboutHero'
import OurMission from '@/components/AboutUs/OurMission'
import Value from '@/components/AboutUs/Value'
import WhyJoin from '@/components/AboutUs/WhyJoin'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <Value/>
      <OurMission/>
      <WhyJoin/>
    </div>
  )
}

export default page
