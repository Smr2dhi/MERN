
const user={
	name:"Samriddhi yadav",
	email:"Smr2dhiya@gmail.com",
	password:"abc@345"
};
console.log(user);

console.log(user.name); //accesing m-1

console.log(user['email']);//accesing m-2

user.address='Lucknow'; //adding new key-value pair
console.log(user);

user.name="Shruti"
console.log(user);

console.log('name' in user); //key exist or not this tells
console.log(Object.keys(user)); //shows all keys
console.log(Object.values(user)); //shows all values


const sp={
	brand:'Realme',
	model:'Gt pro',
	price:3000,
	colors:['blue','black','white']

};
//access price
console.log(sp.price);

//change model of smartphone
sp.model='Gs56';
console.log(sp);

//second  color of phone
console.log(sp.colors[1]);

//add a new color
sp.colors.push('red');
console.log(sp);

//idexing work on string not on number

//checking idexing in string
console.log(sp.brand[1][0].slice(0,5));

const smartphone=[
	{
		brand:'Realme',
		model:'Gt2 Pro',
		price:3000,
		colors:['blue','black','white']
	}
];
console.log(smartphone.length);

console.log(smartphone[0]); //all value of obj Relame


console.log(smartphone[1]); //undefined b/c only one object

console.log(smartphone[0].price);  //3000
console.log(smartphone.price); //cannot aceess array using .price so ans=undefined.

console.log(smartphone[0].colors[2]);//white

console.log(smartphone[0].colors.push('green')); //adding new color
console.log(smartphone);

const smartphoneList=[
	{
		brand:'Realme',
		model:'Gt2 Pro',
		price:3000,
		colors:['blue','black','white']
	},
	{
		brand:'Apple',
		model:'iphone 13',
		price:45000,
		colors:['black','white',]
	},

	{
		brand:'Nothing',
		model:'3a',
		price:1000,
		colors:['black','white','blue']
	},

	{
		brand:'Motorola',
		model:'h50',
		price:1200,
		colors:['green','blue']
	},
	{
		brand:'IQOO',
		model:'Z2',
		price:15000,
		colors:['red','blue','black']
	}
];
console.log("-------------Filter nad map in object----------------------");

//Create an array containing all brands of smartPhone--->
const brands = smartphoneList.map((phone)=>{
	return phone.brand;
});
console.log(brands);


//filter smartPhone price less than 3000
const price1 = smartphoneList.filter((ph)=>{
    return ph.price < 3000;
});
console.log(price1);

//filter smartphone with brand Nothing

const Brand1 = smartphoneList.filter((ph)=>{
    return ph.brand ==='Nothing';
});
console.log(Brand1);
console.log("--------------------");

// filter smartphone having color white
const clr= smartphoneList.filter((ph)=>{
  return ph.colors.includes('white');
});console.log(clr);
console.log("--------------------");


//create an array of all smartphone prices
const arr=smartphoneList.map((ph)=>{
	return ph.price;
});
console.log(arr);
