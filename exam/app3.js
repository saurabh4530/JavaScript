{
  //?How to Get Character of Specific Position using JavaScript ?

  let str = "Welcome to GeeksforGeeks";

  let index = 11;

  let ctr = str.charAt(index);

  console.log("Character at " + index + "th position is: " + ctr);
}
//!                                OR
{
  let str = "Welcome to GeeksforGeeks";

  let index = 11;

  let ctr = str[index];

  console.log("Character at " + index + "th position is: " + ctr);
}
{
  //!                                OR
  let str = "Welcome to GeeksforGeeks";
  let index = 11;
  let character = str.slice(index, index + 1);

  console.log(character);
}

{
  //!	Write a function that returns the sum of all elements in an array.

  function sum(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
      summ = summ + arr[i];
    }
    return summ;
  }
  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}
{
  //!2.	Write a function that returns the average of all elements in an array
  function average(arr) {
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum / length;
  }
  console.log(average([4, 5, 6, 7, 8, 9, 10]));
  console.log(average([100, 100]));
}

{
  //?3.	Write a function that finds the maximum number in an array.
  //?4.	Write a function that finds the minimum number in an array.

  function maxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return { max, min };
  }
  let a = [63, 88, 56, 99, 35];
  console.log(maxMin(a).max);
  console.log(maxMin(a).min);
}

{
  //!5.	Write a function that returns a new array with all elements doubled.

  function doubledarr(arr) {
    let double = [];
    for (let i = 0; i < arr.length; i++) {
      double.push(arr[i] * 2);
    }
    return double;
  }
  console.log(doubledarr([2, 3, 4, 5, 6]));
  //! OR

  {
    function doubledarr(arr) {
      let double = arr.map((value) => value * 2);
      return double;
    }
    console.log(doubledarr([2, 3, 4, 5, 6]));
  }
}
{
  //!6.	Write a function that returns a new array with only even numbers from the original array.
  {
    function even(arr) {
      let evennum = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evennum.push(arr[i]);
        }
      }
      return evennum;
    }
    console.log(even([2, 4, 5, 6, 7, 8, 9, 88, 7]));
  }
  {
    function even(arr) {
      let evennum = arr.filter((value) => value % 2 === 0);

      return evennum;
    }
    console.log(even([2, 4, 5, 6, 7, 8, 9, 88, 7]));
  }
}
{
  //? 7.	Write a function that returns the first occurrence of a given element in an array.
  let arr = [99, 2, 3, 4, 5, 6, 7, 8, 2];
  console.log(arr.indexOf(2));

  //! oR
  function firstindex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
  }
  console.log(firstindex(arr, 2));
}

{
  //? 7.	Write a function that returns the last occurrence of a given element in an array.

  let arr = [99, 2, 3, 4, 5, 6, 7, 8, 2];
  console.log(arr.lastIndexOf(2));
  function lastIndex(arr, element) {
    for (let index = arr.length - 1; index >= 0; index--) {
      if (arr[index] === element) {
        return index;
      }
    }
  }
  console.log(lastIndex(arr, 2));
}
{
  //! 9.	Write a function that checks if all elements in an array are positive numbers.
  //!10.	Write a function that checks if any element in an array is negative.

  function posNeg(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        console.log(true);
      }
      if (arr[i] < 0) {
        console.log(false);
      }
    }
  }
  posNeg([1, 23, 45, -6, -67, -76, 4, 56, -987, -87, 564]);
}

{
  //? 11.	Write a function that checks if an array contains duplicate elements.

  function checkdummy(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return true; // duplicate nasel tr false
      }
      set.add(arr[i]);
    }
    return false; // duplicate asel tr false
  }
  console.log(checkdummy([1, 2, 3, 4, 5]));
  //!                     OR

  {
    function checkdummy(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            // duplicate nasel tr false
            return true;
          }
        }
      }
      return false; // duplicate asel tr false
    }
    console.log(checkdummy([1, 2, 3, 4, 2, 5]));
  }
}

