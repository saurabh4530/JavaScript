   //!                       static method and properties
// static methods that belong to the class instead of an instance of that class i.e object. So, an instance is not required to call the static method.
// These methods are called directly on the class itself.
// The static keyword is used to declare a static method.
// The static method can be of any name.
// A class can contain more than one static method.
// If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
// The static method can be used to create utility functions.
// We can use this keyword to call a static method within another static method.
// We cannot use this keyword directly to call a static method within the non-static method.
// In such case, we can call the static method either using the class name or as the property of the constructor.


class Testcase{
    static display(name){
 
        return `static method is invoked :   ${name} `;
    }
}
console.log(Testcase.display("static"));

//! /////////////////////////////////////////////////////////////

class Test{
    static display1(name){
 
        return `static method is invoked :   ${name} `;
    }
    static display2(name){
 
        return `static method is invoked again :   ${name} `;
    }

}

console.log(Test.display1("first static method callled"));
console.log(Test.display2("second static method callled"));
//! /////////////////////////////////////////////////////////////

class Test1{
    static show(name){
        return `static method is invoked :   ${name} `;
    };
    static show(name){
        return `static method is invoked again :   ${name} `; // last one is callled
    }
}
console.log(Test1.show("static method"));

//! /////////////////////////////////////////////////////////////

// calling static method into non static method
class ImpTestcase{
    static display(){
        return `static method is invoked  `;

    }
    show(){
        console.log(ImpTestcase.display());

    }
}

let case1=new ImpTestcase();

case1.show();
console.log("..........................................................................");


{
 class Person{
     
        static fname="saurabh";
        
        static info(){
            return `i am unknown person`;
        }

        static info(){
            return `my name is ${this.fname}`;
        }

        static details(){
            return`${this.info()} and we learning static concept`
        }
    
        fullDetails(){
            return `${Person.info()} & ${Person.details()} &&
             here we calling static property and method in nonstatic method , and don't forget my name is ${Person.fname}`
        }
    }

    let person1=new Person();
  
    console.log(person1.fullDetails());

    // calling static method , possible only by using class name .....using obj name its impossible bcoz static are belong to class only  
    console.log(Person.info());
    console.log(Person.details());
    console.log(Person.fname);
    
}
