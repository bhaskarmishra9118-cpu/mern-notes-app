const express=require("express")
require("dotenv").config()
const path=require("path")
const cors=require("cors")
const cookieParser = require("cookie-parser")
const database = require("./Models/Database")
const app=express()
const register=require("./Routes/RegisterRoute")
const notesroute=require("./Routes/NotesRoute")
const Login=require("./Routes/LoginRoutes")

database()
app.set("trust proxy", 1)

const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from Postman/curl (no browser origin).
    if (!origin) {
      return callback(null, true)
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error("Not allowed by CORS"))
  },
  credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true } ))
const port=process.env.PORT || 4001


app.get("/",(req,res)=>{
console.log(req.url,req.method)
res.sendFile(
 (path.join(__dirname,"public","Home.html"))
 
)
})



app.use("/auth",register)
app.use("/auth",Login)
app.use("/notes",notesroute)

app.listen(port,()=>{
console.log(`server is connected to port${port}`);

})