const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>res.send('You are now one step into using our api. Please proceed with specifying the version as v1, v2, v3..'))

router.use('/v:version',versionExists,require('./v1'))

function versionExists(req,res,next){
if(req.params.version=='1')
next();
else
res.send(`Oops, We haven't rolled out version v${req.params.version}.0 yet :(`)
}

module.exports=router;