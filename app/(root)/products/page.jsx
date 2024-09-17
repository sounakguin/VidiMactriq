import Deals from '@/components/pages/Products/Deals'
import Header from '@/components/pages/Products/Header'
import Items from '@/components/pages/Products/Items'
import Videoslick from '@/components/pages/Products/Videoslick'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Items/>
      <Deals/>
      <Videoslick/>
    </div>
  )
}
