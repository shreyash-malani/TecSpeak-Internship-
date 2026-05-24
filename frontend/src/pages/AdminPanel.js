import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { FiPlus, FiEdit, FiTrash2, FiLogOut, FiPackage } from 'react-icons/fi';
import './AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [loading, setLoading] = useState(true);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Biscuits',
    price: '',
    description: '',
    inStock: true,
    image: null
  });

  useEffect(() => {
    checkAuth();
    fetchProducts();
    fetchOrders();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      }
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders');
      setOrders(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      }
      console.error('Error fetching orders:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, image: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('category', formData.category);
    submitData.append('price', formData.price);
    submitData.append('description', formData.description);
    submitData.append('inStock', formData.inStock);
    if (formData.image) {
      submitData.append('image', formData.image);
    }

    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct._id}`, submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await api.post('/products', submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      setShowProductModal(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      }
      alert('Error saving product. Please try again.');
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description || '',
      inStock: product.inStock,
      image: null
    });
    setShowProductModal(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${productId}`);
        fetchProducts();
      } catch (error) {
        if (error.response?.status === 401) {
          handleLogout();
        }
        alert('Error deleting product. Please try again.');
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleUpdateOrderStatus = async (orderId, status) => {
    try {
      await api.put(`/orders/${orderId}/status`, { status });
      fetchOrders();
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      }
      alert('Error updating order status. Please try again.');
      console.error('Error updating order:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Biscuits',
      price: '',
      description: '',
      inStock: true,
      image: null
    });
    setEditingProduct(null);
  };

  const openAddModal = () => {
    resetForm();
    setShowProductModal(true);
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <div className="container">
          <h1>Admin Panel</h1>
          <button className="logout-btn" onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      <div className="admin-tabs">
        <div className="container">
          <button
            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <FiPackage /> Products
          </button>
          <button
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders ({orders.length})
          </button>
        </div>
      </div>

      <div className="container">
        {activeTab === 'products' && (
          <div className="admin-content">
            <div className="content-header">
              <h2>Products Management</h2>
              <button className="btn btn-primary" onClick={openAddModal}>
                <FiPlus /> Add Product
              </button>
            </div>

            <div className="products-table">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="no-data">
                        No products found. Add your first product!
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product._id}>
                        <td>
                          {product.image ? (
                            <img
                              src={`http://localhost:5000${product.image}`}
                              alt={product.name}
                              className="product-thumb"
                            />
                          ) : (
                            <div className="no-image">No Image</div>
                          )}
                        </td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>₹{product.price}</td>
                        <td>
                          <span
                            className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}
                          >
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="edit-btn"
                              onClick={() => handleEdit(product)}
                            >
                              <FiEdit />
                            </button>
                            <button
                              className="delete-btn"
                              onClick={() => handleDelete(product._id)}
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="admin-content">
            <h2>Orders Management</h2>
            <div className="orders-list">
              {orders.length === 0 ? (
                <div className="no-data">No orders yet.</div>
              ) : (
                orders.map((order) => (
                  <div key={order._id} className="order-card">
                    <div className="order-header">
                      <div>
                        <h3>Order #{order._id.slice(-6)}</h3>
                        <p className="order-date">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleUpdateOrderStatus(order._id, e.target.value)
                        }
                        className="status-select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div className="order-details">
                      <div>
                        <p>
                          <strong>Customer:</strong> {order.customerName}
                        </p>
                        <p>
                          <strong>Phone:</strong> {order.customerPhone}
                        </p>
                        <p>
                          <strong>Address:</strong> {order.customerAddress}
                        </p>
                      </div>
                      <div className="order-items-list">
                        <strong>Items:</strong>
                        {order.items.map((item, idx) => (
                          <div key={idx} className="order-item-row">
                            {item.product?.name || 'Product'} x {item.quantity} - ₹
                            {(item.price * item.quantity).toFixed(2)}
                          </div>
                        ))}
                      </div>
                      <div className="order-total">
                        <strong>Total: ₹{order.totalAmount.toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Biscuits">Biscuits</option>
                  <option value="Nasta">Nasta</option>
                  <option value="Beverages">Beverages</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleInputChange}
                  />
                  In Stock
                </label>
              </div>

              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
                {editingProduct && editingProduct.image && !formData.image && (
                  <img
                    src={`http://localhost:5000${editingProduct.image}`}
                    alt="Current"
                    className="current-image"
                  />
                )}
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowProductModal(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProduct ? 'Update' : 'Add'} Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;



