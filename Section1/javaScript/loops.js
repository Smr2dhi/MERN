for (let i = 0; i < 10; i++) {
  console.log(i);
}

//  what is for same line but can only pass string not any other?
// ans- , you should use process.stdout.write() (in Node.js) or just document.write() (in browser).
//process.stdout.write() only accepts a string, but i is a number.

var s = "";
for (var i = 1; i < 11; i += 1) {
  s += i + " ";
}
console.log(s);

//while Loop
let a = 10;
while (a < 20) {
  console.log(a);
  a++;
}

//do-while Loop
console.log("***********");

let b = 5;
do {
  console.log(b);
  b++;
} while (b > 30);

//WAP to print all number divisible by 7 in range of 30-160
for (let i = 30; i <= 160; i++) {
  if (i % 7 == 0) {
    console.log(i + " ");
  }
}

//WAP to check prime

let x = 12;
let prime = true;
for (let i = 2; i < x; i++) {
  if (x % i === 0) {
    console.log("Not a prime num");
    prime = false;
    break;
  }
}
if(prime) console.log("Prime num");


console.log("Reversed num");
//WAP to reverse a num
let st = 2345896;
let rev = 0;
while (st > 0) {
  let m = st % 10;
  rev = rev * 10 + m;
  st = parseInt(st / 10);
}
console.log(rev);


