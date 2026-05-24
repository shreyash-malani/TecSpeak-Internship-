import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a question or want to place a custom order? Feel free to
              reach out to us through any of the following ways:
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919860220261">+91 9860220261</a>
                </div>
              </div>

              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <div>
                  <h3>WhatsApp</h3>
                  <a
                    href="https://wa.me/9860220261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h3>Address</h3>
                  <p>
                    MALE FATA SANGLI KOLHAPUR HIGHWAY HERLE <br />
                     416005<br />
                    India
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaInstagram className="contact-icon" />
                <div>
                  <h3>Instagram</h3>
                  <a
                    href="https://instagram.com/shreeghargutibiscuit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @gharguti
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



