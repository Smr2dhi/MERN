const express = require("express");

const app = express();

const port = 5000;

//endpoint or route
app.get('/',(req,res)=>{
  res.send('response from express')
})
app.add('/',(req,res)=>{
  res.send('response from add route')
})
//getby id
//getall
//delete
//update


app.listen(port, () => {
  console.log("express server started ");
});
