/*

//Arrays- similiar datatype [Mutable]

let marks = [83, 64, 92, 90, 81];
console.log(marks);

let string = ["Rahul", "Rohit", "Virat"];
console.log(string);

//Array Indices
console.log("Arrays Indices: ", marks[3]);

string[1] = "RAM";  //mutable
console.log("Indices value change: ", string);

//Looping array- (for loop)
let comp = ["keyborad", "mouse", "printer", "monitor", "CPU"];
console.log(comp);
for (i = 0; i < comp.length; i++) {
    console.log(comp[i]);
}

// for-of looping array
for (let i of comp) {
    console.log(i);
}

// for-in looping array
for (let i in comp) {
    console.log(comp[i]);
}




//Problem-1: (Find Average)
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
console.log(`Total marks : ${sum}`);

let avg = sum / marks.length;
console.log(`Average Marks of Entire Class: ${avg}`);

*/

// Problem-2 (10% offer)
let items = [250, 654, 773, 23, 98, 700];
let i = 0;

for (let val of items) {
    console.log(`Value of Item ${i} => ${val}`);

    let offer = val / 10;
    items[i] -= offer;
    console.log(`Offer : ${items[i]}`);
    i++;
}

// OR 

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
    
