const express = require("express");

const router = express.Router();

const kepController = require("../controllers/kepController");

router.get("/",kepController.getKepek);

module.exports = router;