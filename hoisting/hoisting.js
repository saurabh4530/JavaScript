//                                                       hoisting 


//console.log(vname); // undefined
var vname="nilesh";
console.log(vname);// nilesh


vname1();
//console.log(v1);//reference error

function vname1(){
    console.log(v1);// undefined
    var v1="tushar";
    console.log(v1);// tushar
}




//console.log(v2);//ReferenceError
let v2="patil";
console.log(v2);



fname();
//lname();//ReferenceError


var gv="i am global";
//console.log(fv);//ReferenceError
function fname(){
    console.log("tushar");
    console.log(gv);
    let fv=34;
// console.log(lv); //ReferenceError
    lname();
    function lname(){
        console.log("patil");
        let lv=25;
        console.log(gv);
    }
}

let f;
// start tdz


console.log(f);
console.log(f);
console.log(f);


f="satish";
//tdz end


//for var tdz start here
console.log(l);
console.log(l);
console.log(l);


var l;


console.log(l);
console.log(l);
console.log(l);


l=="ghlsdkjsdsh";
// tdz end here for var

console.log(".................................................................")




//                                      object

// using primitive datatype
let obj={
    name:"saurabh",
    age:26,
    address:"pune",
    mobile:25802580255


}
let val="address";
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj[val]);

//using non primitive data type

let obj1={
    obj2:{
        name:"saurabh", lname:"kakade", address:{hometown:"junnar"}
    },

    array1:[25,2,[50,75,100],3,4,5,6,], 

    function1:function (){
        console.log("charlie  calling from function")

    }



}
// using dot operator 
console.log(obj1);
console.log(obj1.obj2.address.hometown);// to call internal obj
console.log(obj1.array1);// to call array
console.log(obj1.array1[2][1]);
obj1.function1();//to call func
console.log("............................................");
// using brackets

console.log(obj1.obj2["name"]);
console.log(obj1["array1"]);

// for ... in  loop 


console.log("\nDisplay object using for...in loop ");

for(let i in obj1){
    console.log(`${i} and ${obj1[i]}`);
}












































