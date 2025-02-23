const express = require("express");

const router = express.Router();

const valaszController = require("../controllers/valaszController");

router.post("/valasz",valaszController.createValasz);

module.exports = router;