import express from 'express'
import dotenv from 'dotenv'
import dbConfig from './config/dbConfig.js';
const app=express();
dotenv.config();

const port=process.env.PORT||3000
dbConfig()
app.get("/",(req,res)=>{
    res.status(200).json({success:true,message:'hello server'})
})

app.listen(port,()=>{
    console.log("server running at port ",port)
})