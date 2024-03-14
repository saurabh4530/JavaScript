// factorial 




let fact=1;
function factorial(num){
for(let i=5;i>=1;i--){
    fact=fact*i;
}
console.log("factorial of given number is= ",fact);
}



factorial(5);
console.log("...........................................................................");

// multiplication table

function table(num1) {
    console.log("multiplication of given number is:")
    for (let i = 1; i<=num1; i++) {
        console.log(num1,"x",i," =",num1*i);
        
    }
    
}
table(10);
console.log(".......................................................");


// odd even 

// 1 to nth number 

function oddeven(num2){
for(let i=1;i<=num2;i++){
   if(i%2===0){
    console.log(i," is even ");

   } else {
    console.log(i," is odd ");

   }
}
}
oddeven(10);

console.log(".......................................................");

// check specfic number is odd or even
function evenodd(num3){
    if(num3%2===0){
        console.log(num3," is even number");
    }
    else{
        console.log(num3," is odd number");

    }
}
evenodd(8);


console.log(".......................................................");

// pattern


// run on live server
// 0
// 1 2
// 3 4 5
// 6 7 8 9
// 10 11 12 13 14
// 15 16 17 18 19 20
// 21 22 23 24 25 26 27
// let n=6;
// let count=0;
// for(let i=0;i<=n;i++){
//   for (let j =0; j<=i; j++){                            


//       document.write(" "+count);
//       count++;
      
//   }
//   document.write("<br>");

// }

console.log("..............................................................................");


//prime number
let count1=0;
function prime(num4){

for(let i=2;i<=num4/2;i++){

  if(num4%i===0){
    count1++;
    break;
  }
  

  }
  if(count1==1){
    console.log(num4," is not prime")
  }else{
    console.log(num4,"is prime");
  }
}

prime(7);


console.log(".......................................................................");



//fibonacci series
// 0,1,1,2,3,5..........next num is addn of previous two digit
let n1=0,n2=1;
  let n3;
function fibo(num5){
  
  console.log(n1);
  console.log(n2);
  
  for(let i=1;i<=num5;i++){
     console.log(n3=n1+n2);
    n1=n2;
    n2=n3;
  }
}
fibo(8);
console.log("................................................................................");





// 

let arr=[1,2,"one", "two", 4,5,[5,6,7],{
  name:"abc", age:6
}]
console.log(arr);
console.log(arr.indexOf("two"));







// call variable using for...in loop

var xyz={
  name:"abc", 
  id:1250,
  age:25,
  company:"mnb"

}
for(let i in xyz)
{
  console.log("key=", i, " and value=", xyz[i]);
}



console.log("...........................................................................................");





