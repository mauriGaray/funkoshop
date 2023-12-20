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
      image_front: /*"/products/"+*/req.files[0].filename,
      image_back: /*"/products/"+*/req.files[1].filename,
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence)
    }
    /*console.log(product_schema)*/
    /*const result = */await models.createProduct([Object.values(product_schema)]);
    /*res.render("Esta es la Ruta para agregar un Nuevo ITEM" + result);
    console.log([Object.values(product_schema)])
    console.log(result)*/
    res.redirect("/admin");
  },
  getEditProduct: async (req, res) => {
    const {id} = req.params;
    const [product] = await models.getProductById({product_id: id});
    res.render(path.resolve(__dirname, "../views/admin/editarItem.ejs"),{
      product
    });
  },
  putEditProduct: async (req, res) => {
    const {id} = req.params;
    const haveImages = req.files.length !== 0;
    const product_schema = haveImages
    ? {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,      
      dues: Number(req.body.dues),
      image_front: /*"/products/"+*/req.files[0].filename,
      image_back: /*"/products/"+*/req.files[1].filename,
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence)
    }
    : {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,      
      dues: Number(req.body.dues),
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence)
    };
    await models.editProduct(product_schema, {product_id: id});
    /*console.log(product_schema)*/
    res.redirect("/admin");
  },
  deleteProduct: async (req, res) => {
    const {id} = req.params;
    await models.deleteProduct({product_id: id});
    /*res.render('<h1>Producto eliminado</h1><a href="/admin">Volver</a>');*/
    res.redirect("/admin");
  },
};