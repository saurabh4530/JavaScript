var globalVar="I am global variable";
//normal function
function print(){
    console.log("hello , program is successfully executed");

}
print();


console.log("...........................................");

function calculate(){
  let a, b,c ,d;
  a=2,b=4,c=8,d=16;//all are local variable
    var add=a+b+c;
    var sub=a-b;
    var multi=c*d;
    var div=d/a;
    console.log("Addition= "+ add);
    console.log("Substraction= "+sub);
    console.log("multiplication= "+multi);
    console.log("division= "+div);
    console.log(globalVar);

}
calculate();

console.log("...........................................");






//parameterized function
function add(x,y){
    var result=x+y;
    console.log(result);
}
add(6,8);


console.log("...........................................");

function calculate1(a,b,c,d){
    var add=a+b+c;
    var sub=a-b;
    var multi=c*d;
    var div=d/a;
    console.log("Addition= "+add);
    console.log("Substraction= "+sub);
    console.log("multiplication= "+multi);
    console.log("division= "+div);

}
calculate1(12,4,8,16);
console.log("...........................................");
function A( ){
    b();
console.log("A");

function b(){
    console.log("from b");
    c();

    function c(){
        console.log("from c");
    }
}
}
A();





