const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  shop: async (req, res) => {
    const product = await models.getAllProducts();
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      product,
    });
  },
  productDetail: async (req, res) => {
    res.render("item");
  },
  addProduct: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  cart: async (req, res) => {
    res.render("carrito");
  },
  postCart: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
};
