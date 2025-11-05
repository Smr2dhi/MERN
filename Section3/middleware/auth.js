const jwt=require('jsonwebtoken');
require('dotenv').config();


const authorise = (req,res,next)=>{
	const token = req.header['Authorization'].split('')[1];
	console.log(token);
	
	if(!token){
		res.status(400).json({message: 'token not found'})
	}
	else{
		jwt.verify(token,process.env.jwt_secret,(err,data)=>{
			if(err){
				console.log(err);
				res.status(500).json(err);
			}


	})
}
}