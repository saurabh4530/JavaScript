//!                         Unary operator

/*
? Use of unary operator.

* Syntax 1 =>    variable++   or    variable--
* Syntax 2 =>    ++variable   or    --variable

Please note that it will only work on the numeric datatypes, dont use it on strings or other datatypes.

*/

let a =1;
b=a;
b++
console.log(b);

//++a;
console.log(a++);

a--;
console.log(a);

--a;
console.log(a);

a=0

let b = a++;
// b = a;
// a = a +1;
console.log(b); // 1

let c = ++b;
// b = b + 1;
// c = b;
console.log(c); //2

c = c * 2;
console.log(c)
// Same as above.
c *= 2;