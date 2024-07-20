{
  //!1
  let str1 = "java javscript java is awosome";
  let str2 = "Ecmascript known as javascript";
  function check(str) {
    let str3 = str.split(" ");

    for (let i = 0; i < str3.length; i++) {
      if (str3[0] === "java") {
        return true;
      } else {
        return false;
      }
    }
  }

  console.log(check(str1));
  console.log(check(str2));
}
{
  //!2
  function grade(marks) {
    if (marks >= 89 && marks <= 100) {
      console.log("A+ grade");
    } else if (marks >= 75 && marks <= 88) {
      console.log("A grade");
    } else if (marks >= 60 && marks <= 75) {
      console.log("B grade");
    } else if (marks >= 40 && marks <= 60) {
      console.log("C grade");
    }
  }
  grade(85);
}
{
  //!3
  let str = "life is ok but we need to make it awesome";
  function vowels(str) {
    let str1 = str.split("");
    let acount = 0;
    let ucount = 0;
    let icount = 0;
    let ocount = 0;
    let ecount = 0;
    for (let i = 0; i < str1.length - 1; i++) {
      if (str1[i] == "A" || str1[i] == "a") {
        acount++;
      }
      if (str1[i] == "u" || str1[i] == "U") {
        ucount++;
      }
      if (str1[i] == "i" || str1[i] == "I") {
        icount++;
      }
      if (str1[i] == "o" || str1[i] == "O") {
        ocount++;
      }
      if (str1[i] == "E" || str1[i] == "e") {
        ecount++;
      }
    }
    let total = acount + icount + ucount + ocount + ecount;
    console.log(total);
  }
  vowels(str);
}
{
  //!13
  function factorial(n) {
    if (n <= 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(5));
}
{
  //! 14
  let arr = [1, 2, 3, 4, 5, 6, 9, 11, 15, 16, 4, 3, 5, 2, 1];

  function diff(arr) {
    let arrsort = arr.sort((a, b) => a - b);

    let maxDiff = arrsort[arrsort.length - 1] - arrsort[0];
    return maxDiff;
  }
  console.log(diff(arr));
}
{
  //! 6

  let str1 = "radar";
  function palindrome(str1) {
    let str2 = str1.split("");

    let str3 = "";
    for (let i = str2.length - 1; i >= 0; i--) {
      str3 = str3 + str2[i];
    }
    console.log(str3.join(""));
    //console.log(str3===str1);
  }
  palindrome(str1);
}
{
  //?15
  let ar = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 3];
  function duplicates(arr) {
    let dummy = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          dummy.push(arr[i]);
        }
      }
    }
    return dummy;
  }
  console.log(duplicates(ar));
}
{
  //!10
  let arr = [4, 3, 4, 2, 4, 4, 2, 3, 4];
  function countMax(arr) {
    let count;
    let maxcount = 0;
    for (let i = 0; i < arr.length; i++) {
      count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > maxcount) {
        maxcount = count;
        console.log(arr[i], "=", maxcount);
      }
    }
  }
  countMax(arr);
}

{
  //!8
  let str = "banana";
  let obj = {};
  let str1 = str.split("");
  for (const i of str1) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  console.log(obj);
}

{
}

{
}
