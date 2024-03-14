
var globalVar="this is global variable";// we can acceess it  anywhere in js document


// normal function 

function print(){
    console.log("welcome to javascript");
}
print();

console.log("............................................................................................................................");

function add(){
    let a=5, b=8;
    let result=a+b;
    console.log("addition="+result);

}
add();

console.log("............................................................................................................................");

// parameterised function

function math(x,y,z,){
    console.log("add=",x+y+z);
    console.log("sub=",y-z);
    console.log("multi=",x*y*z);
    console.log("div=",x/z);


}
math(5,6,2);
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

function details(fname, lname, age) {
    console.log("first name="+fname);
    console.log("last name="+lname);
    console.log("age="+age);


}
details("saurabh","kakade",25);

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

// anynomous function as parameter

function city(c){

    console.log(c);
    c();
}



city(function () {
    var city="chennai";
    console.log(city);
    
});
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");



// normal function as parameter
function d(){            //normal function
 
  console.log("hgkjjhgkjhjgbjhghg");
}

function xyz(b){

    b();
    console.log(b);
   
}



xyz(d);
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

// return type fuction
function rf(x,y){
    return x+y;



}
console.log("addition",rf(5,6));
















