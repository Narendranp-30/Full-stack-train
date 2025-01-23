// src/components/Navbar.jsx

import { useSelector } from 'react-redux';
import '../styles/Nav.css';
import ThemeButton from './ThemeButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <header className='navbar'>
        <div className="logo">Logo</div>
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart : {cartItems.length}</Link>
          <ThemeButton />
        </div>
      </header>
    </>
  );
};

export default Navbar;