{
  //? 12.	Write a function that returns the reverse of an array.

  function reversed(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(arr[i]);
    }
    return reverse;
  }
  console.log(reversed([1, 2, 3, 4, 5, 6, 11]));
}

{
  //? 13.	Write a function that sorts an array in ascending order.
  function ascending(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(ascending([5, 43, 2, 56, 8, 9]));
  //!      or

  {
    let arr = [5, 43, 2, 56, 8, 9];
    let sort = arr.sort((a, b) => a - b);
    console.log(sort);
  }
}
{
  //? 14.	Write a function that sorts an array in descending order.

  function descending(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(descending([12, 1, 2, 4, 56, 767, 54, 6]));
  //!  OR

  {
    let arr = [12, 1, 2, 4, 56, 767, 54, 6];
    let sort = arr.sort((a, b) => {
      return b - a;
    });
    console.log(sort);
  }
}
{
  //?18.	Write a function that returns the most frequently occurring element in an array.
  function frequent(arr) {
    let maxcount = 0;
    let count;
    let mostfrequent;
    for (let i = 0; i < arr.length; i++) {
      count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > maxcount) {
        maxcount = count;
        mostfrequent = arr[i];
      }
    }
    return ` the most frequent element:${mostfrequent} and count is: ${maxcount}`;
  }
  console.log(frequent([2, 3, 4, 3, 4, 5, 6, 4, 2, 2, 2, 2, 2, 2]));
}

{
  //?15.	Write a function that removes duplicates from an array
  function duplicate(arr) {
    let dummy = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j] && !dummy.includes(arr[i])) {
          dummy.push(arr[i]);
          break;
        }
      }
    }
    return dummy;
  }
  console.log(duplicate([1, 22, 22, 33, 444, 22, 555, 22, 33, 33]));

  //! OR
  {
    function duplicate(arr) {
      let set = new Set([...arr]);
      let array = Array.from(set);
      return array;
    }
    console.log(duplicate([1, 22, 22, 33, 444, 22, 555, 22, 33, 33]));
  }
}
{
  //? 16.	Write a function that returns the second largest number in an array.
  //?  17.	Write a function that returns the second smallest number in an array.

  function secLarge(arr) {
    let temp;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return `${arr[arr.length - 2]}, ${arr[1]} `;
  }
  console.log(secLarge([2, 3, 45, 6, 77, 67]));

  //! OR
  {
    let arr = [2, 3, 45, 6, 77, 67];
    let secLarge = arr.sort((a, b) => a - b);
    console.log(secLarge[secLarge.length - 2]);
    console.log(secLarge[1]); // for sec smallest
  }
}

{
  //? 21.	Write a function that returns the union of two arrays (all unique elements from both arrays).

  function union(arr1, arr2) {
    let set = new Set();
    for (let elm of arr1) {
      set.add(elm);
    }
    for (let elm of arr2) {
      set.add(elm);
    }

    return Array.from(set);
  }
  console.log(union([1, 2, 2, 3, 4, 55, 3], [3, 4, 5, 66, 7, 8, 9]));
}

