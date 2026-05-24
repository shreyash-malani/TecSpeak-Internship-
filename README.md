# Shree Gharguti Biscuit & Nasta Centre - E-commerce Website

A fully responsive e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for a food business specializing in homemade biscuits and nasta items.

## 🌟 Features

### Frontend (React)
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern Indian food-style UI with warm colors (brown, cream, orange)
- ✅ Navigation bar with: Home, Menu, Shop, About Us, Contact
- ✅ Hero section with image carousel
- ✅ Menu/Shop page with product cards
- ✅ Add to Cart functionality
- ✅ Cart page with total price calculation
- ✅ Checkout page with Cash on Delivery option
- ✅ Footer with contact information

### Backend (Node + Express)
- ✅ REST APIs for Products (CRUD operations)
- ✅ REST APIs for Categories
- ✅ REST APIs for Orders
- ✅ JWT authentication for admin panel
- ✅ Image upload functionality

### Database (MongoDB)
- ✅ Product schema with name, category, price, image, description
- ✅ Order schema with customer details and items
- ✅ Admin schema for authentication

### Admin Panel
- ✅ Admin login with JWT
- ✅ Add/Edit/Delete products
- ✅ Upload product images
- ✅ View and manage orders
- ✅ Update order status

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd "D:\fastfood website"
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/gharguti
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   NODE_ENV=development
   ```

   Create a `.env` file in the `frontend` folder (optional):
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Create uploads directory**
   ```bash
   mkdir backend/uploads
   ```

6. **Start MongoDB**
   Make sure MongoDB is running on your system.

7. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

8. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

9. **Create an admin account**
   ```bash
   # Use the register endpoint (remove in production)
   POST http://localhost:5000/api/auth/register
   Body: {
     "username": "admin",
     "password": "your_password"
   }
   ```

## 📁 Project Structure

```
fastfood website/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Admin.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── orders.js
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Shop.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── AdminLogin.js
│   │   │   └── AdminPanel.js
│   │   ├── context/
│   │   │   └── CartContext.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🎨 Design Features

- **Color Scheme**: Warm colors inspired by Indian food culture
  - Brown (#8B4513, #A0522D) - Primary
  - Cream (#FFF8E7) - Background
  - Orange (#FFA500) - Accent
  - Dark Brown (#3E2723, #5D4037) - Text

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, modern interface with smooth animations and transitions
- **User Experience**: Intuitive navigation and easy-to-use shopping cart

## 🔐 Admin Access

1. Navigate to `/admin/login`
2. Login with your admin credentials
3. Access the admin panel to manage products and orders

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Categories
- `GET /api/categories` - Get all categories with counts

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders (Admin only)
- `GET /api/orders/:id` - Get single order (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register admin (remove in production)

## 🛠️ Technologies Used

- **Frontend**: React.js, React Router, Axios, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Styling**: CSS3 with custom styles

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🚀 Deployment

### Backend Deployment
1. Set environment variables on your hosting platform
2. Ensure MongoDB is accessible
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy the `build` folder to platforms like Netlify, Vercel, or GitHub Pages
3. Update API URL in environment variables

## 📄 License

This project is created for Shree Gharguti Biscuit & Nasta Centre.

## 👨‍💻 Development

For development, use:
- Backend: `npm run dev` (with nodemon for auto-restart)
- Frontend: `npm start` (React development server)

## 🤝 Support

For any issues or questions, please contact the development team.

---

**Made with ❤️ for Shree Gharguti Biscuit & Nasta Centre**



