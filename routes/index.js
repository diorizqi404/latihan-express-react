const express = require('express')
const router = express.Router() // import express and create a new router
const registerController = require('../controllers/RegisterController') 
const loginController = require('../controllers/LoginController') 
const { validateRegister, validateLogin } = require('../utils/validators/auth')

router.post('/register', validateRegister, registerController.register) // create a new route for register
router.post('/login', validateLogin, loginController.login)

module.exports = router // export routes