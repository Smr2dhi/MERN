const express = require('express');

const router = express();
 router.get('/add',(req,res)=>{
	res.send('add from the product router');
 });

 router.get('/add',(req,res)=>{
	res.send('add from the user')
})

//getall
router.get('/getall',(req,res)=>{
	res.send('getall from the product')
})
//getid
router.get('/getid',(req,res)=>{
	res.send('getid from the product')
})
//delete
router.get('/delete',(req,res)=>{
	res.send('Delete item from the product')
})
//update
router.get('/update',(req,res)=>{
	res.send('updated from the product')
})
 module.exports =router;