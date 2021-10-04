const mongoose=require('mongoose')
const dotenv=require('dotenv').config();
const mongo_url=process.env.MONGO_URL;

mongoose.connect(mongo_url,{useNewUrlParser:true})
.catch((err)=>console.log("Database error - ",err));

const connection=mongoose.connection
connection.on('connected',()=>console.log("Database is connected"))
connection.on('error',()=>console.log("Database not connected"))
