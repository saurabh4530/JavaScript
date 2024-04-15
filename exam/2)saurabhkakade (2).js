{
    //!1
    function userinfo(name,age) {
        return `${name} is ${age} years old`;
        
    }
    console.log(userinfo("saurabh",25));
}
{
    //!2
    function loop(arr) {
     
        for (let i of arr) {
            console.log(i**2);
        }
       
      
    }
    loop([1,2,3,4,5]);
}
{
    //!3
    function trycatchDemo() {
        
    
         try {
            let a="kgdfhgd";
         a();
         } catch (error) {
            console.log(error.message);

         }
         
  

    }
    try {
        trycatchDemo();
    } catch (error) {
    }
}
{//!4
    function sum(a,b=10) {
        
        return a+b
    }
    console.log(sum(5));

}
{
    //!5
    let  person={
        name:"john",
        age:30,
        city:"new york"
    }
    let {name ,age,city}= person;
    console.log(name);
    console.log(age);

}
{
    //!6
function sumAll(...arg) {
 
    let sum=0;
    for (let i = 0; i < arg.length; i++) {
        sum=sum+arg[i]
        
    }
    return sum
    
}
console.log(sumAll(1,2,3,4,5));

}
{
    //!7
    let arr=[1,2,3,4,5]
    let smap=arr.map((v)=>v**2);
    console.log(smap);
}
{
    //!8
    let arr=[1,2,3,4,5,6]
    let farr=arr.filter((v)=>v%2===0)
    console.log(farr);
}
{
    //!9
    let arr=[1,2,3,4,5]
    let redarr=arr.reduce((acc,cv)=>{
           return acc=acc+cv
    },0)

    console.log(redarr);
}
{//!10
    function isEqual(a,b) {
        return `${a===b}`
    }
    console.log(isEqual("5",5));//false
    console.log(isEqual(5,5));//True


}
{
    //! 11

    function oddeven(num) {
     return  num%2===0?"even":"odd" 
    }
   console.log( oddeven(5));
   console.log( oddeven(10));
}

{
    //!12
    let p=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("hello Promises!")
        }, 2000);
    })
    p.then((response)=>console.log(response)).catch((err)=>{
        console.log(err);
    })
}
{
    //!14
    let arr1=[1,2,3,4]
    let arr2=[1,2,3,4]
    let combine=[];
    for (let i = 0; i < arr1.length; i++) {
     combine.push(arr1[i])
        
    }
    for (let i = 0; i < arr2.length; i++) {
        combine.push(arr2[i])
           
       }
       console.log(combine);


}
{
    //!  16
    function bouncer(arr) {
        let [v1,v2,v3,v4]=arr
return `${[v1,v2,v4]}`
    }
    console.log(bouncer([7,"ate","",false,9]));

}
{
    let person={
        name:"shubham",acttion:["bike","hike","ski","surf"],
        printAction(){
            let arrow=()=>{
                console.log(`${this.name},likes ${this.acttion[0]} , ${this.acttion[1]}, ${this.acttion[2]}, ${this.acttion[3]}`);
            }
        }
    }
    console.log(person.printAction().arr);
}
{
    //!18
    let arr=[1,2,3,4,5,2,1,3,6,7];
    function duplicates(arr) {
        let set=new Set([...arr])
        return Array.from(set)
    }
    console.log(duplicates(arr));


}
{
    //!19
    let arr=[1,2,3]
    function sum(x,y,z) {
 
        
        return x+y+z
        
    }
    console.log(sum(...arr));
    

}
{
    //!20
    let user={
        id:1,
        profile:{
            name:"john",
            age:30
        }
    }
    let {id,profile:{name,age}}=user
    console.log(id);
    console.log(name);
    console.log(age);
}
{
    //!21
    class Vehicle{
        constructor(brand){
            this.brand=brand
        }
    }
    class Car extends Vehicle{
constructor(brand,model){
    super(brand);
   this.model= model;
}
 details(){
    return `${this.brand} ${this.model}`
 }
}

    
    let car=new Car("ford","mustang")
    console.log(car.details());
}

{
    //!22 
    async function fetchData(url) {
       
setTimeout(() => {
    let result=await fetch(url);
    let data=await result.json()
    console.log(data);
}, 2000);
           

}
fetchData("abc.com")
      
 }

 {
    //!24
    function abc(num) {
      for (let i = 1; i <=num; i++) {
        setTimeout(()=>{
            console.log(i);
        },1000*i)
        
      }  
    }
    abc(5)
 }
 {
    //!25
    let person={
        firstName:"john",lastName:"doe"
    }
let {firstName:fn,lastName:ln}=person
console.log(fn,ln);
 }
{
    //!26
    function greet(firstName,lastName) {
        return `hello, ${firstName} ${lastName} !`
    }
  console.log(  greet("saurabh","kakade"));
}
{
    //!27
    let arr=[1,2,3,4,7,8];
    function includeseven(arr) {
       for (let i = 0; i < arr.length; i++) {
        if (arr.includes(7)) {
           return true
        }
        
       } 
    }
   console.log( includeseven(arr));

}
{
    //!28
    let fetchData=new Promise(resolve=>setTimeout(resolve,200))
    let fetchComments=new Promise(resolve=>setTimeout(resolve,300))

    Promise.all([fetchData,fetchComments]).then((re)=>console.log(re))
}
{
    //!29
    export let a=10// suppose export from calculate file
    export let b=10

import{a, b} from "calculate file path";
console.log(a+b);

}
{
    //!31
    let user={
address:{
    street:"fc road"
}
    }
    console.log(user.address.street);
}
{
    //!34
    let obj={
        a:1,b:2,c:3
    }
    for (const key in obj) {
        console.log(key);
    }
}
{//38
    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("received data ")
            }, 1000);
        })
        
    }
    getData().then((res)=>console.log(res))
}
{
    //!15
    function repeatt(str,t) {
        return str.repeat(3)
    }
    console.log(repeatt("abc",3));
}
{
    //!13
    function outer() {
        let count=0
        return function inner() {
            count++;
            console.log(count);
        }
        
    }
   let out= outer();
    out.inner()
}