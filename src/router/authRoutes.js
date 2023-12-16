const express = require("express");
const router = express.Router();
const {
  getAuthLogin,
  postAuthLogin,
  getAuthRegister,
  getAuthLogout,
  postAuthRegister,
} = require("../controllers/authController");
const validationResult = require("../middlewares/validator/validator");
const validateRegister = require("../middlewares/validator/validateRegister");

// Routes

router.get("/login", getAuthLogin);
router.post("/login", postAuthLogin);
router.get("/register", getAuthRegister);
router.post("/register", validateRegister, validationResult, postAuthRegister);
router.get("/logout", getAuthLogout);
module.exports = router;
