// let a = 10;
// if (a > 0) {
//   console.log("positive");
// }
// else {
//   console.log("negative");
// }


// num = 14;
// if (num % 2 == 0) {
//   console.log("even");
// }
// else {
//   console.log("odd");
// }

// let marks = 50;
// if (marks > 90) {
//   console.log(grade = "A");
// }
// else if (marks >= 70) {
//   console.log(grade = "B");
// }

// else if (marks >= 50) {
//   console.log(grade = "C");
// }

// let day = 2;
// switch(day){
//   case 1: console.log('Monday');
//   break;
//   case 2: console.log('Tuesady');
//   break;
//   case 3: console.log('wednesday');
//   break;
//   case 4: console.log('thrusday');
//   break;
//   case 5: console.log('Friday')
//   break;
//   case 6: console.log('Saturday');
//   break;
//   case 7: console.log('Sunday');
//   break;
// }

let amount = 20000;
let discount = 0;

switch (true) {
    case amount >= 18000:
        discount = amount * 0.50;
        break;

    default:
        discount = 0;
}

// console.log("Amount:", amount);
// console.log("Discount:", discount);
console.log("Discount is:",discount);