import Trust from '@/components/pages/Contractus/Trust'
import Faq from '@/components/pages/FAQS/Faq'
import Header from '@/components/pages/FAQS/Header'
import QandA from '@/components/pages/FAQS/QandA'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Faq/>
      <QandA/>
      <Trust/>
    </div>
  )
}
