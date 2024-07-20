//@ts-nocheck
{
  //     function test() {
  //     var a=7
  //     let b=8
  //     if (true) {
  //         let a=5;
  //     var b=6;
  //     console.log(a,b);
  //     }
  // }test()
}

{
  function test() {
    console.log(a, b, c);

    var a = 25;
    let b = 26;
    const c = 27;
  }
  test();
}

{
  let arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);
  console.log(sum);
}
{
  const array = [1, 2, 3, 4];

  array.forEach((element, i) => {
    array[i] = element * 2;
  });
  console.log(array);
}
{
  const array = [1, 2, 3, 4];
  const evenNumbers = [];

  array.forEach((element) => {
    if (element % 2 === 0) {
      evenNumbers.push(element);
    }
  });

  console.log(evenNumbers); // Output: [2, 4]
  console.log(array);
}
{
  let students = [
    { name: "Suarbh", rollNumber: 31, marks: 80 },

    { name: "Rohit", rollNumber: 33, marks: 70 },

    { name: "Raju", rollNumber: 57, marks: 35 },

    { name: "Suarbh", rollNumber: 75, marks: 59 },
  ];

  let names = students.map((stu) => stu.name.toUpperCase());
  console.log(names);
  let namex = [];
  for (let i = 0; i < students.length; i++) {
    namex.push(students[i].name.toUpperCase());
  }
  console.log(namex);
}
{

    let students = [
        { name: "Suarbh", rollNumber: 31, marks: 80 },
    
        { name: "Rohit", rollNumber: 33, marks: 70 },
    
        { name: "Raju", rollNumber: 57, marks: 35 },
    
        { name: "Suarbh", rollNumber: 75, marks: 59 },
      ];
let total=students.map((stu)=>{
    if (stu.marks<60) {
        stu.marks= stu.marks+20;
        
    }
    return stu
}).filter((stu)=>{
    return stu.marks>60
}).reduce((acc,curr)=>{
    return acc+curr.marks
},0)
console.log(total)
}
{

 function abc(name){
 return ("hi " + name);
 }



 function main(params ) {
  return params("saurabh")
  
 }
console.log(main(abc));


}

{
  let abc=(a,b)=>{
    console.log( a+b)
  }
(abc(5,4))

}


{
  function abc() {
    function display(){
      console.log("hi")
    }
    return display
    
  }
abc()()
}











