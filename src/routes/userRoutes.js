const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getUsers)

router.post('/login', userController.loginUser)

router.get('/user/:email', userController.getUserData)

router.post('/', userController.createUser)

router.post('/mod/:id', userController.modUser)

router.delete('/delete/:id', userController.deleteUser)

router.post('/jog/:id', userController.giveJogToUser)

router.post('/jelszo/:email', userController.jelszoValtoztatUser)

module.exports = router
