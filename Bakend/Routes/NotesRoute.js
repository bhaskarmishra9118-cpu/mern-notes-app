const {getallnotes,deleteNote,updateNote,createnotes}=require("../Controller/NotescController")
const express=require("express")
const router=express.Router()
const auth=require("../middleware/authmiddleware")

router.post("/addnote",auth,createnotes)
router.get("/getnotes",auth,getallnotes)
router.delete("/deletenote/:id",auth,deleteNote)
router.put("/updatenote/:id",auth,updateNote)

module.exports=router;
