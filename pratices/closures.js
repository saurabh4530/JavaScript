// @ts-nocheck
//!                                        closures
/*
Definition = Closures are a programming pattern in JavaScript that allows variables from an outer lexical scope to be used inside of a nested block of code.

? Simply - The inner function has the access to the scope of the outer function. That means all the functions in the JS are the closure functions.
 
---- JavaScript supports closures transparently, and they are often used without knowing what they are.

Simple steps:-
---- A closure is a function that remembers its outer variables and can access them.
---- That is: they automatically remember where they were created using a hidden property called [[Environment]], and then their code can access outer variables.
---- In JavaScript, all functions are naturally closures (there is only one exception, to be covered in The "new Function" syntax).

*/



function outer(out) {
  return function inner(inn) {
    console.log("outer variable is:", out);
    console.log("inner variable is:", inn);
  };
}
let newFunction = outer("outer variable");
newFunction("inner function");
newFunction("another new variable");

// ....................///.....................///...............//

//data encapsulation

function createCounter(params) {
  let count = 0;
  return {
    incre: function () {
      count++;
      console.log(count);
    },
    decre: function () {
      count--;
      console.log(count);
    },
  };
}

let counter=createCounter();
counter.incre();
counter.incre();
counter.incre();
counter.incre();

counter.decre();
counter.decre();
counter.decre();
createCounter();// here we call same counter again
// so it remember outer lexical value
counter.incre();//2
counter.incre();//2
counter= createCounter();// here we create new counter so count stat from  0
counter.incre();//1
counter.incre();//2






