// Creating the product models to defing the structure
// of the product data, such as name, price, description and category.

const mongoose = require('mongoose');
 
const productSchema = new mongoose.Shema({
    name: {
      type: String,
      required: true,
    },

    description: {

      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    imageUrl: {
      type: String,
      required: true,    
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;