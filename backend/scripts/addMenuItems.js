const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

// Menu items to add
const menuItems = [
  // Nasta items
  { name: 'Idli', category: 'Nasta', price: 40, description: 'Soft and fluffy steamed rice cakes', inStock: true },
  { name: 'Dosa', category: 'Nasta', price: 50, description: 'Crispy fermented crepe made from rice and lentils', inStock: true },
  { name: 'Uttappa', category: 'Nasta', price: 45, description: 'Thick pancake with vegetables', inStock: true },
  { name: 'Misal', category: 'Nasta', price: 60, description: 'Spicy curry made from sprouted lentils', inStock: true },
  { name: 'Zunka Bhakari', category: 'Nasta', price: 55, description: 'Traditional Maharashtrian dish with spiced gram flour and flatbread', inStock: true },
  { name: 'Shaboo Khichadi', category: 'Nasta', price: 50, description: 'Comforting rice and lentil dish', inStock: true },
  { name: 'Shaboo Vada', category: 'Nasta', price: 35, description: 'Crispy fried lentil fritters', inStock: true },
  
  // Beverages
  { name: 'Tea', category: 'Beverages', price: 15, description: 'Hot tea', inStock: true },
  { name: 'Coffee', category: 'Beverages', price: 20, description: 'Hot coffee', inStock: true },
  { name: 'Black Tea', category: 'Beverages', price: 15, description: 'Strong black tea without milk', inStock: true },
  { name: 'Lemon Tea', category: 'Beverages', price: 18, description: 'Refreshing tea with lemon', inStock: true },
];

async function addMenuItems() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gharguti';
    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected');

    // Check if items already exist
    for (const item of menuItems) {
      const existing = await Product.findOne({ name: item.name });
      if (existing) {
        console.log(`⚠️  "${item.name}" already exists. Skipping...`);
      } else {
        const product = new Product(item);
        await product.save();
        console.log(`✅ Added: ${item.name} - ₹${item.price} (${item.category})`);
      }
    }

    console.log('\n✨ Menu items added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding menu items:', error);
    process.exit(1);
  }
}

addMenuItems();

