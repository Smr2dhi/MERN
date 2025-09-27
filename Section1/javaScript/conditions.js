// num = 30;
// if(num %2 == 0){
// 	console.log('even number');

// 	msg='hello';  //in javascript any varibale is global .so we use  3 keyword to define scope(var,let ,const)
// 	const pi = 3.14;
// 	console.log(pi);
// }
// else{
// 	console.log('odd number');
	
// }
// console.log(msg);


let marks = 40;
if(marks<=100 && marks>90){
	console.log('Grade A');
	
}
else if(marks<=90 && marks>70){
	console.log('Grade B');
}

else if(marks<=70 && marks>40){
	console.log('Grade C');
}

else if (marks<=40  && marks>=0){
	console.log('Fail');
}else{
	console.log('Invalid Marks');
	
}
