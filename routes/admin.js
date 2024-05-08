const path=require('path')
const express=require('express');
const routeDir=require('../utils/path')

 const router=express.Router();
 router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(routeDir,'view','add-product.html'))
  });
  
  router.post('/product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
  });

 module.exports=router;