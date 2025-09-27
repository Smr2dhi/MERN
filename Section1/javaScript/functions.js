//Method1-------------->
function addNums(a,b){
	var c=a+b;         //var also make it local in function like let and const
	console.log("Sum of two num:",c);
}
addNums(67,23);
// console.log(c);


//Method2-------------->
const getAvg= function(a,b,c){
	const avg=(a+b+c)/3;
	console.log(avg);
	// return avg;
	
}
const result=getAvg(21,47,67);
console.log(result); //undefined because value is not returned


//Method3--------------> Arrow function
const factorial =(n)=>{
	let f=1;
	for(let i=1;i<=n;i++){
		f=f*i;
		
	}
	return f;
}
const fact=factorial(6);
console.log("factorial of num =",fact);

