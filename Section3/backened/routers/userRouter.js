const express = require('express');

const router =express();
router.get('/add',(req,res)=> {
	res.send('add response from user');

});

//getall
router.get('/getall',(req,res)=>{
	res.send('getall from the user')
})
//getid
router.get('/getid',(req,res)=>{
	res.send('getid from the user')
})
//delete
router.get('/delete',(req,res)=>{
	res.send('Delete item from the user')
})
//update
router.get('/update',(req,res)=>{
	res.send('updated from the user')
})
module.exports = router;