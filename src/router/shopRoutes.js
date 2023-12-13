const express = require("express");
const router = express.Router();
const mainController = require("../controllers/shopController");

// Ro
router.get("", mainController.shop);
router.get("/item/:id", mainController.productDetail);
router.post("/item/:id/add", mainController.addProduct);
router.get("/cart", mainController.cart);
router.post("/cart", mainController.postCart);
module.exports = router;
