import React from 'react'
import Card from './Card'

function Layout() {
  return (
    <div className='w-full py-[80px] px-4 bg-white'>
      <div>
          <h1 className='text-[#311B92] md:text-3xl sm:text-2xl text-xl font-bold text-center pb-4'>Jobs List</h1>
      </div>
      <div className='max-w-[1240px] mx-8 md:mx-auto grid md:grid-cols-3 gap-2 md:gap-8;'>
          
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
  </div>
</div>
  )
}

export default Layout
