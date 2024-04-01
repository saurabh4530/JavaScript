{
  //? find prime upto 20
  function prime(num) {
    let count;
    for (let i = 1; i <= num; i++) {
      count = 0;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
          count++;
          break;
        }
      }
      if (count == 0) {
        console.log(i);
      }
    }
  }
  prime(20);
}

{
  //? calculate age from obj array
  {
    let input = [
      { id: "1", name: "kishan", age: 23 },
      { id: "2", name: "sam", age: 24 },
      { id: "3", name: "raj", age: 25 },
    ];
    function calculateAge(input) {
      let totalAge = input.reduce((sum, cv) => {
        sum = sum + cv.age;
        return sum;
      }, 0);
      return totalAge;
    }

    console.log(calculateAge(input));
  }
  //!                OR
  {
    let input = [
      { id: "1", name: "kishan", age: 23 },
      { id: "2", name: "sam", age: 24 },
      { id: "3", name: "raj", age: 25 },
    ];
    function ageCalculate(array) {
      let ageSum = 0;
      for (let i = 0; i < array.length; i++) {
        ageSum = ageSum + input[i].age;
      }
      return ageSum;
    }

    console.log(ageCalculate(input));
  }
}

{
  //? find longest word from string
  function longWord(string) {
    let str = string.split(" ");
    let lword = "";
    for (let i = 0; i < str.length; i++) {
      if (lword.length < str[i].length) {
        lword = str[i];
      }
    }
    return lword;
  }
  console.log(longWord("hello world it is beautiful day"));
}

{
  //? find vowels
  function vowels(string) {
    let str = string.split("");
    let vowel = [];
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === "a" || str[i] === "i" || str[i] === "e") {
        vowel.push(str[i]);
      }
    }
    return vowel;
  }
  console.log(vowels("jairadhekrishna"));
}

{
  //? second largest number from array
  function secLargest(array) {
    array.sort((a, b) => {
      return b - a;
    });

    return array[1];
  }
  console.log(secLargest([3, 4, 6, 2, 4, 9]));
}
{
  // sort array without build in

  function sortArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }
  console.log(sortArray(["b", "c", "a", "d"]));
}
{
  //? index of negative number

  function negNumIndex(arr) {
    let negnum = [];
    arr.filter((cv, index) => {
      if (cv < 0) {
        negnum.push(index);
      }
    });
    return negnum;
  }
  let array = [5, 7, -6, -8, 1, 5, 4, -7, -9];
  console.log(negNumIndex(array));
}
{
  //? odd number
  function oddNum(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }

  console.log(oddNum([1, 2, 3, 4, 5]));
}

{
  //? print *** at end of string
  function string(str) {
    return str + "***";
  }
  console.log(string("abc"));
}
{
  //? reverse Good Morning  to Output: dooG gninroM
  function reverse(string) {
    let str = string.split(" ");
    let reverseword = str.map((word) => {
      return word.split("").reverse().join("");
    });
    let reversestr = reverseword.join(" ");
    return reversestr;
  }
  console.log(reverse("Good Morning"));
}

{
  //? change the occarance banana by kiwi
  let arr = ["apple", "banana", "orange", "banana"];
  function replace(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "banana") {
        arr[i] = "kiwi";
      }
    }
    return arr;
  }
  console.log(replace(arr));
}
{
  let arr = ["jane1:1", "doe:2"];
}

{
  //? concate the nested array

  function concatenateNestedArray(arr) {
    let result = [];

    function flattenArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattenArray(arr[i]); // Recursively flatten nested arrays
        } else {
          result.push(arr[i]); // Add non-array elements to the result array
        }
      }
    }

    flattenArray(arr); // Start the recursive flattening process
    return result;
  }

  let arr = [1, 2, [3, 4, [5, 6], 8], 9];
  console.log(concatenateNestedArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 8, 9]
}
{
  //Group of people object according to age
  ////ans:
  const people = [
    { name: "john", age: 21 },
    { name: "Max", age: 20 },
    { name: "Alex", age: 20 },
  ];
  const Output = {
    20: [],
    21: [],
  };

  for (const person of people) {
    if (person.age == 20) Output[20].push(person);
    else Output[21].push(person);
  }
  console.log(Output);
}
{
  const people = [
    { name: "john", age: 21 },
    { name: "Max", age: 20 },
    { name: "Alex", age: 20 },
    { name: "john", age: 25 },
    { name: "john", age: 23 },
  ];

  const Output = {};

  for (const person of people) {
    if (!Output[person.age]) {
      Output[person.age] = [];
    }
    Output[person.age].push({ name: person.name, age: person.age });
  }

  console.log(Output);
}
{
 

  
}
