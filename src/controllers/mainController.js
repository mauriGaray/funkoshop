module.exports = {
  //main
  home: (req, res) => {
    res.render("index");
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
    res.render("shop");
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
