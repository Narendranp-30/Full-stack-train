import React from 'react';
import '../App.css';
import ThemeButton from './ThemeButton';

function Header() {
    return (
        <header>
            <div className="logo">LOGO</div>
            <div className="menu">
                <div>Products</div>
                <div>About</div>
                <div>Contact</div>
                <ThemeButton />
            </div>
        </header>
    );
}

export default Header;
