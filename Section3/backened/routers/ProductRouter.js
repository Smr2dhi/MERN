const express = require('express');
const Model =require('../models/ProductModel')

const router = express();
 router.post('/add',(req,res)=>{
	console.log(req.body);
		new Model(req.body).save()
		.then((result)=>{
			res.status(200).json(result);
		}).catch((err)=>{
			console.log(err);
			res.status(500).json(err);
			
		});
 });

 router.get('/add',(req,res)=>{
	res.send('add from the user')
})

//getall
router.get('/getall/',(req,res)=>{
	Model.find(req.params.id)
	.then((result) => {
		res.status(200).json(result)
		
	}).catch((err) => {
		console.log(err);
		res.status(500).json(result)
		
	});
})
//getid
router.get('/getid/:id',(req,res)=>{
	Model.findById(req.params.id)
	.then((result) => {
		res.status(200).json(result)
		
	}).catch((err) => {
		console.log(err);
		res.status(500).json(result)
		
	});
})
//delete
router.delete('/delete/:id',(req,res)=>{
	
	Model.findById(req.params.id)
	.then((result) => {
		res.status(200).json(result)
		
	}).catch((err) => {
		console.log(err);
		res.status(500).json(result)
		
	});
})
//update
router.put('/update/:id',(req,res)=>{
	Model.findById(req.params.id)
	.then((result) => {
		res.status(200).json(result)
		
	}).catch((err) => {
		console.log(err);
		res.status(500).json(result)
		
	});
})
 module.exports =router;