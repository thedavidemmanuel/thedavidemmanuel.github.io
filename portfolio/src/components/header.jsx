import React, { useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="Header-class">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <ul className="menu-item">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
        <button>Reach Out</button>
      </nav>
      <div className={`social-icons ${showMenu ? 'show' : ''}`}>
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
      <div className="hamburger" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;