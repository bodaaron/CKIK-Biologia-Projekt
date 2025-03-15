const express = require("express");

const router = express.Router();

const adatController = require("../controllers/adatController");

router.get("/:id",adatController.getAdatok);

module.exports = router;