import NewHeader from '@/components/NewHeader'
import Stock from '@/components/Stock'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1>ABOUT</h1>
      <Stock/>
    </div>
  )
}

