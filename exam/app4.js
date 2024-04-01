// @ts-nocheck
//!                          object

{
  //? JavaScript program to list the properties of a JavaScript object.
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  function access(obj) {
    for (let key in obj) {
      console.log(key, ":", obj[key]);
    }
  }
  access(student);
}
{
  //?Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  console.log(student);
  delete student.rollno;
  console.log(student);
}
{
  //?    Write a JavaScript program to get the length of a JavaScript object.

  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  function size(obj) {
    let count = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    console.log(count);
  }

  size(student);
}

{
  //? 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

  let library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

  function reading(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].readingStatus) {
        console.log(
          `book ${arr[i].title} is already read and author is ${arr[i].author}`
        );
      } else {
        console.log(
          `book ${arr[i].title} is not  read and author is ${arr[i].author}`
        );
      }
    }
  }
  reading(library);
}
{
  //?Write a JavaScript program to calculate circle area and perimeter.
  function Circle(radius) {
    this.radius = radius;

    this.area = function () {
      return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function () {
      return 2 * Math.PI * this.radius;
    };
  }
  let circle1 = new Circle(3);
  console.log(circle1.area().toFixed(2));
  console.log(circle1.perimeter().toFixed(2));
}
{
  function objectToList(obj) {
    return Object.entries(obj);
  }

  // Test with an object
  var obj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  console.log(objectToList(obj));
}



//               ! recurrsion

