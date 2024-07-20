// sets 


let set1=new Set([
    1,
2,
"ram",
{
a:"jbdknb",b:5654
},
()=>{
    console.log(".........................");
}

]);


console.log(set1.add("text"));

console.log(set1.delete("ram"));
console.log(set1.has("ram"));
console.log(set1.has(1));

console.log(set1.size);


set1.forEach((values)=>{
    console.log(values);
})
console.log(".........................");

for(let value of set1){
    console.log(value)

};
console.log(set1.clear());




//converted setds into array
let arr1=[...set1];
console.log(arr1);



///////////////////////////

{ //take array having 3 digit number and print only number having 1 at the middle

    let arr=[213,415,112,13,14,16]

    // ans=[213,415,112]
    
    for (let i = 0; i < arr.length; i++) {
        let a=arr[i].toString()
        if(a.startsWith("1" ,1)) {
           console.log(arr[i]);
        } 
    }
}