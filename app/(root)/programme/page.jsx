import Events from '@/components/pages/Companyprogram/Events'
import Header from '@/components/pages/Companyprogram/Header'
import Rewards from '@/components/pages/Companyprogram/Rewards'
import Vidirewards from '@/components/pages/Companyprogram/Vidirewards'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Rewards/>
      <Events/>
      <Vidirewards/>
    </div>
  )
}
