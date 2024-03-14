// @ts-nocheck
//!                                             classes

// inheritance 
class Animal{// super class
    constructor(name ,age ,type){
        this.name=name;
        this.age=age;
        this.type=type;

    };

    eat(){
        return  `${this.name} is eating meat and age is ${this.age} `
    };
    
    gettype(){
        return `type of dog is ${this.type}`;
    }
    iscute(){
        return true ;
    }


}
 var Animal1=new Animal("moti",3,"german-shephard");
 console.log(Animal1.eat());
console.log(Animal1.iscute());
 console.log(Animal1.gettype());
 console.log("............................");

 console.log(           `dog name is ${Animal1.name}
                dog age is ${Animal1.age}
                dog type is ${Animal1.type}`);
                console.log("....................");

                console.log(Animal1);

console.log("...........................................................................");
///////////////////////////////////////////////////

class Dog extends Animal{   // sub class                    // inherits properties from animal class

constructor(name,age,type,speed){
    super(name,age, type);
    this.speed=speed;
}
run(){
    return `${this.name} is running at speed of ${this.speed} kmph `
};
eat(){
    return  `${this.name} is eating something else  and age is ${this.age} `
 
}
};

var dog1=new Dog("golu",2,"hasky",88);
console.log("dog name is",dog1.name);
console.log(dog1.eat());
console.log("dog is cute: ",dog1.iscute());
console.log(dog1.gettype());
console.log(dog1.run());

console.log("....................................................................................................");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//! set get in claasss



class Even {
    constructor(variable) {
        this.variable = variable;
    }

    get even() {
        return this.variable;
    }

    set even(value) {
        const evennum = value.filter(num => num % 2 === 0); 
        if (evennum.length > 0) {
            this.variable = evennum;
        }
    }
}

let even1 = new Even([1, 2, 3, 4, 5, 6]);
console.log(even1.even); 

even1.even = [1,2,3,4,5,6,7,8,9,10];
console.log(even1.even); 