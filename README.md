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


Experiment 5: Implementation of Docker Commands – Complete Summary 
This is a good viva revision sheet for you. 

1. What is Docker? 
Docker is a containerization platform used to create, run, and manage containers. 
Why Docker? 
• Consistent environment  
• Easy deployment  
• Lightweight  
• Supports DevOps and CI/CD

3. Installation of Docker 
Download Docker Desktop 
Install Docker Desktop and start it. 
Verify Installation 
docker --version 
Output: 
Docker version 29.5.2 
This confirms Docker is installed.

5. Verify Docker is Working 
Run: 
docker run hello-world 
Docker: 
1. Downloads hello-world image  
2. Creates container  
3. Runs container  
4. Displays message  
5. Stops container  
Output: 
Hello from Docker! 
This confirms Docker daemon is working.

4. What is an Image? 
An Image is a template used to create containers. 
Real-Life Example 
House Blueprint = Image 
Built House = Container 
Image contains: 
• Operating System  
• Libraries  
• Dependencies  
• Application Code

6. Download an Image 
We downloaded Ubuntu image. 
docker pull ubuntu 
Docker downloaded Ubuntu from Docker Hub.

8. View Images 
docker images 
Output: 
hello-world 
ubuntu 
These are images stored on your PC.

10. What is a Container? 
A Container is a running instance of an image. 
Flow 
Image 
↓ 
Container 
↓ 
Running Application

11. Create a Container 
Command: 
docker run --name mycontainer -it ubuntu bash 
Meaning: 
Option 
docker run 
Meaning 
Create and run container 
Option 
Meaning --name mycontainer Name of container -it 
ubuntu 
bash 
Interactive terminal 
Image name 
Open Linux shell

13. Enter Ubuntu Container 
After running: 
docker run --name mycontainer -it ubuntu bash 
Prompt changes to: 
root@xxxx:/# 
Meaning: 
You are inside Ubuntu Linux 
even though host OS is Windows.

15. Check Ubuntu Version 
Inside container: 
cat /etc/os-release 
Displays Ubuntu details. 
16. Exit Container 
exit 
Container stops. 
Status becomes: 
Exited (0)

18. View Running Containers 
docker ps 
Shows only running containers. 
Example: 
CONTAINER ID 
IMAGE 
STATUS

20. View All Containers 
docker ps -a 
Shows: 
• Running containers  
• Stopped containers  
You saw: 
mycontainer 
hello-world

22. Start a Stopped Container 
docker start mycontainer 
Container starts again.

24. Stop a Running Container 
docker stop mycontainer 
Container stops.

26. Remove a Container 
docker rm mycontainer 
Container gets deleted. 
27. Remove an Image 
docker rmi ubuntu 
Deletes Ubuntu image. 
28. Relationship Between Image and Container 
Ubuntu Image 
│ 
├── Container 1 
├── Container 2 
└── Container 3 
One image can create multiple containers. 
Docker Commands Used 
Command

docker --version 
docker run hello-world 
Purpose 
Check Docker version 
Verify Docker 
Command 
Purpose 

docker pull ubuntu 
docker images 

Download image 

List images 
docker run --name mycontainer -it ubuntu bash Create container 
docker ps 
docker ps -a 
docker start mycontainer 
docker stop mycontainer 
docker rm mycontainer 
docker rmi ubuntu 
Show running containers 
Show all containers 
Start container 
Stop container 
Remove container 
Remove image 
Important Viva Questions 
What is Docker? 
Docker is a containerization platform used to create, run, and manage containers. 
What is an Image? 
A read-only template used to create containers. 
What is a Container? 
A running instance of a Docker image. 
Difference Between Image and Container? 
Image 
Container 
Template 
Read-only 
Running Instance 
Executable 
Creates Containers Created From Image 
Command to View Images? 
docker images 
Command to View Running Containers? 
docker ps 
Command to View All Containers? 
docker ps -a 
Command to Stop Container? 
docker stop mycontainer 
Command to Start Container? 
docker start mycontainer 
One-Line Experiment Conclusion 
Successfully installed Docker, pulled Ubuntu image, created and managed containers using 
Docker commands, and understood the concepts of Images and Containers. 
At this point, you have completed and understood Experiment 5: Implementation of 
Docker Commands. The next experiment (Experiment 6) will use these concepts to create 
your own Docker image and container using a Dockerfile.



