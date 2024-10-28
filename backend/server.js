const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Load evironmental variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
// Persing the application/json
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('api/products',  productRoutes);

app.use('/api/cart', cartRoutes);

// Creating the basic routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
