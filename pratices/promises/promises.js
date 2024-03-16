//!                                                            promises
/*
Promises are a feature in JavaScript that help you manage asynchronous operations. 
They provide a way to handle the result of an asynchronous operation once it completes,
 whether it's a success or a failure, and help avoid "callback hell" by chaining multiple asynchronous operations together in a more readable and manageable way*/
// @ts-ignore
let promise1 = new Promise((resolve, reject) => {
  resolve("tomarrow i will teach you promises");
});

promise1.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

//////////////////////////////////////////
// @ts-ignore
let promise2 = new Promise((resolve, reject) => {
  resolve("tomarrow i will learn promises");
});
promise2.then(
  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);

///////////////////////////////////////////////////////

// @ts-ignore
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tomarrow ,we will discuss about DOM manipulation");
  }, 3000);
});

promise3.then(
  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);
console.log(".......................");

////////////////////////////////////////////////
//calling multiple promises

// @ts-ignore
let promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("today ,we will discuss about DOM manipulation ");
  }, 5000);
});

// @ts-ignore
let promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tomarrow ,we will discuss about DOM manipulation");
  }, 10000);
});

// @ts-ignore
let promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("a day after tomarrow ,we will discuss about DOM manipulation");
  }, 15000);
});
// to execute all the promises at one time
Promise.all([promiseA, promiseB, promiseC]).then(
  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);

///////////////////////////////////////
//!   to know the which promise executed first

// @ts-ignore
let promisex = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("today ,we will discuss about DOM manipulation ");
  }, 10000);
});

// @ts-ignore
let promisey = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tomarrow ,we will discuss about DOM manipulation");
  }, 5000);
});

// @ts-ignore
let promisez = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("a day after tomarrow ,we will discuss about DOM manipulation");
  }, 15000);
});
//! to know the which promise executed first
Promise.race([promisex, promisey, promisez]).then(
  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);

//! to know the result of each  promise whether its resolved or rejected also one more basic concept is there twisted
// @ts-ignore
let promisen = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("mission completed successfully");
  }, 3000);
});
// @ts-ignore
let promisem = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("mission failed");
  }, 5000);
});
// @ts-ignore
let promisep = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("again mission successfully completed");
  }, 7000);
});

Promise.allSettled([promisen, promisem, promisep]).then(
  // to know the result of each  promise whether its reloved or rejected

  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);

console.log(
  "........................................................................."
);

// if any of the promise response is reject  from multiple promises and we executed them at one time using  Promise.all() it print reject result ie errmsg

Promise.all([promisen, promisem, promisep]).then(
  (posres) => {
    console.log(posres);
  },
  (errmsg) => {
    console.log(errmsg);
  }
);

//! //////////////////////////////////////////////////////////////////////////////////////////////////

//todo using await and async

// @ts-ignore
let promiseq = new Promise((resolve, reset) => {
  resolve("hi ....................");
});

async function f1() {
  let result = await promiseq;
  console.log(result);
}
f1();
////////////////////////////////////////////

// @ts-ignore
let add = (num) => {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    resolve(`addition of num: ${num + 5}`);
  });
};

let sub = (num) => {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    resolve(`substraction of : ${num - 1}`);
  });
};

let mul = (num) => {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    resolve(`multiplication of : ${num * 8}`);
  });
};

let div = (num) => {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    resolve(`division of : ${num / 2}`);
  });
};

async function cals() {
  let adres = await add(5);
  let subres = await sub(5);
  let mulres = await mul(5);
  let divres = await div(5);
  console.log(`
            ${adres}
            ${subres}
            ${mulres}
            ${divres}


`);
}
cals();

//! /////////////////////////////////////////////////////////////
//  using IIFE we can call promises

async () => {
  let adres = await add(5);
  let subres = await sub(5);
  let mulres = await mul(5);
  let divres = await div(5);
  console.log(`
    ${adres}
    ${subres}
    ${mulres}
    ${divres}


`);
};
