const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/userDetails')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)

module.exports = router