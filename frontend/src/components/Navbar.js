import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const location = useLocation();
  const cartCount = getCartItemCount();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Shree Gharguti</span>
          <span className="logo-subtitle">Biscuit & Nasta Centre</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`navbar-link ${isActive('/menu') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/shop"
            className={`navbar-link ${isActive('/shop') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className={`navbar-link cart-link ${isActive('/cart') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FiShoppingCart className="cart-icon" />
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



