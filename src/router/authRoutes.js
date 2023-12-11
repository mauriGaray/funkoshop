const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes

router.get("/auth/login", mainController.getAuthLogin);
router.post("/auth/login", mainController.postAuthLogin);
router.get("/auth/register", mainController.getAuthRegister);
router.post("/auth/register", mainController.postAuthRegister);
router.get("/auth/logout", mainController.getAuthLogout);
module.exports = router;
