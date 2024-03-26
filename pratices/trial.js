// @ts-nocheck
{
  function trial() {
    setTimeout(() => {
      console.log("hello.................");
    }, 2000);
  }
  trial();
}

{
  function trial() {
    console.log("hello good morning.................");
  }
  trial();
  let x = setInterval(trial, 2000);

  setTimeout(() => {
    clearInterval(x);
  }, 10000);
}
{
  // map
  let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let ax = arr.map((cv, index, array) => {
    return cv * 4; // Returning the transformed value
  });

  console.log(ax); // Output the transformed array
  console.log(arr); // Original array remains unchanged

  //filter
  let ay = arr.filter((cv) => {
    if (cv % 2 === 0) {
      return cv;
    }
  });
  console.log(ay);
  // reduce
  let az = arr.reduce((total, cv, ci, array) => {
    let sum = total + cv;
    return sum;
  });
  console.log(az);
}
{
  let arr = [2, 4, 6, 8, 10, 3, 4, 8];
  let az = arr.every((cv, index, array) => {
    console.log(cv % 2 == 0);
    if (cv % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(az);
}
{
  let arr = [2, 4, 6, 8, 10, 3, 4, 8];
  let az = arr.some((cv, index, array) => {
    console.log(cv % 2 !== 0);
    if (cv % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(az);
}
{
  let arr = ["ram", "sham", "geeta", "saurabh"];
  let az = arr.find((cv) => {
    return cv.length > 6;
  });

  console.log(az);
}
{
  // constructor function
  //basic
  function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.details = function () {
      return `${this.name} ${this.age} ${this.address}`;
    };
  }
  // used prototype
  Person.prototype.pet = "dog";

  Person.prototype.show = function () {
    return this.pet;
  };

  let person1 = new Person("ram", 25, "delhi");
  console.log(person1.details());
  console.log(person1.pet);

  console.log(person1.show());
}

{
  //setter gettter
  //obj
  let obj = {
    fname: "sasta",
    lname: "tushar",

    get fullName() {
      return `${this.fname} wala ${this.lname}`;
    },
    set fullName(name) {
      var divide = name.split(" ");
      this.fname = divide[0];
      this.lname = divide[1];
    },
  };

  console.log(obj.fullName);
  obj.fullName = "sasta narendra";
  console.log(obj.fullName);
}
{
  function User(name, age) {
    this.name = name;
    let _age = age;
    this.getage = function () {
      return _age;
    };
    this.setage = function (age) {
      if (age < 18) {
       console.log( `enter valid age`);
      } 
      _age=age

    };
  }
  let user=new User("sam",5);
  console.log(user.getage());
  user.setage(3)
  console.log(user.getage());

}{
    let arr=[1,2,3,4,5,6,7];
    console.log(Math.max(...arr));
}
{
  // sort ascending /descending
  let arr=[25,41,52,63,12,100,200,300,36,88,8000,95,21];
  let arrsort=arr.sort()
  console.log(arrsort);// not giving proper order;

  let arraysort=arr.sort((a,b)=>{// ascending
    return a-b;
  })
  console.log(arraysort);

// descending
let arraysortd=arr.sort((a,b)=>{
  return b-a
})

console.log(arraysortd);
}
{
  let users = [
    {
      empId: 123,
      name: "Charlie",
      location: "NYC",
    },
    {
      empId: 234,
      name: "Bob",
      location: "WDC",
    },
    {
      empId: 432,
      name: "Alice",
      location: "Wonderland",
    },
  ];
  let sort=users.sort((a,b)=>{
    return (a.name.localeCompare(b.name))
  })
  console.log(sort);
}
{
  setTimeout(data,2000,"saurabh",25);
  function data(namd, age) {
    console.log(namd, age);
  }
  setTimeout((gender, address) => {
    console.log(gender,address);
  }, 2000,"m","mh");
}

{
 let x= setInterval((name,age)=>{
  console.log(name,age);
 },2000,"ram", 25);

setTimeout(()=>{
  clearInterval(x)
},10000);
}
{
  let array124 = new Array(1,2,3,4,5,6);
console.log(array124.at(4));
console.log(array124.at(-1));
}
{
let a1=[["a"],"b","c","d"];
let a2=["e","f","g","h"]
let arr3=a1.concat(a2);
console.log(arr3);
arr3[1]="25";
console.log(arr3);
console.log(a1);
arr3[0][1]="63"
console.log(arr3);
console.log(a1);

}
{
  let a2=["e","f",[25,30,25],"g","h"]
for(let [k, v] of a2.entries())
console.log(`${k} ${v}`);
console.log(a2.flat());


}
{
  (function z(ame) {
    console.log("hi.........................."+ame);
    
  })("saurabh");
}


{
  function name1(name) {
    return {
      name
    }
  } 
  console.log(name1("saurabh"));


  function name2(name) {
    return 
           {name}
  } 
  console.log(name2("saurabh"));

}
{
  // call apply bind
let obj1={
  fname:"sam",lname:"kakade",
  fullName:function(city, pin){
    return `${this.fname} and ${this.lname} and ${city} ${pin}`
  }

}
let obj2={
  fname:"santosh",lname:"jain",
  

}

console.log(obj1.fullName("pune",412240));

console.log(obj1.fullName.call(obj2,"chennai",42412));
console.log(obj1.fullName.apply(obj2,["pune",412632]));
console.log(obj1.fullName.bind(obj2,"bidar",456123)());
  
}
{
  let x=10
  let y=15
  let z=20
  x=y//15
console.log(  x=y=z);
}
{
  let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    }
}
let person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
}
console.log(person1=person2);
console.log(NaN=="NaN");
}

{
  var a={
    x:function () {
      console.log("x");
      return this;
    },
     y:function () {
      console.log("y");
      return this;

    },
    z:function () {
      console.log("z");
      return this;

    }
  }
  a.x().y().z();  
  /*x
    y
    z

   */
}{
  function func1(){
    setTimeout(()=>{
    console.log(x);
    console.log(y);
    },1000);
    var x = 2;
    let y = 12;
    }
}