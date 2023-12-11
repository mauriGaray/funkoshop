const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  //main
  home: async (req, res) => {
    const products = await models.getAllProducts();
    res.render(path.resolve(__dirname, "../views/main/index.ejs"), {
      products,
    });
  },
  contact: (req, res) => {
    res.render("inProgress");
  },
  faqs: (req, res) => {
    res.render("inProgress");
  },
  about: (req, res) => {
    res.render("inProgress");
  },

  //shop
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
    res.render("inProgress");
  },
  cart: async (req, res) => {
    res.render("carrito");
  },
  postCart: async (req, res) => {
    res.render("inProgress");
  },
  //admin
  admin: async (req, res) => {
    res.render("inProgress");
  },
  getProducts: async (req, res) => {
    res.render("inProgress");
  },
  postProduct: async (req, res) => {
    res.render("inProgress");
  },
  getEditProduct: async (req, res) => {
    res.render("inProgress");
  },
  putEditProduct: async (req, res) => {
    res.render("inProgress");
  },
  deleteProduct: async (req, res) => {
    res.render("inProgress");
  },
  //auth
  getAuthLogin: async (req, res) => {
    res.render("inProgress");
  },
  postAuthLogin: async (req, res) => {
    res.render("inProgress");
  },
  getAuthRegister: async (req, res) => {
    res.render("inProgress");
  },
  postAuthRegister: async (req, res) => {
    res.render("inProgress");
  },
  getAuthLogout: async (req, res) => {
    res.render("inProgress");
  },
};
