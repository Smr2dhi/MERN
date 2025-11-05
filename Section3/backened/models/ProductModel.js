const {Schema,model}= require('../connection');

const mySchema = new Schema({
 name:String,
 price:{type:String},
  brand :{type:String, unique : true},
 category: {type: String, require:true},
  description:{type:String, unique : true},
 type: {type: String, require:true},
},{timestamps:true,});

module.exports= model('Product', mySchema)