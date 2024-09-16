import React from 'react'
import Logo from '../assets/brand_logo.png'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className='nav-btn'>
        Login
      </button>
    </div>
  )
}

export default NavBar