{
  //? 22.	Write a function that returns the intersection of two arrays (common elements between both arrays).
  function intersection(arr1, arr2) {
    let arr = arr1.filter((elm) => arr2.includes(elm));
    return arr;
  }
  console.log(intersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));
}
{
  //? 24.	Write a function that returns the elements that are not present in second arrays.

  function commomelm(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let commonElement = [];

    set1.forEach((elm) => {
      if (!set2.has(elm)) {
        commonElement.push(elm);
      }
    });
    return commonElement;
  }
  console.log(commomelm([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8, 9]));
}
{
  //? 24.	Write a function that returns the elements that are present in both arrays.
  function commomelm(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let commonElement = [];

    set1.forEach((elm) => {
      if (set2.has(elm)) {
        commonElement.push(elm);
      }
    });
    return commonElement;
  }
  console.log(commomelm([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8, 9]));
}
{
    //? 25.	Write a function that returns the elements that are present in any of the arrays (union).

    function findUnion(arr1, arr2) {
        // Convert arrays to sets for unique elements and faster lookup
        let set1 = new Set(arr1);
        console.log(set1);
        let set2 = new Set(arr2);
    
        // Create a new set to store the union of elements
        let unionSet = new Set([...set1, ...set2]);
    
        // Convert the set back to an array and return
        return Array.from(unionSet);
    }
    
    // Example usage:
    let arr1 = [1, 2, 3,1];
    let arr2 = [3, 4, 5];
    let union = findUnion(arr1, arr2);
    console.log("Union:", union);
    
}

{

   //? 37.	Write a function that returns the index of the maximum number in an array.
   function indexmax(arr) {
    let maxindex=0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]>arr[maxindex]) {
        maxindex=i;
      }
        
    }
    return maxindex
   }
   console.log(indexmax([17,7,2,34,56,77,88,99]));
    
}
{
  //? 38.	Write a function that returns the index of the minimum number in an array.
  function indexmin(arr) {
    let minindex=0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]<arr[minindex]) {
        minindex=i;
      }
        
    }
    return minindex
   }
   console.log(indexmin([17,7,5,34,56,77,88,99]));
}

{
    //? 43.	Write a function that returns the product of all elements in an array.


    function product(arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            product = product * arr[i];
        }
        return product; // Don't forget to return the product
    }
    
    console.log(product([4, 5, 6, 7, 8])); // Output: 6720
    
}
{
    //? 48.	Write a function that returns the count of prime numbers in an array.
    function prime(num) {
        let count;
        for (let i = 2; i <=num; i++) {
             count=0;
             for (let j = 2; j <=i/2; j++) {
                if (i%j===0) {
                    count++;
                    break
                }
                
             }
             if (count==0) {
                console.log(i);
                
             }
            
        }
        
    }
    prime(20)




}

{
//? reversed the letters of word
let str = "My name is Yash";     // output :yM eman si hsaY 
  
let ar = str.split(" ")
console.log(ar); // [ 'My', 'name', 'is', 'Yash' ]

// console.log(ar[0])

let arrev = ""

for(let i = 0; i < ar.length; i++ ){{
  for(let j = ar[i].length - 1; j >= 0; j--){
    arrev = arrev + ar[i][j]
    
  } 
  arrev += " "
}

}
console.log(arrev);

}




let a = "Abhi";
let b = "dhone";
let c; 
c=a;
a=b;
b=c;
console.log(a,b);
{
   let obj={
    name:"abhi",
    address:{
      // city :"pune"
    },
    age:14
   }
   console.log(obj.address.city);

}{
 let  arr=[
    [12,3,4,5,6],
  [7,8,9,0,7],
  [11,23,4]
  ]
  console.log(arr[1][2]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      
      console.log(arr[i][j]);
    }
    
  }
}
{
  let str ="saurav"
  // let arr=str.split("").reverse().join("");
  // console.log(arr);
  let arr1=[]
  for(let i=0;i<str.length;i++){
    arr1.unshift(str.charAt(i))
    // console.log(arr1);
  }
  let str1=arr1.join("");
  console.log(str1);
}
{
  let arr=[21,12,23,45,66,23];
  let max=arr[0];
  for (let i = 0; i < arr.length; i++) {
   if(arr[i]>max){
    max=arr[i]}
  }
  console.log(max);
}
{
// wap to find the max diff betn any two  adjcent array element
function maxdiff(arr) {
  let result=0;
  for (let i = 0; i < arr.length; i++) {
    let diff=arr[i+1]-arr[i];
    if (result<diff) {
      result=diff
    }
    
  }
  return result
  
}
console.log( maxdiff([1,3,4,6,7,8,65]))
}