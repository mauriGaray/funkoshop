const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes

router.get("/shop", mainController.shop);
router.get("/shop/item/:id", mainController.productDetail);
router.post("/shop/item/:id/add", mainController.addProduct);
router.get("/shop/cart", mainController.cart);
router.post("/shop/cart", mainController.postCart);
module.exports = router;
