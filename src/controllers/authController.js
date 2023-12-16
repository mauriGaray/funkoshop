const path = require("path");
const user = require("../models/db/users.model");

module.exports = {
  getAuthLogin: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  postAuthLogin: async (req, res) => {
    const created = await user.create(req.body);
  },
  getAuthRegister: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  postAuthRegister: async (req, res) => {
    const created = await user.create(
      req.body.nombre,
      req.body.apellido,
      req.body.email,
      req.body.password
    );
    res.redirect("/");
  },
  getAuthLogout: async (req, res) => {
    res.render('<h1>Usuario deslogueado</h1><a href="/">Volver</a>');
  },
};
