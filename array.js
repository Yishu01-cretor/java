
let arry =  [1  , 3 , "Yishu", 62.5, true ];
console.log(arry)
// Accessing an element
console.log(arry[2])

//updqating an element
arry[3]=52;
console.log(arry[3])
console.log(arry)

// Adding an element

arry.push(26);
console.log(arry);

// adding elemt in strating
arry.unshift(90);
console.log(arry);

//delete the last element
arry.pop();
console.log(arry);

//delete the first element of array

arry.shift();
console.log(arry);

//traverse on print
for(i=0; i < arry.length; i++){
console.log(arry[i]);
}

arry.forEach(i=>{
  console.log(i)
})

console.log(arry.includes(5));

console.log(arry.indexOf(52));


function printElements(arry){
  for(let i=0; i<arry.length;i++){
    console.log(arry[i]);
  }
}

const student = ["John" , "Sid"];
printElements(student);

printElements(arry);



function num (arry){
  for(let i=0; i<arry.length;i++){
    if(arry%2==0){
      console.log(arry[i]);
    }
  }
}

const number = [1,2,3,4,5,6,4,6,4];
num(number);