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
