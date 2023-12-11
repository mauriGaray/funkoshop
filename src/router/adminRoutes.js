const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes

router.get("/admin", mainController.admin);
router.get("/admin/create", mainController.getProducts);
router.post("/admin/create", mainController.postProduct);
router.get("/admin/edit/:id", mainController.getEditProduct);
router.put("/admin/edit/:id", mainController.putEditProduct);
router.delete("admin/delete/:id", mainController.deleteProduct);
