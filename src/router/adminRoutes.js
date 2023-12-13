const express = require("express");
const router = express.Router();
const mainController = require("../controllers/adminController");

// Routes

router.get("/", mainController.admin);
router.get("/create", mainController.getProducts);
router.post("/create", mainController.postProduct);
router.get("/edit/:id", mainController.getEditProduct);
router.put("/edit/:id", mainController.putEditProduct);
router.delete("/delete/:id", mainController.deleteProduct);
module.exports = router; // me olvidé de exportar el router en cada unas de las rutas. Me da error 'TypeError: Router.use() requires middleware function but got a Object'
