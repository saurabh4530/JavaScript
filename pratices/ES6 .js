//!                         rest operator ie (...)
// ? interviewer = The rest operator is used to collect the remaining arguments in a single array parameter.

{
  function alpha(a, b, c, ...d) {
    // rest operator pack the value in array

    for (let i in d) {
      console.log(d[i]);
    }
  }

  alpha("p", "q", "r", "s", "z", "x", "y");
  console.log("..........................................");
  let arr = [1, 2.2, 3, 4, 5, 6, 8, 8, 9, 10, 11, 12, 13, 14];
  console.log(arr);
  alpha(...arr); // here we convert pack array into individual value using spread operator
  console.log(...arr);

  function cal(x, y, ...z) {
    console.log(x + y * z[1]);
  }
  cal(10, 20, 2, 3, 4);

  function show(arg1, ...arg2) {
    for (let i in arg2) {
      console.log(arg2[i]);
    }
    console.log(arg1);
  }
  show("ram", "sham", "saurabh");
}

//!                         spread operator ie (...)

{
  function cal(x, y, ...z) {
    console.log(x + y * z[1]);
  }
  cal(10, 20, 2, 3, 4);

  function show(arg1, ...arg2) {
    console.log(arg1);
    console.log(arg2);
  }
  show("ram", "sham", "saurabh");

  let arr1 = [10, 20, 30, 40, 50];
  let arr2 = [100, 200, 300, 400, 500];

  let combine = [...arr1, ...arr2];
  console.log(combine);

  let fruit1 = ["apple", ["mango", "strawbeery"], "shitafal", "ramfal"];
  let fruit2 = ["grapes", "orange", "chikku", "banana"];
  let mixjuice = [...fruit1, ...fruit2];
  console.log(mixjuice);
  mixjuice[1][0] = "peru";
  mixjuice[2] = "coconut";
  console.log(mixjuice);
  console.log(fruit1);

  // in array
  {
    let arr = [22, 33, 444, 55, 666, 777, 888];

    let arr3 = ["ram", "narendra", ...arr, "lokesh"];
    console.log(arr3);
  }

  // in array destructing
  let arr = [22, 33, 444, 55, 666, 777, 888];
  let [v1, v2, v3, ...values] = arr;

  console.log(v1);
  console.log(v2);
  console.log(values);

  //in object
  let user = {
    name: "ram",
    age: 25,
    location: "sri-lanka",
    state: "MH",
    pin: 412412,
  };

  let { name, age, ...address } = user;
  console.log(age);
  console.log(name);
  console.log(address);
}

//! destructure
//? it is technique through which we extract/sseparate the values from array, object and other iterable data structure into distinct values.

//*? Array
{
  let arr1 = [10, 20, 30, 40, 50];
  let [v1, v2, v3, v4, v5] = arr1;
  console.log(v1);
  console.log(v5);
}
//nested array destructure
{
  let arr = [10, 20, 30, [40, 50], 70];

  let [v1, v2, v3, [v4, v5], v6] = arr;
  console.log(v1);
  console.log(v2);
  console.log(v4);
  console.log(v5);
  console.log(v6);
}
{
  let [fname,lname]="saurabh kakade".split(" ");
  console.log(fname);
  console.log(lname);

}
// Unwanted elements of the array can also be thrown away via an extra comma: Here second element is not needed.
{
  let [fname,lname, ,age]=["saurah", "kakade", " is my name and age is",25 ];
  console.log(fname,lname,age);
  console.log();
}
{
  let [fname="guest",lname="none"]=["saurabh"]
console.log(fname);
console.log(lname);
}
{
  let user={};
  [user.name,user.lname]="saurabh kakade".split(" ");

  console.log(Object.entries(user));
  for(let [key ,value] of Object.entries(user)){
    console.log(`${key}: ${value}`);
  }

}
// maps
{
  let user1=new Map();
  user1.set("name","saurabh");
  user1.set("age","26");
  for(let [key ,Value] of user1){
    console.log(`${key} : ${Value}`);
  }
}
//!object

{
  let obj = {
    fname: "saurabh",
    age: 25,
    company: "abc",
  };

  let { fname, age, company } = obj;
  console.log(fname);
  console.log(age);
  console.log(company);
}
{
  let {height, width,area}={area:600,height:20,width:30}
  console.log(area);
  console.log(width);
  console.log(height);
}
//! or we can change the key name also

{
  let obj1 = {
    fname: "saurabh",
    age: 25,
    company: "abc",
  };
  let { fname: personlName, age, company: farm } = obj1;

  console.log(personlName);
  console.log(age);
  console.log(farm);
}

//nested object destructure

{
  const bioData = {
    name: "saurabh",
    details: {
      age: 25,
      address: {
        city: "pune",
        country: "india",
      },
    },
  };

  let {
    name,
    details: {
      age,
      address: { city, country },
    },
  state="maharashtra"

  } = bioData;

  console.log(name, age, city, country,state);
}
{
  let users = {
    email: {
        id: 'sonar.shubham',
        mail: '@gmail.com'
    },
    fullName: ['shubham', 'sonar'],
    regular: true,
    city: 'nashik',
};

// Destructuring the complex object.

let {
    email: { id, mail },
    fullName: [fname, sname],
    regular,
    city,
    state = "maharashtra"
} = users;

console.log(' \n This is an example of Nested Destructuring');
console.log(id, mail, fname, sname, regular, city, state);


}
// Function Parameter Destructuring:

{
  function details({name,age,address}){
console.log(` my name is ${name} , age is  ${age} and stay in  ${address}`);
  }
  details({name:"saurabh",age:25,address:"pune"})

}

// Returned Values Destructuring:
{
  function info(a,b,c,){
    return  {name:a, age:b, location:c}
  }

  let {name, age,location}=info("ram",25,"nashik");
  console.log(name, age,location);
}

// function destructure  all topic in single example
{
  let user={
    name:"narendra", age:45,
    email:{id:"1010narendra", mail:"@gmail.com"},
    fullName:["narendra", "pawar"],
    regularDrink:false,
    city:"pune"
  }
 

  // destructure user
  let {
    name ,age,
    email:{id,mail},
    fullName:[fname,lname],
    regularDrink,
    city,
    state="MH",// in destruturing we assign two new property to user object
    country="srilanka"
  }=user

console.log(name,age,id,mail,fname,lname,regularDrink,city,state,country);

// function destructure 


  function bioData({
  name,age,
  email:{id,mail},
  fullName:[fname,lname],
  regularDrink,
  city,
  state="MH",
  country="srilanka",contient="asia"
}={email:{},fullName:[]}){


  console.log(name,age,id,mail,fname,lname,regularDrink,city,state,country,contient);


}
 bioData(); 
 bioData(user);
bioData({name:"saurabh",age:25, email:{id:"xyz",mail:"gmail.com"},
fullName:["saurabh","kakade"],regularDrink:true,city:"pune"})


}

{
  // template literal
  let age=0;
  console.log(`${age>=18 ?'eligile for vote':'not eligible'}`);
}





