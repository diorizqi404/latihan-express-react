const express = require("express");
const { validationResult } = require("express-validator"); // import validationResult from express-validator
const bcrypt = require("bcryptjs");
const prisma = require("../prisma/client");

const register = async (req, res) => {
  const errors = validationResult(req); // get errors from validationResult

  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation errors.",
      errors: errors.array(),
    });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "Registerr Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      error: error.message,
    });
  }
};

module.exports = { register };
