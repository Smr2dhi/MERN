const arr=[2,49,7,true,'hello',78.90]
console.log(typeof(arr));  //object
console.log(Array.isArray(arr));

const movies=['Avenger','Simba','TMK','Sholey','Babhubali','Saiyaara']; //const does not let new array making like movies=[89,97,.. ]something like this
console.log(movies.length);

//Indexing
console.log(movies[4]);
console.log(movies.indexOf('TMK'));
console.log(movies[-1]);// It would actually return undefined, because JavaScript array indexing starts at 0 and only supports non-negative integers as indices. Any negative index is treated as a property on the array object, and if no such property exists (which is usually the case), it returns undefined. 
console.log(movies.at(-1)); //it provide negative indexing
console.log(movies.at(1));

movies[2]='PK' //.at not support to add and replace
console.log(movies);

//Slicing
console.log(movies.slice(2,4)); //pk,sholey
console.log(movies.slice(-2)); // bahubali saiyaara

console.log(movies);

console.log(movies.splice(2,4)); //pk ,Sholey,Bahaubali,Saiyaara
console.log(movies);

//Adding and removing element from array
movies.push('Coolie');  //adds element at the last index 
console.log(movies);
movies.unshift('Jurassic');  //add the element at the starting of it
console.log(movies);

movies.pop();
console.log(movies);

movies.shift();
console.log(movies);

//arr.splice(startPoint, deleteCount, item1, ..., itemN)
//deleting,inserting and replacing elements


// movies.splice(3,2); //removing element
// console.log(movies);


// movies.splice(3,2,'Maalik','Dar'); //replcing element
// console.log(movies);


// movies.splice(3,0,'Maalik','Dar'); // inserring 0 shows no element are deleted here only inserted at index 3 and other shift ot right
// console.log(movies);


const brands=['Samsung','Nokia','Oneplus','Apple','MI','OPPO']

//access brands from oneplus to MI
console.log(brands.slice(2,5));


//replace Nokia with "Motorola"
brands.splice(1,1,'Motorola') //brands[1]='motorola'
console.log(brands);

//add new element atthe beg 
brands.unshift('Realme')
console.log(brands);

//remove last 2 element
brands.splice(5,2); //brands.splice(-2,2)
console.log(brands);


//replace samsung with blackberry
brands.splice(1,1,"blackberry");
console.log(brands);

//add a new brand after blackberry
brands.splice(2,0,"Vivo");
console.log(brands);














