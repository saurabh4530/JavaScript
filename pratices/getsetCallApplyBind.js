// @ts-nocheck
//!                                          get n  set   cll apply bind
let pdetail = {
    fname: "saurabh",
    lname: "kakade",
    get fullname() {
        return (`${this.fname} ${this.lname}`);
    },
    set fullname(name) {
        const separate = name.split(' ');
        this.fname = separate[0];
        this.lname = separate[1];
    }
}





// call / apply/ bind

let emp1={
    id:102,
    dept:"QA",
    empsalary:400000,
    empdetails:function(company, location){
           return (this.id+" "+ this.dept+" "+ company+" "+ location)
    }

    }

    let emp2={
        id:103,
        dept:"HR", empsalary:500000,
    }
    let emp3={
        id:104,
        dept:"testing", empsalary:500000,
    }

// call
    console.log(emp1.empdetails.call(emp2,"xyz","pune"));
    console.log(emp1.empdetails.call(emp3, "cipla", "goa"));


// apply
console.log(emp1.empdetails.apply(emp2,["tcs","mumbai"]));
console.log(emp1.empdetails.apply(emp3,["emphasis", "pune"]));

// bind -when we use bind to borroow method from object it creates its own bounded func or method 
// we invoke that func emplicitly using paranthesis i.e  "()"

console.log(emp1.empdetails.bind(emp2, "wipro","chennai")());
console.log(emp1.empdetails.bind(emp3,"google", "US")());





//  invoke only funnction  in the object using call

function child(arg1,arg2){
    console.log(this.msg+ "  " +arg1+"  "+arg2);
}
child("good", "morning");

 let parent1={
    msg:"this is your parent "
 }

 child.call(parent1,"wakeup and","go to college");


// apply 



let maxnum=Math.max(1,2,3,4,5,6,7,8,9,10)
console.log(
    maxnum
);


let maxnum1=Math.max.apply(null,[11,12,13,14,55,44,88,700]);
console.log(maxnum1);


// get set in objects

let emp={
    lang:"marathi",
    set lang(lang){
        this.language=lang;
     }
     ,
    get lang(){
        return this.language;
            }
        
   
}
emp.lang="hindi"
console.log(emp.lang);

/////////////////////////////////////////

let products={

    pname:"",
    pprice:null,

    set pname(pname){
        this.ppname=pname;
    }  ,
    get pname(){

        return this.ppname;

    },
    set pprice(pprice){
        this.ppprice=pprice;
    },
    get pprice(){
      return this.ppprice 
    }


}
products.pname="china mobile";
products.pprice=1500;
console.log(`product name is: ${products.pname} and price is ${products.pprice}`);


// set get in object which are  created using  constructor function

function BioData(name, salary,age) {
    this.name=name;
    this.salary=salary;
    let _age=age;

    this.getage=function(){
        return _age;
    };
    this.setage=function(value){
        if(value<0  || value>100){
            console.log("enter valid age  ");
            return
        }
        _age=value;
    }

    
}

var BioData1=new BioData("narendra",150000,25);
console.log(`hi my name is  ${BioData1.name} and my age is ${BioData1.getage()} and 
my package is ${BioData1.salary}`);
      BioData1.setage(75);// 
      console.log(`hi my name is  ${BioData1.name} and my age is ${BioData1.getage()} and 
      my package is ${BioData1.salary}`);

////////////////////////////////////////////////////

function Car(name, type, price){
    this.name=name;
    let _type=type;
    this.price=price;

    this.gettype=function(){
        return _type;
    };

  this.settype=function(value){
    _type=value
  }


}
var Car1=new Car("tata punch","EV",600000);
console.log(`car name: ${Car1.name} 
 car type: ${Car1.gettype()}     
 car price: ${Car1.price} `);    


////////////////////////////////////////////////


// Object.defineProperty method 

let student ={
    firstName:"devid",
    lastName:"warner"
};

Object.defineProperty(student,"fullname",{
    value:"ram"
    
    ,
    writable: true,       // Can be changed using assignment
    enumerable: true,     // Will show up in for...in loop
    configurable: true   //Can be modified or deleted
});

console.log(student.fullname);
student.fullname = 'LeBron James';
console.log(student.fullname);

///////////////////////////////////////////////////////////////////



//  get set used in Object.defineProperty method  



const teacher={
 fname:"ram",
 lname:"sane",

};
Object.defineProperty(teacher,"fullname",{
    get(){
        return `${this.fname }  ${this.lname}`
    },
    set(value){
        let separate=value.split(" ");
        this.fname=separate[0];
        this.lname=separate[1];
    }
});

console.log(teacher.fullname);
teacher.fullname='shubham sonar';
console.log(teacher.fullname);















