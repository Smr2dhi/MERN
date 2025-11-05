const express = require("express");
const userRouter = require('./routers/userRouter');
const ProductRouter  = require('./routers/ProductRouter');

const app = express();

const port = 5000;

//middleware
app.use('/user',userRouter);
app.use('/product',ProductRouter);

//endpoint or route
app.get('/',(req,res)=>{
  res.send('response from express')
})
app.get('/add',(req,res)=>{
  res.send('response from add route')
})
app.get('/getbyid',(req,res)=>{
  res.send('response from getbyid route')
})
app.get('/getall',(req,res)=>{
  res.send('response from getall route')
})

app.get('/delete',(req,res)=>{
  res.send('response from delete route')
})



app.listen(port, () => {
  console.log("express server started ");
});
