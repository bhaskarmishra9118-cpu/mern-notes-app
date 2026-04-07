const express = require("express")
const router = express.Router()
const loginController = require("../Controller/LoginController")

// ✅ Direct route define karo
router.post("/login", loginController)

module.exports = router