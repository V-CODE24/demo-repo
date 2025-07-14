 const express = require("express");
 const app = express();

// ------Function that requires boolean if the age of person is more than 14 or not-------
//  function isOldEnough(age){
//     if (age>=14){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }
 function isOldEnoughMiddleware(req,res,next){
    // const age  = req.query.age; 
    if (age>=14){
        next();
}  else{
  res.json({
      msg : "Sorry you are not of age yet"
  })
    }
 }
 
 app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    // if(isOldEnough(req.query.age)){
 res.json({
     message : "you have rided Ride-2"
    })
    }
    //  else {
    //     res.status(411).json({
    //         msg : "Sorry you are not of age yet"
    //     })
    // }
   )
 app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    if(isOldEnough(req.query.age)){
 res.json({
     message : "you have rided Ride-1"
    })
    } 
    // else {
    //     res.status(411).json({
    //         msg : "Sorry you are not of age yet"
    //     })
    // }
   
 })

 app.listen(3001),function(){
    console.log("Server is running!");
 };
