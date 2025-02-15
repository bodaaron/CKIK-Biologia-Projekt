const express = require("express");

const router = express.Router();

const feleletController = require("../controllers/feleletController");

router.post("/diak",feleletController.createFeleletDiak);

module.exports = router;