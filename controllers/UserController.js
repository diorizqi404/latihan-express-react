const express = require('express')
const { validationResult } = require('express-validator')
const prisma = require('../prisma/client')
const bcrypt = require('bcryptjs')

const findUser= async (req, res) => {
    try{
        const user = await prisma.user.findMany({
            select: {
                id: true, 
                name: true,
                email: true,
            },
            orderBy: {
                id: "asc"
            }
        })

        return res.status(200).json({ success: true, message: 'Get all user successfully', data: user })
    }catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const createUser = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, message: 'Validation errors', errors: errors.array() })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try{
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            }
        })

        res.status(201).json({ success: true, message: "User created successfully", data: user })
    }catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const findUserById = async (req, res) => {
    const { id } = req.params

    try{
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        res.status(200).json({ success: true, message: `Get user by id: ${id}`, data: user })
    }catch (error){
        return res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, message: 'Validation errors', errors: errors.array() })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try{
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            }
        })

        res.status(200).json({ success: true, message: `User updated successfully`, data: user })
    }catch (error){
        return res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try{
        const user = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })

        res.status(200).json({ success: true, message: `User deleted successfully`, data: user })
    }catch (errors){
        return res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports = { findUser, createUser, findUserById, updateUser, deleteUser }