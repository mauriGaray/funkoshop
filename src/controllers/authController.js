const path = require("path");

module.exports = {
  getAuthLogin: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  postAuthLogin: async (req, res) => {
    res.render('<h1>Usuario logueado</h1><a href="/">Volver</a>');
  },
  getAuthRegister: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  postAuthRegister: async (req, res) => {
    res.render('<h1>Usuario Registrado</h1><a href="/">Volver</a>');
  },
  getAuthLogout: async (req, res) => {
    res.render('<h1>Usuario deslogueado</h1><a href="/">Volver</a>');
  },
};
