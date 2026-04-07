const bcrypt = require("bcrypt")
const User = require("../Models/UserRagistration")

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // 🔴 1. Check empty fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    // 🔴 2. Trim values
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    // 🔴 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      })
    }

    // 🔴 4. Password validation
    if (trimmedPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      })
    }

    // 🔴 5. Check existing user
    const existingUser = await User.findOne({ email: trimmedEmail })
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
        
      })
      
    }

    // 🔴 6. Hash password
    const hashedPassword = await bcrypt.hash(trimmedPassword, 10)

    // 🔴 7. Create user
    const newUser = await User.create({
      name: trimmedName,
      email: trimmedEmail,
      password: hashedPassword
    })

    // 🔴 8. Send response (login endpoint will set auth cookie)
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    })

  } catch (error) {
    console.error("Register Error:", error)

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

module.exports = register