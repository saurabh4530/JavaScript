
// @ts-nocheck
/// constructor func chaining i.e inheritance

function class1(){

}
class1.prototype.fun1=function(){
    return "hello1";
}

function class2() {
    
}
class2.prototype=Object.create(class1.prototype);
class2.prototype.fun2=function(){
    return "hello2";

}


function class3(){

}
class3.prototype=Object.create(class2.prototype);
class3.prototype.fun3=function(){
    return "hello3";
};


let obj1=new class1();
console.log(obj1.fun1());


let obj2=new class2();

console.log(obj2.fun1(), obj2.fun2());


let obj3=new class3();
console.log(obj3.fun1(),obj3.fun2(),obj3.fun3());



console.log("......................")



////////////////////////////////////////////




function class11(){

}
class11.prototype.dbfun=function(){
    return "data from oracle db soon";
}

function class22(){

}
class22.prototype=Object.create(class11.prototype);
class22.prototype.dbfun=function(){
 return "data from mongo db soon............!";     
}

/// if class2 have same func  name of class1 func name it is automatically override
/// 
let obj11=new class22();
console.log(obj11.dbfun());
 
console.log("..............................");








// call back func



function main(x,y,calculate, print){
    console.log("value of x and y is ",x," ",y);
 const result=calculate(x,y);
 print(result);
}
function display(result){  
    console.log(result);
}
function multiplication(a,b){
    return a*b;
}
let xyz=main(5,3,multiplication,display);

///////////////////////////////////////////////////////////////////

function pm(name,surname,pA, print){
const intro=pA(name, surname);
print(intro);


}

function pA(name, surname){
    return `i am pA of  pm sir  ${name}  and ${surname}..............`;
}
function display(intro){
console.log(intro);
}
let modi=(pm("narendra","modi",pA,display));


///////////////////////////


function cal (x,y,add){
    return add(x,y)
    }
    function add(a,b){
        return  `addition of two number: ${a+b}`;
    }
    console.log(cal(3,5,add));



/////////////////////////////////////

function greet(name, calling){
    console.log("hello "+name +"!");// main func
    calling();
}

function say(){
    console.log("goood bye dear");// callback func
}

// @ts-ignore
let name =greet("saurabh",say);





/////////////////////////////////////////////////

// NESTED FUNCTION
let name1 ;

function outer(name1){

    function inner(surname){
        return `${surname}  ${name1}`;
    }
  
    return inner("kakade");
}
name1="saurabh";
console.log(outer(name1));


////////////////////////////////////////
// generator


function *gfun1(){
    yield "stmt1";
    yield "stmt2";
    yield "stmt3";
    yield "stmt4";
    yield "stmt5";
}

let cursor=gfun1();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());// dont no who is behind
console.log(cursor.next());
///////////////////////////////////////////////


function *gf2() {
    yield 100;
    yield 200;
    return 300;
    // @ts-ignore
    yield 400;

}

let cursor1=gf2();
console.log(cursor1.next());
console.log(cursor1.next());
console.log(cursor1.next());
console.log(cursor1.next());
////////////////////////////////////////////////////////


function *gf2(){
     yield 100;
     yield *gf3();
     yield *gf4();

}
function *gf3(){
    yield 200;
}
function *gf4(){
    yield 300;
}
let cursor2=gf2();
for (let i = 0; i <=4; i++) {
    console.log(cursor2.next());
    
}

/////////////////////////////////////////////////////////////

// optional parameters in the  function



console.log("...........................................");



// callback function 

function one(a1){
    console.log(a1);// it show func defination

    console.log(a1());// it show the function o/p
}
function two(){
    return "welcome to callback function";
}
one(two);

console.log("......................................");




function main(a1,a2,a3){
 console.log(a1());
  console.log(a2());
  console.log(a3());


}

main(function sub1(){
    return " hello sub1";
},function sub2(){
    return " hello sub2";
},function sub3(){
    return " hello sub3";
});

console.log("......................................");


function fun1(a1){  
a1("hello");
}
fun1(function fun2(a1){//o/p- hello
console.log(a1);
}); 


function f1(a1,a2,a3) {
    return a1("hello1")+" "+a2("hello2")+" "+a3("hello3")
    
}
f1(function f2(a1){
    console.log(a1);
},function f3(a1){
    console.log(a1);

}, function f4(a1){
    console.log(a1);

})
console.log("//////////////////////////////////////////////");


function fun1(a1){
return a1(fun3);
     
}
function fun2(a2){
return a2("hello ");
     
}
function fun3(a3){

     console.log(a3)
}
fun1(fun2);
//////////////////////////////////////////////////////

function cal(num,add){
return add(num+5, false)
}
function addition(adres,error){
if(!error){
    console.log(adres);
}
 else{
    console.log(error);
 }
}

cal(5,addition);

 ///////////////////////////////////////////////////////////

 












    
    








 





















//////////////////////////////

















