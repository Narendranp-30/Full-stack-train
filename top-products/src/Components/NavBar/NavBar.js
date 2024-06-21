// Components/NavBar/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './NavBar.css'; // Custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand className="logo" href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/products" className="nav-link">Products</Nav.Link>
          <Nav.Link href="/about-us" className="nav-link">About Us</Nav.Link>
          <Nav.Link href="#contacts" className="nav-link">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
