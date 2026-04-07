const express = require("express")
const router = express.Router()
const registerController = require("../Controller/Registercontroller")

router.post("/register", registerController)
router.get("/register", (req, res) => {
  res.send("This is the register page")
})

module.exports = router