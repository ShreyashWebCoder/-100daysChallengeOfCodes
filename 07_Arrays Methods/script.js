

// Arrays Methods
let studentName = ["Rahul", "Vedant", "Shreyash", "Rohan"];

console.log(studentName);
console.log(studentName.push("Chetan","Ankit"));

let rollNumber = [134, 136, 138, 200];
console.log(studentName.pop());

console.log(studentName.toString());

console.log(studentName.concat(rollNumber));

// unshift(); ==> push (1st)
rollNumber.unshift("300");

// shift(); ==> pop (1st)
rollNumber.shift();


// slice()
console.log(studentName.slice(1, 3));

// splice(startIdx,delIdx,newIdx) ==>(Add,Remove,Replace);
console.log(rollNumber.splice(1, 2, 500));



// Practices
console.log(rollNumber.slice(2));

let companies= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies.slice(1));
console.log(companies.splice(2,1,"Ola"));


console.log(companies.unshift("Amazon"));
