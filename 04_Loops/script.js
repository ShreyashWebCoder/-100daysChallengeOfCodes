
/* Loop Statments 

// for loop (Multiplication Table)
let result;
let num = prompt("Enter an Integer :");

for (let i = 1; i <= 10; i++) {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
}





// while loop
let i = 1;
let result;
let num = prompt("Enter an Integer : ");

while (i <= 10) {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
    i++;
}



//do-while loop : 
// atleast 1 time statment print.

let i = 1;
let result;
let num = prompt("Enter an Integer :");
do {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
    i++;
} while (i <= 10);



// for of loop

let str= "JavaScript";
for(let val of str){
    console.log("val = ",val);
}


// find string length 
let str = "JavaScript";
let size = 0;

for(let val of str){
    console.log(val);
    size++;
}
console.log("String of Size : ",size);

*/


// for in loop 
let student = {
    name: "Rohit",
    age: 22,
    cgpa: 8.5,
    isPass: true
};

for (let key in student) {
    console.log(key);
    
    console.log("Key :", key, 
    "Value :", student[key]);
}
