import React from 'react'
import BottomBar from './BottomBar'
import TopBar from './TopBar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='h-screen font-bold bg-bgColor'>
      <Hero />
      <BottomBar />
    </div>
  )
}

export default Home