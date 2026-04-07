const mongoose=require("mongoose")
const userragistration=
  new mongoose.Schema(
    {
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true
      },
      password:{
        type:String,
        required:true,
        minlength:6
      },
    },
     {timestamps:true}
    
  )


const data=mongoose.model("UserRagistraion",userragistration);
module.exports=data;