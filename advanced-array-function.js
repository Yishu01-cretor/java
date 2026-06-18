let arry=[2,5,4,7,8];
 
// map
let sqr = arry.map((ele)=> ele*ele)
console.log(sqr);

let div =arry.map((ele) => ele/2);
console.log(div);

//filetr
let even = arry.filter((ele)=> ele %2===0);
console.log(even);


let age = arry.filter((ele)=> ele <=6);
console.log(age);

let fifo =arry.find((ele)=> ele.id == 5);
console.log(fifo);

let elements = [2,4,5,7,9,4,6,];
console.log(elements.slice(1,4));

elements.splice(2,3);
console.log(elements);