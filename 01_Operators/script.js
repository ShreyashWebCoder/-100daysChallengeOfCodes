
// Arithmetic Operator
console.log("Arithmetic Operator ==>");
let a = 5;
let b = 2;
let c = a + b;
console.log("a=", a, "b=", b);
console.log("c=", c);
console.log("Addition : a+b=", a + b);
console.log("Substraction : a-b=", a - b);
console.log("Multiplication : a*b=", a * b);
console.log("Division : a/b=", a / b);
console.log("Modulas : a%b=", a % b);
console.log("Exponentiation : a**b=", a ** b);

// Unary Operators

console.log("Increment Operator of a++ = ", a++);  // a++ = a+1 (post)
console.log("Increment Operator of ++a = ", ++a);  // --a = 1+a (pre)

console.log("Decrement Operator of a-- = ", a--);
console.log("Decrement Operator of --a = ", --a);

console.log("Increment Operator of b++ = ", b++);
console.log("Decrement Operator of ++b = ", ++b);

console.log("Increment Operator of b-- = ", b--);
console.log("Decrement Operator of --b = ", --b);



// Asssignment Operators

let x = 10;
let y = 20;

console.log('Assignment Operator ==>')
console.log('x= ', x = 10);
console.log('y= ', y = 20);
console.log('x+=50 =', x += 50);  //x=x+50
console.log('y+=50 =', y += 50);

console.log('x-=5=', x -= 5);
console.log('y-=5 =', y -= 5);

console.log('x*=10 =', x *= 10);
console.log('y*=10 =', y *= 10);

console.log('x**=2 =', x **= 2);
console.log('y**=2 =', y **= 2);

console.log('x%=4 =', x %= 4);
console.log('y%=4 =', y %= 4);



// Comparison Operators

let p = 6;
let q = 8;
console.log('Comparison Operators ==>');
console.log('p=', p, 'q=', q);
console.log('6==8 :', p == q);   //Boolean value
console.log('6!=8 :', p != q);
console.log('6===8 :', p === q);
console.log('6!==8 :', p !== q); 6
console.log('6<8 :', p < q);
console.log('6<=8 :', p <= q);
console.log('6>8 :', p > q);
console.log('6>=8 :', p >= q);


let w = "6";
console.log('6=="6" :', p == w);    // Equal to 
console.log('6==="6" :', p === w);  // Equal to & Type

console.log('6!="6" :', p != w);    // Equal to 
console.log('6!=="6" :', p !== w);  // Equal to & Type


// Logical Operators

// let a = 7;
// let b = 4;

console.log('Logical Operators ==>');
console.log('a=', a, 'b=', b);

console.log('a>b && b==4 :', a > b && b == 4);   // True && True  [AND]
console.log('a>b && b>a :', a > b && b > a);     // True && False [AND]

console.log('a>b || b!=4 :', a > b || b != 4);   // True && False [OR]
console.log('a==b || b!=4 :', a == b || b != 4);  //False && False [OR]

console.log('!(a==4)', !(a == 4));     // !False ==>True [NOT]
console.log('!(a>=b)', !(a >= 4));     // !True ==>False [NOT]




// Ternary Operators

let age = 25;

console.log('Ternary Operators ==>');
let result = age >= 18 ? "adult" : "Not adult";// Condition ? True O/P : False O/P
console.log('Result :', result)

