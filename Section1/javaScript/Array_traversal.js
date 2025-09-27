const nums=[4,6,8,9,3,1,2];
//Using index
for(let i=0;i<nums.length;i++){
	console.log(nums[i]);
}
console.log("-------------------------------------");
console.log('using for of loop');


//using for of loop
for(let n of nums){
	console.log(n);
	
}
console.log("Square num:");

//print square of all elemnt in the array
arr=[1,2,3,4,5,7,8,24];
for ( let num of arr){
	console.log(num**2);
	
}
console.log("Even num: ");

//print even nums
for (let num of arr){
	if(num%2==0){
		console.log(num);
		
	}
}

//imp new way...........
console.log("for each loop goes here>>>>>>>>>>>>>>>>>>>>");

nums.forEach((a) => {
	console.log(a);         //print all elemnt of nums
	
})
nums.forEach((a,n) => {
	console.log(a,n);       //print all elemnt of nums and idex of array
	
})
nums.forEach((a,n,i) => {
	console.log(a,n,i);        //1.print all elemnt of nums and2. idex of array and 3. all array one again print
	
})
nums.forEach((a,n,i,x) => {
	console.log(a,n,i,x);      //undefined
	
})

//wap to filter all prices less than 4000	

prices=[3000,4500,6000,1200,2300];
prices.forEach((p)=>{
	if(p<4000){
		console.log(p);
		
	}
})

