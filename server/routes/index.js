const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/userDetails')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)


//Admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

module.exports = router
