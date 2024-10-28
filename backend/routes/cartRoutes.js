const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:productId', protect, removeFromId);

module.exports = router;