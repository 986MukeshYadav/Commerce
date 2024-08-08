const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')
const authToken = require('../middleware/authToken')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userSignInController)

module.exports = router