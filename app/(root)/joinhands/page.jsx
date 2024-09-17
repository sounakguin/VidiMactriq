import Trust from '@/components/pages/Contractus/Trust'
import Applink from '@/components/pages/JoinHands/Applink'
import BecamePartner from '@/components/pages/JoinHands/BecamePartner'
import Finddealer from '@/components/pages/JoinHands/Finddealer'
import Header from '@/components/pages/JoinHands/Header'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Applink/>
      <Finddealer/>
      <BecamePartner/>
      <Trust/>
    </div>
  )
}
