const { body } = require('express-validator') // import body from express-validator
const prisma = require('../../prisma/client') // import prisma client

// definisikan validasi untuk register
const validateRegister = [
    body('name').notEmpty().withMessage('Name is required.'), // check if name is empty
    body('email')
        .notEmpty().withMessage('Email is required.') // check if email is empty
        .isEmail().withMessage('Email is invalid.') // check if email is valid
        .custom(async  (value) => {
            if (!value) throw new Error ('Email is required.')
            
            const user = await prisma.user.findUnique({ where: { email: value } })
            if (user) throw new Error ('Email already exists.')

            return true
        }),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'), // check if password is at least 6 characters
]

// definisikan validasi untuk login
const validateLogin = [
    body('email').notEmpty().withMessage('Email is required.'), // check if email is empty
    body('password').isLength({ min: 6 }).withMessage('Password is required.'), // check if password is empty
]

module.exports = {validateRegister, validateLogin} // export validateRegister and validateLogin