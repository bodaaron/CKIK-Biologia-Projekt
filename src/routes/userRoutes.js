const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

router.post("/login", userController.loginUser);

router.post("/user",userController.getUser)

router.post("/", userController.createUser);

router.post("/mod/:id",userController.modUser)

module.exports = router;