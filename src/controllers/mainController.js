const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  //main
  home: async (req, res) => {
    const lastProducts = await models.getLastProducts();
    res.render(path.resolve(__dirname, "../views/main/index.ejs"), {
      lastProducts,
    });
  },

  contact: (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  faqs: (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  about: (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
};
