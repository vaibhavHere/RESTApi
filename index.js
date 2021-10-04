// // In the package.json file add “type” : “module” then using ES6 imports
// import express from 'express'
// import dotenv from 'dotenv'
// import connection from './config/atlas.js'
// dotenv.config()

const express=require('express');
require('dotenv').config();
require('./config/atlas');

const app=express();
const port=process.env.PORT || 8000;

app.listen(port,()=>console.log('Server is running at port',port))
app.use(express.json());
app.get('/',(req,res)=>res.send("<h1>Hi,Homepage of API</h1>"))
app.use('/api',require('./routes/api/'))                                                                      

