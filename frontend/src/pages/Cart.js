import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import './Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <FiShoppingBag className="empty-icon" />
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to your cart!</p>
          <Link to="/shop" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="container">
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="cart-item-image">
                  {item.image ? (
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.name}
                      onError={(e) => {
                        e.target.src =
                          'https://via.placeholder.com/150x150?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="placeholder-image">
                      <span>No Image</span>
                    </div>
                  )}
                </div>

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  {item.category && (
                    <p className="cart-item-category">{item.category}</p>
                  )}
                  <p className="cart-item-price">₹{item.price} each</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="cart-item-total">
                  <p className="item-total-price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                  aria-label="Remove item"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>₹{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="free">Free</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{getCartTotal().toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-large checkout-btn">
              Proceed to Checkout
            </Link>
            <Link to="/shop" className="btn btn-secondary continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



