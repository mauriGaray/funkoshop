const express = require("express");
const router = express.Router();

// Routes

router.get("/home", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/faqs", mainController.faqs);
