const path=require('path')
const express=require('express');
const routeDir=require('../utils/path')
const router=express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(routeDir,'view','shop.html'))
  });

  module.exports=router;