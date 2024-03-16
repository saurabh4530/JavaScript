// @ts-nocheck

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((response) => {
  console.log(response);
});

console.log("end");

// using variable
let bucket = [
  "rice",
  "vegitables",
  "salt",
  "coffee",
  "tea",
  "chip",
  "chicken Pieces",
];

let promise1 = new Promise((resolve, reject) => {
  if (bucket.includes("rice") && bucket.includes("vegitables")) {
    resolve("make biryani");
  } else {
    reject("couldnt make biryani");
  }
});
// promise1
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function x() {
  let result = await promise1;
  return result;
}
console.log(x());

////////////////////////////////////////////////////
// using function

function promise2() {
  let bucket1 = [
    "rice",
    "vegitables",
    "salt",
    "coffee",
    "tea",
    "chip",
    "chicken Pieces",
  ];
  return new Promise((resolve, reject) => {
    if (bucket1.includes("rice") && bucket1.includes("vegitables")) {
      resolve("make biryani");
    } else {
      reject("couldnt make biryani");
    }
  });
}
promise2()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
//...........................................................

// promise chaining

function promise3() {
  return new Promise((resolve, reject) => {
    resolve("cheete ki chaal...");
  });
}

promise3()
  .then((response) => {
    console.log(response);
    response = response + " baaz ki nazar.....";
    return response;
  })
  .then((response) => {
    // by using .then chaining we can update value of resolve response
    console.log(response);
    response =
      response +
      " aur bajirao ki talwar par sandeh nahi karte kabhi bhi maat de sakti hai";
    return response;
  })
  .then((response) => {
    console.log(response);
    response = response + "  this dialogue dedicated to lokesh";
    return response;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//...........................// ...........................// .....................


