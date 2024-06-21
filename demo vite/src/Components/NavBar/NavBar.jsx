// src/components/NavBar.jsx

import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
