import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nurturing from '@/components/Nurturing'
import Who_we_are from '@/components/Who_we_are'
import React from 'react'

export default function page() {
  return (
    <main className='flex flex-col'>
      <Header/>
      <Hero/>
      <Nurturing/>
      <Who_we_are/>
      <Footer/>
    </main>
  )
}
