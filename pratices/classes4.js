//!                               inheritance
//*sub class access properties ,method  of super class 

class Graduation{
    constructor(stream,duration){
        this.stream=stream;
        this.duration=duration;
       
    }
    degree(){
        return `${this.stream} is course of ${this.duration} yrs`;
    }
}
class Engineering extends Graduation{
    constructor(stream,duration,name,passout){
        super(stream,duration);
        this.name=name;
        this.passout=passout;
    }
    enggDetails(){
        return(`i did ${this.stream} which is ${this.duration} yrs course, ${this.name} is my engg stream and passout in ${this.passout} year.....
        ${super.degree()} `);
    }
}

let engg=new Engineering(" engineering",4 ,"chemical engg",2020);
console.log(engg.enggDetails());

console.log(".........................................................");

//................///...................///.............

//!                    polymorphism
//* same method name but different functionality; method overriding possible only
{
class Bank{
    constructor(bname,roi){
        this.bname=bname;
        this.roi=roi
    }
    rateOfInterest(){
        return `the Global rate of interest for  banks is ${this.roi} `;
    }
}
class SBI extends Bank {
constructor(bname,roi, location ){
    super(bname, roi);
    this.location=location;
}
rateOfInterest(){
    return `the  rate of interest for ${this.bname} bank which is located at ${this.location} is ${this.roi} `;

}
}
//  let bank1=new Bank("YES bank",8.8);
// console.log( bank1.rateOfInterest());


let sbi=new SBI("SBII",6.6,"narayangaon");
console.log( sbi.rateOfInterest());

}
console.log(".................................................................");

//!                     encapsulation

{
 class Car{
    constructor(company,name, price,){
        this._company=company;
        this._name=name;
        this._price=price
    }
    get company(){
        return this._company
    }
    get name(){
        return this._name
    }
    get price(){
        return this._price
    }
    set company(cname){
        this._company=cname;
    }
    set name(value){
        this._name=value
    }
    set price(cprice){
        this._price=cprice
    }

    carDetails(){
return`${this._company} , ${this._name},${this._price}`
    }
 }

 let car1=new Car("tata","Alto 800",600000);
console.log(car1.carDetails());

}


//!             abstraction

// hide implementation and showing functionality

{//implementation
class Shape{
    constructor(type){
        this.type=type
    }
getType(){
    return `shape is: ${this.type}`;
}

}
class Circle extends Shape{
    constructor(radius){
        super("circle");
        this.radius=radius
    }
    area(){
        return `area of circle : ${Math.PI*this.radius**2}`;
    }
}
let shape1=new Circle(3.5);
console.log(shape1.getType());
console.log(shape1.area());

}
console.log("................................................");


//       !          static properties n method 

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
             here we calling static property and method in nonstatic method , an dont forget my name is ${Person.fname}`
        }
    }

    let person1=new Person();
  
    console.log(person1.fullDetails());

    // calling static method , possible only by using class name .....using obj name its impossible bcoz static are belong to class only  
    console.log(Person.info());
    console.log(Person.details());
    console.log(Person.fname);
    
    
}

//! Note- instanceof is operator that check anyone belong to or related to someone
//* eg : The instanceof operator allows to check whether an object belongs to a certain class






