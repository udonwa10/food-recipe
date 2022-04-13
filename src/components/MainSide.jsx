import React from 'react'
import Navbar from './Navbar'
import PopularPost from './PopularPost'
import Hero from './Hero'
import '../assets/img/MainSide.css'
const MainSide = () => {
  return (
    <>
      <div className=' h-screen main-side'>
        <Navbar/>
        <Hero/>     
        <PopularPost/>
      </div>
    </>
  )
}

export default MainSide