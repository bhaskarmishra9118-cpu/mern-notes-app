const jwt = require("jsonwebtoken")

const authmiddleware = async (req, res, next) => {
  const token = req.cookies.token   // await ki zarurat nahi

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    req.userId = decoded.id

    next()   // ✅ bas yahi hona chahiye
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token"
    })
  }
}

module.exports = authmiddleware