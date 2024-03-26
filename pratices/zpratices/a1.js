// @ts-nocheck
/**
 * Create a JavaScript function that calculates the tip for a given bill amount and tip percentage.
 *  Bill amount and tip percentage will be input parameters while output will be calculated tip value.
 *
 */
{
  function tip(bill, tipper) {
    let tipvalue;
    if (bill <= 0 || tipper >= 100) {
      return "enter valid data";
    } else {
      tipvalue = bill * (tipper / 100);
      return tipvalue;
    }
  }
  console.log(tip(5000, 5));
}

// fibo series
{
  function fibo(a) {
    let n1 = 0;
    let n2 = 1;
    let n3 = n1 + n2;
    console.log(n1, n2);
    for (let i = 0; i <= a; i++) {
      n3 = n1 + n2;
      console.log(n3);
      n1 = n2;
      n2 = n3;
      n3 = a[i];
    }
  }
  fibo(3);
}

//How to find the sum of even digits of a number in JavaScript

{
  function evenSum(n) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      if (rem % 2 == 0) {
        sum = sum + rem;
      }
     n = Math.floor(n / 10);
      //n= parseInt(n/10)
    }
    return sum;
  }
  console.log(evenSum(24568));
}

//How to find the sum of digits of a number in JavaScript
{
  function sum(num) {
    let sum = 0;
    while (num > 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
           

    }
    return sum;
  }
  console.log(sum(123456));
}
//JavaScript Program to print first n odd numbers in descending order
{
  function odd(n) {
    
    for (let i = n; i >= 1; i--) {
      if (i % 2 != 0) {
        console.log(i, "is odd");
      }
    }
  }
  odd(10);
}
// swap two digit without 3rd variable
{
  function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return `${a} ${b}`;
  }
  console.log(swap(10, 20));
}
{
  function swap(a, b) {
    a = a * b;
    b = a / b;
    a = a / b;
    return `${a} ${b}`;
  }
  console.log(swap(10, 20));
}

//armstrong number
{
  function armstrong(num) {
    let rev = 0;
    let rem;
    let original = num;

    while (num > 0) {
      rem = num % 10;
      rev = rev + rem * rem * rem;
      num = Math.floor(num / 10);
    }

    if (rev === original) {
      return `${original} is armstrong number`;
    } else {
      return `${original} is NOT armstrong number`;
    }
  }
  console.log(armstrong(153));
}

// reverse the number and check it is palindrome number
{
  function palindrome(num) {
    let rev = 0;
    let rem;
    let original = num;
    while (num > 0) {
      rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }
    console.log(rev); // upto this line it is reverse num code

    if (rev === original) {
      return `${original} is palindrome `;
    } else {
      return `${original} is not palindrome `;
    }
  }
  console.log(palindrome(123456));
}
// strong number =>digit factorial sum=number ;
{
  function strong(num) {
    let rem;
    let rev = 0;
    let original = num;

    while (num > 0) {
      let fact = 1;
      rem = num % 10;
      for (let i = 1; i <= rem; i++) {
        fact = fact * i;
      }

      rev = rev + fact;
      num = Math.floor(num / 10);
    }

    if (rev == original) {
      return `${original} is strong number`;
    } else {
      return `${original} is NOT strong number`;
    }
  }
  console.log(strong(145));
}
// perfect number ie sum of divisior  is that num
{
  function perfect(num) {
    let sum = 0;
    let original = num;
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        sum = sum + i;
      }
    }
    if (sum === num) {
      return `${num} is perfect number`;
    } else {
      return `${num} is NOT perfect number`;
    }
  }

  console.log(perfect(25));
}

//JavaScript Program to find remainder without using the modulus operator also find quotient without division operator
{
  function remainder(dividend, divisior){
    let quotient=0;
while (dividend>=divisior) {
  dividend=dividend-divisior
  quotient++;
}
return `reminder is ${dividend} and quotient:${quotient} `
  }

  console.log(remainder(17,5));
}

//print a table of any number in JavaScript
{
function table(num){
for(let i=0;i<=10;i++){
 console.log(num*i); 
}
}
table(5);
}

      //largest num from three num
{
  function largest(num1,num2,num3){
if (num1>=num2 && num1>=num3) {
  return "num1 is largest number"
} else if(num2>=num1 && num2>=num3){
  return "num2 is largest number"

}else  {
  return "num3 is largest number"

} 
  }
  console.log(largest(10,40,30));
}
//
{
  hositv=3;
  console.log(hositv);
  var hositv;
}
//
{
  function did(){
    hositv=33;
    console.log(hositv);
    var hositv;
  }
  did()
}
//

  {
    function reverseNumber(number) {
      // Convert number to a string
    
      let numString = number.toString();

      // Reverse the characters of the string
      let reversedString = numString.split('').reverse().join('');
  
      // Convert the reversed string back to a number
      let reversedNumber = parseInt(reversedString);
  
      return reversedNumber;
  }
  
  // Example usage
  const originalNumber = 12345;
  const reversedNumber = reverseNumber(originalNumber);
  console.log(`Original Number: ${originalNumber}`);
  console.log(`Reversed Number: ${reversedNumber}`);
  
  }
  {

(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();//o/p=1432;
  }
