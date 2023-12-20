const express = require("express");
const router = express.Router();
const {
  admin,
  createProducts,
  postProduct,
  getEditProduct,
  putEditProduct,
  deleteProduct,
} = require("../controllers/adminController");
const { isLogged } = require("../middlewares/auth/isLogged");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

router.use(isLogged);
const uploadFile = multer({ storage });
// Routes

router.get("/", admin);
router.get("/create", createProducts);
router.post("/create", uploadFile.array("image", 2), postProduct);
router.get("/edit/:id", getEditProduct);
router.put("/edit/:id", putEditProduct);
router.delete("/delete/:id", deleteProduct);
module.exports = router; // me olvidé de exportar el router en cada unas de las rutas. Me da error 'TypeError: Router.use() requires middleware function but got a Object'
