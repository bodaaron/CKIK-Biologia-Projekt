const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

router.post("/login", userController.loginUser);

router.post("/user",userController.getUser);

router.post("/", userController.createUser);

router.post("/mod/:id",userController.modUser);

router.delete("/delete/:id",userController.deleteUser);

router.post("/jog/:id",userController.giveJogToUser);

module.exports = router;