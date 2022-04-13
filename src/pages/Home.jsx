import React from 'react'
import SideFood from '../components/SideFood'
import MainSide from '../components/MainSide'
import '../assets/css/Home.css'
import {useEffect} from 'react'


const Home = () => {

  return (
    <>
      <div className=" home h-screen ">
        <MainSide/>
        <SideFood/>
      </div>
    </>
  )
}

export default Home