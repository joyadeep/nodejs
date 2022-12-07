import express from 'express'
import dotenv from 'dotenv'
const app=express();
dotenv.config();

const port=process.env.PORT||3000

app.get("/",(req,res)=>{
    res.status(200).json({success:true,message:'hello server'})
})

app.listen(port,()=>{
    console.log("server running at port ",port)
})