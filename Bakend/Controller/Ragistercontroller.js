const express=require("express")
const app=express.Router()
const Ragisterdabase=require("../Models/UserRagistration")

const Register=async()=>{
const Alldata=await Ragisterdabase.find({})
await Ragisterdabase.findOne({Emai:email})
const {email}=req.body
}