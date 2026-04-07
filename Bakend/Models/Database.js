const mongoose=require("mongoose");
const database=async()=>{
 try{

 await mongoose.connect(process.env.DATABASE_URL)
  console.log("database connected succesfully")
 }
 catch(err){
  console.log("some error occured ",err.message);
  
 }
}
module.exports= database;