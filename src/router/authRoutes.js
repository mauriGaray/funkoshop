const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes

router.get("/login", mainController.getAuthLogin);
router.post("/login", mainController.postAuthLogin);
router.get("/register", mainController.getAuthRegister);
router.post("/register", mainController.postAuthRegister);
router.get("/logout", mainController.getAuthLogout);
module.exports = router;
