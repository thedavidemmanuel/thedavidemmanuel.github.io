import React from 'react'
import logo from '../images/logo.png'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='Header-class'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul className='menu-item'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
           </ul>
           <button>Reach Out</button>
        </div>
        <div className="social-icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-solid fa-envelope"></i>
        </div>
    </div>
  )
}

export default Header