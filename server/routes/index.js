const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignup")

router.post("/signup",userSignUpController)

module.exports = router