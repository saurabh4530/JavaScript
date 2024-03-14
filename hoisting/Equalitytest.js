// equality test

// loose equality ie ==
let le1=8=="8";    // true (string "5" is coerced to a number)
console.log(le1);

let le2="0"==false//// true (boolean false is coerced to a number)
console.log(le2);

let le3=null==undefined;// true (both null and undefined are considered equal)
console.log(le3);

console.log("................................................");

// strick equality ie ===

let se1=6==="6";// false bcoz sttring 6 is not equal to number 5
console.log(se1);

let se2="0"===false// false bcoz string 0 is not equal to boolean false
console.log(se2);


let se3=null===undefined;// false (both null and undefined are considered as differnt)
console.log(se3);




//// string 
// string length
let s1="kjvsbdkjhvsdkhskjdhkhaefklh     jkjh.kljeflkh   kjehjkgadhjagdhjdhklkjghuhbfkjh";
console.log(s1.length);

// str slice

let s2="my name is saurabh , i have came here for 12lakh+ package  ";// to print specific part of string where starting index is < than  ending index
console.log(s2.slice(10,18));//not included 18 character
console.log(s2.slice(-9,-1));// we can do it by negative  value

//string substr
let s3="my name is saurabh , i have came here for 12lakh+ package  ";// to print specific part of string where starting index is > than  ending index
console.log(s3.substring(10, 5));

// replace str 
let s4="my name is saurabh , i have came here for 12lakh+ package  ";
console.log(s4.replace("saurabh","tushar"));

//to uppercase
let s5="khdsihsdizxhfoishdzxoifhloaisdhzxihsldizxhloidhofydhoisdhy";
console.log(s5.toUpperCase());

// lowercase
let s6="KJDSHKJGHKSJHXKJHGSKJJ";
console.log(s6.toLowerCase());

//concat string
let s7="saurabh";
let s8=" sukhadev";
let s9=" kakade";
console.log(s7+s8+s9);
console.log(s7.concat(s8).concat(s9));


// str trim:  trim space arround the str

let a1="                    tushar patil                                   ";
console.log(a1);
console.log(a1.trim());

// String padEnd(Final Length , Numbers / Letters)

let a2="tushar patil";
let padstr="...123456...."

console.log(a2.padEnd(50,padstr));

// String padding to a Number
let numb = 1;
let digits = numb.toString();
let crores = digits.padEnd(9, 0);
let op11 = crores.concat(" ", " = There are 8 zeros in 10 Crores");
console.log(op11);


// String charAt(position)
let a3="i love india";
console.log(a3.charAt(5));

// String charCodeAt(position)
let op13 = "I Love Coding";
console.log(op13.charCodeAt(5));// it find ascii value



































