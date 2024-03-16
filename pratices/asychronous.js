{
    console.log('Start');

// Synchronous code
console.log('Step 1');

setTimeout(() => {
    console.log("set timeout executed");
}, 0);
// Microtask
Promise.resolve().then(() => {
  console.log('Microtask executed');
});

// Synchronous code
console.log('Step 2');

console.log('End');
}

{
var a=5;
console.log((a++));
console.log(a);}

{
console.log(2>1);
console.log(3>2>1);
let c=[]+[]
console.log(typeof c);
}