# Setup Guide

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with the following content:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/gharguti
# JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
# NODE_ENV=development

# Make sure MongoDB is running
# Then start the server
npm run dev
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file (optional):
# REACT_APP_API_URL=http://localhost:5000/api

# Start the development server
npm start
```

### 3. Create Admin Account

After starting the backend, create an admin account using:

**Using curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_password"}'
```

**Using Postman or similar:**
- Method: POST
- URL: http://localhost:5000/api/auth/register
- Body (JSON):
```json
{
  "username": "admin",
  "password": "your_password"
}
```

**Note:** Remove the register endpoint in production for security.

### 4. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Admin Panel:** http://localhost:3000/admin/login

## Important Notes

1. **MongoDB:** Make sure MongoDB is installed and running on your system, or use MongoDB Atlas and update the connection string in `.env`

2. **Image Uploads:** The `backend/uploads` directory will be created automatically. Make sure the backend has write permissions.

3. **CORS:** The backend is configured to allow requests from `http://localhost:3000`. Update CORS settings in `backend/server.js` if deploying to different domains.

4. **Environment Variables:** Never commit `.env` files to version control. Use `.env.example` files as templates.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check MongoDB service
- Verify connection string in `.env` file
- Check MongoDB logs for errors

### Port Already in Use
- Change PORT in backend `.env` file
- Update `REACT_APP_API_URL` in frontend `.env` accordingly

### Image Upload Not Working
- Check `backend/uploads` directory exists
- Verify file permissions
- Check multer configuration in `backend/routes/products.js`

### Admin Login Not Working
- Verify admin account was created successfully
- Check JWT_SECRET in backend `.env`
- Clear browser localStorage and try again

## Production Deployment

1. Set `NODE_ENV=production` in backend `.env`
2. Use a strong `JWT_SECRET`
3. Remove or protect the `/api/auth/register` endpoint
4. Configure proper CORS settings
5. Use environment variables for all sensitive data
6. Build frontend: `cd frontend && npm run build`
7. Serve frontend build folder with a web server or use a hosting service



