// @ts-nocheck
//!                         Abstraction
/**
abstraction is a way of hiding the implementation details and showing only the functionality to the users. 
In other words, it ignores the irrelevant details and shows only the required one. 
We cannot create an instance of Abstract Class.
It reduces the duplication of code.

 */

function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
//var vehicle=new Vehicle(); // We cannot create an instance of Abstract Class.

function Bike(vehicleName){
this.vehicleName=vehicleName;
}
Bike.prototype=Object.create(Vehicle.prototype);

let bike=new Bike("splendor");
console.log(bike.display());

console.log("..........................................");



//!                          abstraction
//implimentation
class Shape
{
    constructor(type){
        this.type=type;
    }
    getType(){
        return this.type;
    }
    ;
}
class Reactangle extends Shape{
    constructor(width,height){
        super("rectangle")
        this.width=width;
        this.height=height;

    }
    area(){
        return(this.width*this.height);
    }
}


//functionality===>
let rect=new Reactangle(5,6);
console.log(rect.area());
console.log(rect.getType());


