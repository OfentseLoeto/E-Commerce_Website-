// The cart model where each user will have a cart
// that stores what they want to purchase.
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.objectId,
    ref: 'User',
    required: true,
  },

  items: [
    {
      product: {
        type: mongoose.Schema.objectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

const cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;