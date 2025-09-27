                         //Maps.....................>>>>>>>>>>>>>

const nums=[4,5,8,9,11,2];
 const sqrnums=nums.map((n)=>{
	return n*n;
});
console.log(sqrnums);

//Wap to mulp by 5
 const mult=nums.map((n)=>{
	return n*5;
});
console.log(mult);

//Wap to add gst
const price=[3400,4750,2900,1200,8740,9900]
const newPrice=price.map((a)=>{
	return a*1.18;
});
console.log(newPrice);
 
//comparison to map and filter
const evenUms=nums.map((n)=>{
return n%2==0;
});
console.log(evenUms);   // maps gives true flase answer


                         //filter.....................>>>>>>>>>>>>>


const evenNUms=nums.filter((n)=>{ // but filter give nums
return n%2==0;
});
console.log(evenNUms);


//wap to filter prices less than 6000
const newrice=price.filter((a)=>{
	return a<6000;
});
console.log(newrice);

//wap to convert [455,77,97,2134]
const prices2=['$455.45',"$77.332","$97.12","$2134.9"]
const pricenew=prices2.map((a)=>{
	return parseInt(a.replace('$'," "));

});
console.log(pricenew);

// //m-2
// const numPrice3=prices2.map((p)={
// 	return parseInt(p.slice(1))
// });
// console.log(numPrice3);


//Wap to uppercase
const names=['Ramu','Raju','pinki','Kaliya'];
const b=names.map((a)=>{
	return a.toUpperCase();
});
console.log(b);

const fullNames=['Samriddhi yadav','Binte Zehra','Prateek singh','saurabh Sharma ']
console.log('Raju rastogi'.split(' ')[0]);

