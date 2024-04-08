import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Nurturing from '@/Components/Nurturing'
import Who_we_are from '@/Components/Who_we_are'
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
