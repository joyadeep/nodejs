import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    res.status(200).json({success:true,message:'hello server'})
})

app.listen(5000,()=>{
    console.log("server running at port 5000")
})