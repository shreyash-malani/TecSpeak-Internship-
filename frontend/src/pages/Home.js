import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop',
      title: 'Fresh Homemade Biscuits',
      subtitle: 'Made with love, every day'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1200&h=600&fit=crop',
      title: 'Delicious Nasta Items',
      subtitle: 'Traditional recipes, modern taste'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=600&fit=crop',
      title: 'Shop Photos',
      subtitle: 'Visit us for the best experience'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className="hero-carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Shree Gharguti</h1>
                  <h2 className="hero-subtitle">Biscuit & Nasta Centre</h2>
                  <p className="hero-tagline">Pure Homemade Taste, Every Day</p>
                  <div className="hero-buttons">
                    <Link to="/shop" className="btn btn-primary">
                      Shop Now
                    </Link>
                    <Link to="/menu" className="btn btn-secondary">
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            <FiChevronRight />
          </button>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Homemade Quality</h3>
              <p>All our products are made fresh daily with traditional recipes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌾</div>
              <h3>Pure Ingredients</h3>
              <p>We use only the finest, natural ingredients in our recipes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Made with Love</h3>
              <p>Every item is prepared with care and attention to detail</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Taste the Difference?</h2>
          <p>Order now and experience pure homemade goodness</p>
          <Link to="/shop" className="btn btn-primary btn-large">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;



