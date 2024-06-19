// Components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link instead of a tags
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
