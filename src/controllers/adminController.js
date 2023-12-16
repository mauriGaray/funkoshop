const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  admin: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"));
  },
  createProducts: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"));
  },
  postProduct: async (req, res) => {
    res.render('<h1>Producto creado</h1><a href="/admin">Volver</a>');
  },
  getEditProduct: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/editarItem.ejs"));
  },
  putEditProduct: async (req, res) => {
    res.render('<h1>Producto editado</h1><a href="/admin">Volver</a>');
  },
  deleteProduct: async (req, res) => {
    res.render('<h1>Producto eliminado</h1><a href="/admin">Volver</a>');
  },
};
