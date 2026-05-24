import React from 'react';
import { FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shree Gharguti</h3>
          <p className="footer-tagline">Pure Homemade Taste, Every Day</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <a href="tel:+919876543210" className="footer-link">
              <FiPhone /> +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://instagram.com/gharguti"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FiInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <div className="footer-address">
            <FiMapPin />
            <p>
              123 Main Street,<br />
              City, State - 123456<br />
              India
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/shop">Shop</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shree Gharguti Biscuit & Nasta Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



