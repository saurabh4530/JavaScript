// !                                                  objects


let obj={
    obj1:{
        sub1:"json",
        sub2:"reactjs",
        "sub3":"deno"
    }
}
for(let key in obj.obj1){
    console.log(obj.obj1[key] )
}



/////////////////////////////////////
function dbfun(){
    return "hello";

}
console.log(dbfun());

////////////////////////////////////


let db={
    "oracle":oracle,
    "mysql":mysql,
    "mangodb":mangodb,
    

}
function oracle() {
    return "oracle connection soon.............";
}
function mysql() {
    return "mysql connection soon...................";
 
}
function mangodb() {
    return "mangodb connection soon...............";

}

console.log(db.oracle(),db.mysql(),db.mangodb());


////////////////////////////////////////////////////////////////



let obj3={
    "key1":()=>{return "hello1"},
    "key2":()=>{return "hello2"},
    "key3":()=>{return "hello3"},
    "key4":"ram"

}
console.log(obj3.key1());
console.log(obj3.key2());
console.log(obj3.key3());
console.log(obj3.key4);

console.log(Object.keys(obj3));

console.log(Object.values(obj3));

//!   ////////////////////////////////////////////////////////////////
let myson_fun={
    "money":{"amount":1000 },
    "gold":{"weight" :"10gm" },
    "book":{"company":"react"},
    "pen":{"company1":"montex"}
}

const {money,gold,book,pen}=myson_fun;
const {amount}=money;
const {weight}=gold;
const {company}=book;
 const {company1}=pen;
console.log(amount ,weight,company,company1); 

/////////////////////////////////////////////////

let obj2={ 
    "key1":"hello1"

};
console.log(typeof obj2);
let str=JSON.stringify(obj2);
console.log(typeof str);
let obj4=JSON.parse(str);
console.log(typeof obj4);

/////////////////////////////////////////////////////////\\\\\\\

let ob1={ 
    "key1":"hello1",
    "key2":"hello2",
    "key3":"hello3"
   

};
console.log(ob1.hasOwnProperty("key1"));
console.log(ob1.hasOwnProperty("key2"));
console.log(ob1.hasOwnProperty("key3"));
console.log(ob1.hasOwnProperty("key4"));

//////////////////////////////////////////////////////////////// 


let ob2={
    "key1":"hello1",
    "key2":"welocome buddy",
    
}
console.log(Object.keys(ob2));
Object.keys(ob2).length===0?console.log("empty"):console.log("not empty");

Object.values(ob2).length==0?console.log("empty"):console.log("not empty");
console.log(Object.values(ob2));

for(let k in ob2){
    console.log(k);
    if(ob2.hasOwnProperty(k)){
        console.log("not empty");
    }else{
        console.log(" empty");

    }
}

///////////////////////////////////////////////////////////////
 
 var a=[100,200,300,400,500,600,700];
console.log( a.filter((element)=>{
    return element>=400;
 }));

//////////////////////////////////////////////////
var a=[100,200,300,400,500,600,700];
console.log( 
    a.filter((element)=>{
    return element<=400;
 }).map((element)=>{
      return {"key":element}
 })
 
 ); 







 
  print();
  console.log();
  



let sex="female";
 function Xyz(x){
    this.name ="Tushar";
    this.age = 88;
    this.lname = "patil";
    this.sex=x;
 this.func=   function print(){
        tushar = 10;
        
return tushar;
     
    
    
      }
    
 }
 let obx = new Xyz("male");
 console.log(obx.name);
 console.log(obx.age,);
 console.log(obx.sex);
console.log(obx.func());
 
 
 
 
 //? JSON server -

 // 



















































let aset=new Set([1,2,3,4,5,6,"ram"]);


aset.add('saurabh');
aset.add(7);
console.log(aset);
console.log("size of set: ",aset.size);
console.log(aset.has("saurabh"));
console.log(aset.delete(7));


console.log(aset);


///////////////////////




















