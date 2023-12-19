const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  admin: async (req, res) => {
    const products = await models.getAllProducts();
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      products,
    });
  },
  createProducts: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"));
  },
  postProduct: async (req, res) => {
    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,      
      dues: Number(req.body.dues),
      img_front: req.files[0].originalname,
      img_back: req.files[1].originalname,
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence)
    }
    /*const result = */await models.createProduct([Object.values(product_schema)]);
    /*res.render("Esta es la Ruta para agregar un Nuevo ITEM" + result);*/
    res.redirect("/admin");
  },
  getEditProduct: async (req, res) => {
    const itemId = req.params.id;
    const [product] = await models.getProductById(itemId);
    res.render(path.resolve(__dirname, "../views/admin/editarItem.ejs"),{
      product
    });
  },
  putEditProduct: async (req, res) => {
    res.render('<h1>Producto editado</h1><a href="/admin">Volver</a>');
  },
  deleteProduct: async (req, res) => {
    res.render('<h1>Producto eliminado</h1><a href="/admin">Volver</a>');
  },
};