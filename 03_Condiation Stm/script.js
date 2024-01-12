if(mode === "dark") console.log('mode');


//Condition Statements
console.log('Condition Statements ==>');

// if statements
var age = 22;

console.log("if statements :");
if (age >= 18) {
    console.log("You can Vote.");
}
if (age < 18) {
    console.log("You Cannot Vote.");
}



// if-else statemnts
let mode = "light";

console.log("if-else statements :");
if (mode === "black") {
    screen = "Screen is White.";
}
else {
    screen = "Screen is Black.";
}
console.log(screen);



// Find number Even / Odd [Using, if-else]
let num = 10;

if (num % 2 === 0) {
    console.log("Number is Even : ", num);
}
else {
    console.log("Number is Odd : ", num);
    
}




// else-if statements 
var age= prompt("Enter the age");

if(age<0){
    console.log("This is invalid age.");
}
else if(age<=15)
{
    console.log("You are a kid & can't think driving");
}
else if(age>=15 && age<18){
    console.log("You are a kid & can think driving after 18");
} 
else{
    console.log("You can now drive , you are above 18");
}




// Find Scores of student 

let score = prompt("Enter the student score :");
let grade;

if (score >= 90 && score <= 100) {
    grade=("Your Grade is 'A' .");
}
else if (score >= 70 && score <= 89) {
    grade=("Your Grade is 'B' .");
}
else if (score >= 60 && score <= 69) {
    grade=("Your Grade is 'C' .");
}
else if (score >= 50 && score <= 59) {
    grade=("Your Grade is 'D' .");
}
else if (score >= 45 && score <= 49) {
    grade=("You are a 'Pass'.");
}
else{
    grade=("You are a 'FAIL' .");
}

console.log(grade);