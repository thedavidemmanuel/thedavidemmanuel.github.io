import React from 'react';
import logo from '../images/logo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='Header-class'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="menu">
        <ul className='menu-item'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
        <button>Reach Out</button>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/thedavidemmanuel" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/thedavidemmanuel" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:thedavidleads@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;