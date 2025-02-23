const express = require("express");

const router = express.Router();

const feleletController = require("../controllers/feleletController");

router.post("/diak",feleletController.createFeleletDiak);

router.get("/:id",feleletController.getDiakFeleletek);

router.post("/valasz",feleletController.getDiakFeleletek);

router.post("/date/:id",feleletController.updateFeleletDate)

module.exports = router;