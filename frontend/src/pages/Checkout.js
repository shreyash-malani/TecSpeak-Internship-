import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../utils/api';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerAddress: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerAddress: formData.customerAddress,
        items: cart.map(item => ({
          productId: item._id,
          quantity: item.quantity
        }))
      };

      const response = await api.post('/orders', orderData);
      
      alert('Order placed successfully! Your order ID is: ' + response.data._id);
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart before checkout.</p>
          <button onClick={() => navigate('/shop')} className="btn btn-primary">
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="container">
        <div className="checkout-content">
          <div className="checkout-form-container">
            <h2>Delivery Information</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerName">Full Name *</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerAddress">Delivery Address *</label>
                <textarea
                  id="customerAddress"
                  name="customerAddress"
                  rows="4"
                  value={formData.customerAddress}
                  onChange={handleChange}
                  required
                  placeholder="Enter your complete delivery address"
                ></textarea>
              </div>

              <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    defaultChecked
                    disabled
                  />
                  <label htmlFor="cod">
                    <span className="payment-label">Cash on Delivery</span>
                    <span className="payment-desc">Pay when you receive your order</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={loading}
              >
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.map((item) => (
                <div key={item._id} className="order-item">
                  <div className="order-item-info">
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="order-item-price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Delivery</span>
                <span className="free">Free</span>
              </div>
              <div className="total-divider"></div>
              <div className="total-row final">
                <span>Total</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



