const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes

router.get("/home", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/faqs", mainController.faqs);
