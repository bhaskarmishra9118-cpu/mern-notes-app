const mongoose=require("mongoose")

  const Notes=new mongoose.Schema(
    {
      Title:{
        type:String,
        required:true,
        maxlength:30,
      },
      description:{
        type:String,
        minlength:10,
        required:true
      },
      info:{
        type:String,
        required:false,
                 
      },
      user:{
        type:mongoose.Schema.Types.ObjectId, ref:"UserRagistraion"
      }
    },
    { timestamps: true }
  )

const notes=mongoose.model("Notes",Notes)
module.exports=notes;