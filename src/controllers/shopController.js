const path = require("path");
const {
  getAllProducts,
  paginate,
  getProductById,
  getShopProducts,
  relatedProducts,
  getTotalQuantity,
} = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  shop: async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Página por defecto es 1
    const pageSize = 9; // Cantidad de productos por página
    const cant = await getTotalQuantity();
    const totalPages = Math.ceil(cant / pageSize);

    const products = await getShopProducts(page, pageSize);

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      products,
      totalPages,
    });
  },

  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id);
    const relatedProducts = relatedProducts(product[0].licence_id);

    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      product,
      relatedProducts,
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
