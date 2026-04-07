const mongoose=require("mongoose")

  const userlogin=new mongoose.Schema(
    {
      name:{
        type:String,
        required:false
      },
      email:{
        type:String,
        requied:true,
        unique:true,
        lowercase: true
      },
      password:{
        type:String,
        requied:true,
        minlength:6
      },
    },
      {timestamps:true

    }
  )


const login=mongoose.model("UserLogin",userlogin);
module.exports=login;