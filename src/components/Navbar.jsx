import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import '../assets/css/Navbar.css'

const linkStyle ={
  color:'#C89D7C',
  fontSize:'16px',
  marginRight:'50px',
  fontWeight:'bold',
}


const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between pl-10 py-5">
        <div className="logo ">
        <Link to={'/'}>
          <img src={logo} alt="" className='logo-img' />
        </Link>
        </div>
        <ul className="nav-link flex items-center">
            <Link to={'/'} style={linkStyle}> Home</Link>
            <Link to={'/meal'} style={linkStyle}> Meal</Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar