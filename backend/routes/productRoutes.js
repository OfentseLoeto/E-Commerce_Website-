const express = require('express');

const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

// Product routes
router.get('/', getProducts); // Get all products
router.get('/:id', getProductById); // Get a single product
router.post('/', addProduct); // Add new product (Addmin only)
router.put('/:id', updateProduct); // Update product (Admin only)
router.delete('/:id', deleteProduct); // Delete a product (admin only)

module.exports = router;