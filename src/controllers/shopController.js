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
    try {
      const page = parseInt(req.query.page) || 1; // Página por defecto es 1
      const pageSize = 9; // Cantidad de productos por página
      const cant = await getTotalQuantity();
      const totalPages = Math.ceil(cant / pageSize);

      const products = await getShopProducts(page, pageSize);

      res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
        products,
        totalPages,
      });
    } catch (error) {
      console.error("Error en el controlador shop:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id);
    let license = product.licence_name;
    const relatedData = await relatedProducts(license);
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      product,
      relatedData,
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
