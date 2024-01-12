/*
// Strings ==> [immutable: No-change]

//String length
let str = "SHREYASH";
let str2 = "JavaScript";

console.log(str);
console.log(str.length);
console.log(str2);
console.log(str2.length);

console.log(str2[4]);  //String Indices


// Template Literals(string interpolation)
let obj = {
    item: "pen",
    price: 20,
    color: "Blue"
};
console.log(`The Cost of ${obj.item}
is ${obj.price} & Color of ${obj.item} 
is ${obj.color}`);                                      //  Literals
console.log(`Num : ${21 + 4}`);



console.log("The Cost of", obj.item,
    "is", obj.price);                                           //Normal wayTemplate
    
    //Slice String
    let str = "JavaScript";
    
    console.log(str.slice(4,7));
    
    //Concat Sting
    let str1 = "HTML";
    let str2 = "JavaScript";
    // let res = str1 + str2;
    let res = str1.concat(str2);
    
    console.log(res);
    
    
    // Replace String 
    let str = "JavaScript";
    str = str.replace("Java","Type");
    console.log(str);
    
    let str2 = "helplplp";
    str2 = str2.replace("lp","llo");
    str2 = str2.replaceAll("lp","llo");
    console.log(str2);
    
    
    //charAt(index)- String
    let str="JavaScript";
    str=str.charAt(4);
    console.log(str);
    
    */


//  Practices
let fullName = prompt("Enter Full-Name : ");
let userName = "@" + fullName + fullName.length;

console.log(userName);
