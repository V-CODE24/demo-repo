  const express = require("express");
  const app = express();
 
 // ------Function that requires boolean if the age of person is more than 14 or not-------
 
  function isOldEnoughMiddleware(req,res,next){
     const age  = req.query.age; 
     if (age>=14){
         next();
 }  else{
   res.json({
       msg : "Sorry you are not of age yet"
   })
     }
  }
  
  app.use(isOldEnoughMiddleware);//way to use middleware to each one of routes
  // it should be at the top of the routes cause ony below one can use 
  app.get("/ride2",function(req,res){
  res.json({
      message : "you have rided Ride-2"
     })
     }
    )
  app.get("/ride1",function(req,res){
  res.json({
      message : "you have rided Ride-1"
     })
     }  
)
 
  app.listen(3000),function(){
     console.log("Server is running!");
  };
 