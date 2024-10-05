const express = require('express')
const router = express.Router() // import express and create a new router
const registerController = require('../controllers/RegisterController') 
const loginController = require('../controllers/LoginController') 
const userController = require('../controllers/UserController') 
const verifyToken = require('../middlewares/auth') 
const { validateRegister, validateLogin } = require('../utils/validators/auth')
const { validateUser } = require('../utils/validators/user')

router.post('/register', validateRegister, registerController.register) // create a new route for register
router.post('/login', validateLogin, loginController.login)

router.get('/admin/users', verifyToken, userController.findUser)
router.get('/admin/users/:id', verifyToken, userController.findUserById)
router.post('/admin/users', verifyToken, validateUser, userController.createUser)
router.put('/admin/users/:id', verifyToken, validateUser, userController.updateUser)
router.delete('/admin/users/:id', verifyToken, validateUser, userController.deleteUser)

module.exports = router // export routes