import Awards from '@/components/pages/Aboutus/Awards'
import Header from '@/components/pages/Aboutus/Header'
import OurJourney from '@/components/pages/Aboutus/Ourjourney'
import Slick from '@/components/pages/Aboutus/Slick'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <OurJourney/>
      <Awards/>
      <Slick/>
    </div>
  )
}
