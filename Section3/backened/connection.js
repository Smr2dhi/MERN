const mongoose = require('mongoose');

const url = "mongodb+srv://Smr2dhi:9935724962@cluster0.dgvg2t.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
	console.log('DataBase connected ');
	
})
.catch((err) => {
	console.log(err);
	
});
console.log('other statement');
module.exports = mongoose;
