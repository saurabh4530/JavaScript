// @ts-nocheck
// map - it is build in object store data in key value pair where key datatype can be any 

let map1=new Map([
    ["ram",25],
    [1,"xyz"],
    [true,{havegf:"no"}],
    ["life", function life(){console.log("unpredictable ");}],
    ["money",null]
]);

console.log( map1.set("brother",47));
console.log( map1.set("brother","pk"));// here we update brother existing value of brother 

console.log( map1.set({num:85},457));
console.log("..................................................");

console.log( map1.get("brother"));
console.log( map1.get(1));
console.log("..................................................");

console.log( map1.has(1));
console.log( map1.has("money"));
console.log( map1.has(2));
console.log("..................................................");

console.log( map1.delete(1));
console.log("..................................................");

map1.forEach((value,key)=>{
    console.log(`${key}   : ${value}`);
});
console.log(".......,,,,,,,,,,,,,,,...........................................");


for(let [key ,value] of map1){
        console.log(`${key}   : ${value}`);

}
console.log("..................................................");

console.log(map1.size);
console.log("..................................................");

for(let key of map1.keys()){
    console.log(`${key}  `);

}
console.log("..................................................");

for(let values of map1.values()){
    console.log(`${values}  `);

}
console.log("..................................................");

// convert map to array

let arr=[...map1];
console.log(arr);


console.log(map1.clear());
console.log(map1.size);



















