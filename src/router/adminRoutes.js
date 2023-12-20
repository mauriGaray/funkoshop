const express = require("express");
const router = express.Router();
const mainController = require("../controllers/adminController");
const upload = require("../middlewares/uploadFiles.js");
const { isLogged } = require("../middlewares/auth/isLogged");

router.use(isLogged);
// Routes

router.get("/", mainController.admin);
router.get("/create", mainController.createProducts);
router.post("/create", upload.array("images", 2), mainController.postProduct);
router.get("/edit/:id", mainController.getEditProduct);
router.put("/edit/:id", upload.array("images", 2), mainController.putEditProduct);
router.delete("/delete/:id", mainController.deleteProduct);
module.exports = router; // me olvidé de exportar el router en cada unas de las rutas. Me da error 'TypeError: Router.use() requires middleware function but got a Object'