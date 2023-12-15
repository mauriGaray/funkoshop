const path = require("path");
const {
  getProductById,
  get10Products,
} = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  shop: async (req, res) => {
    const products = await get10Products((page = 1), (itemPerPage = 9));

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      products,
    });
  },
  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id);

    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      product,
    });
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
