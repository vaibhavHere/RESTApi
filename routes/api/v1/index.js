const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>res.send('Currently using version v1.0 . Please proceed with specifying <i>/product</i> to start with CRUD operations'))

router.use('/product',require('./product'))

module.exports=router;