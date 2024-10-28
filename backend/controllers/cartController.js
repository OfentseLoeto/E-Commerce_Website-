// The routes managing the cart.
// Users can add items, view their cart, and remove items from the cart
const cart = require('../models/Cart');
const Product = require('../models/Product');

// Get users cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.finOne({ user: req.userId }).populate('item.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
};

// Add item to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const product = await Product.findOneById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found'});
    }

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    if (itemIndex > -1) {
      // If product is already in the cart, update quantity.
      cart.items[itemIndex].quantity += quantity;
    } else {
        // If product is not in cart, add it.
        cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    let cart = await cart.findOne({ user: req.user.id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartIndex = cart.items.findIndex((item) => item.product.toString() === req.params.productId);

    if (cartIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.status(200).json(cart);
    } else {
        res.status(404).json({ message: 'Product not in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};