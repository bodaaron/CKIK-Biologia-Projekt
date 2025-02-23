const express = require("express");

const router = express.Router();

const valaszController = require("../controllers/valaszController");

router.post("/valasz",valaszController.createValasz);

router.get("/:id",valaszController.getValaszok)

module.exports = router;