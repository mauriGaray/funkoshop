const path = require("path");
const {
  getAllProducts,
  getProductById,
} = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  shop: async (req, res) => {
    const product = await getAllProducts();
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      product,
    });
  },
  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id);
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  addProduct: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  cart: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/carrito.ejs"));
  },
  postCart: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
};
