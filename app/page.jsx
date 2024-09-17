import Choosevidi from '@/components/pages/Home/Choosevidi'
import Header from '@/components/pages/Home/Header'
import Joinhandes from '@/components/pages/Home/Joinhandes'
import Latestblog from '@/components/pages/Home/Latestblog'
import Latestproducts from '@/components/pages/Home/Latestproducts'
import Socialmedia from '@/components/pages/Home/Socialmedia'
import Testimonial from '@/components/pages/Home/Testimonial'
import Vidibuyer from '@/components/pages/Home/Vidibuyer'
import Vidirewards from '@/components/pages/Home/Vidirewards'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Latestproducts/>
      <Choosevidi/>
      <Testimonial/>
      <Vidibuyer/>
      <Joinhandes/>
      <Vidirewards/>
      {/* <Socialmedia/> */}
      <Latestblog/>
    </div>
  )
}
