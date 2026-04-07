const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../Models/UserRagistration")

const Login = async (req, res) => {
  try {
    const { email, password } = req.body || {}

    // ✅ 1. Check empty fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    // ✅ 2. Check user exists
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found, please register"
      })
    }

    // ✅ 3. Compare password (bcrypt)
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    // ✅ 4. Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    const isProduction = process.env.NODE_ENV === "production"

    // ✅ 5. Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000
    })

    // ✅ 6. Response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    console.error("Login Error:", error)

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

module.exports = Login