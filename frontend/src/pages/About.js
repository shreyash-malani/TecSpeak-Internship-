import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Our Story</p>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <h2>Welcome to Shree Gharguti</h2>
            <p>
              Shree Gharguti Biscuit & Nasta Centre is a family-owned business
              dedicated to bringing you the finest homemade biscuits and nasta
              items. With years of experience and traditional recipes passed down
              through generations, we take pride in creating delicious treats
              that remind you of home.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide pure, homemade taste in every bite. We
              believe in using only the finest ingredients and traditional
              methods to create products that are not just food, but a taste of
              love and care.
            </p>
          </div>

          <div className="about-section">
            <h2>What Makes Us Special</h2>
            <div className="features-list">
              <div className="feature-item">
                <h3>🏠 Homemade Quality</h3>
                <p>
                  Every item is made fresh daily in our kitchen using traditional
                  recipes
                </p>
              </div>
              <div className="feature-item">
                <h3>🌾 Pure Ingredients</h3>
                <p>
                  We source only the best, natural ingredients for all our
                  products
                </p>
              </div>
              <div className="feature-item">
                <h3>❤️ Made with Love</h3>
                <p>
                  Each product is prepared with care, attention to detail, and
                  lots of love
                </p>
              </div>
              <div className="feature-item">
                <h3>👨‍👩‍👧‍👦 Family Tradition</h3>
                <p>
                  Our recipes have been passed down through generations,
                  preserving authentic flavors
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Visit Us</h2>
            <p>
              We welcome you to visit our shop and experience the warmth and
              deliciousness of our products. Our friendly staff is always ready
              to help you find the perfect treat for any occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



