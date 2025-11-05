const {Schema,model}= require('../connection');

const mySchema = new Schema({
 name:String,
 email:{type:String, unique : true},
 password: {type: String, require:true},
 city: {type:String ,default:'unknown'},

},{timestamps:true,});

module.exports= model('users', mySchema)