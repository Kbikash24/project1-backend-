const path=require('path')
const express=require('express');
const routeDir=require('../utils/path')
const router=express.Router();


router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(routeDir,'view','contact.html'))
  });
router.post('/message',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(routeDir, 'view', 'message.html'));
})
  module.exports=router;