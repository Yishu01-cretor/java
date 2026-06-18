// // Arithmetic operators
// let a=10;
// let b=5;
// console.log("addition",a+b);
// let c=20;
// let d=4;
// console.log("subtraction",c-d);
// console.log("multiplication",a*b);
// console.log("division",a/b);
// console.log("modulus",a%d); 

// Assignment operators
// let x=10;
// b=x;
// console.log("assignment",b);
// b=x+5;
// console.log("addition assignment",b);

// let a=10;
// a =+10;
// a-=3;
// console.log("addition assignment",a);

// // comparison operators
// let z=10;
// let s=20;
// console.log("Less than",z<s);
// console.log("not equal to",z!=s);
// console.log("greater than equal to",z>=s);

// // Logical operators

// let age =20;
// console.log(age >5 && age >30); // And
// console.log(age <18 || age >60); // Or

// // increment and decrement operators
// z++;
// console.log("increment",z);

// z--;
// console.log("decrement",z);

// ternary operator

console.log(age > 18 ? 'eligible to vote' : 'not eligible to vote'); 
let bill = 10000;
let discount = 0;

if (bill < 2000) {
    discount = 0;
} else if (bill <= 5000) {
    discount = 25;
} else if (bill <= 7000) {
    discount = 35;
} else {
    discount = 35; // for bills above 7000
}

let discountAmount = (bill * discount) / 100;
let finalAmount = bill - discountAmount;

console.log("Bill Amount:", bill);
console.log("Discount:", discount + "%");
console.log("Discount Amount:", discountAmount);
console.log("Final Amount:", finalAmount);


let amount = 20000;
let discount = 0;

switch (true) {
    case amount >= 18000:
        discount = amount * 0.50;
        break;

    default:
        discount = 0;
}

console.log("Amount:", amount);
console.log("Discount:", discount);
console.log("Final Amount:", amount - discount);