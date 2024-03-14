let amap= new Map();
 amap.set(1,"saurabh");
 amap.set(2,"ram");
 amap.set(3,"sham");
 amap.set(4,"tushar");

 console.log(amap.get(1));
 console.log(amap.has(3));
 amap.delete(4);
 console.log(amap);

 amap.forEach((value,key)=>{
    console.log(`${key}......${value}`);
 })





















/////////////////////////






 // array map
 let arr=[1,2,3,4,5,6,7,8,9,10];

 let Squarearr=arr.map(square);
 
 function square(number){
     return number*number;
 }
 
 console.log(Squarearr);
 
 console.log(".............................................");
 
 
 let arr1=[5,6,7,8,9,10,11]
 let arr2=arr1.map(add);
 
 function add(value, index, array) {
    let nvalue
    if (index<(array.length-1)) {
        nvalue=array[index]+array[index+1];
        
    }else{
        nvalue=value+array[0]; 
    }




     return nvalue;
 }
 console.log(arr2);
 
 console.log("odd array");
 console.log(arr1);
 console.log(".............................................");
 
// array filter




let ar3=[1,2,3,4,5,6,7,8,9,10];

let ar4=ar3.filter ( 
    function even(value,index,array){
        // if(value%2===0){
        //     return true;
        // }else{
        //     return false;
        // }
        return value%2===0;
    }
);  
console.log(ar4);

console.log(".............................................");


// array reduce 

let ar5=[1,2,3,4,5,6,7,8,9,10];

let reduceAr=ar5.reduce(
    function summation(total, cv,ci, arra){
        let sum=total+cv;
        return sum;
    }
)
console.log(reduceAr);    

////////////////////////////////////////////////////
// i want print pune hingolee
let number = [1,2,3,
    {
      name : "abhi",
      arr : [2,5,
        {
        class : "Amit",
        city1 :{
          "City Name" : "Osmaanbad",
          "Work arr" : [
            "pune","Hingolee"
          ]
        }
      }
    ]
    } ];
  console.log(number[3].arr[2].city1["Work arr"]);

console.log("..................................");

// array methods

// forEach() method

let ar=[1,2,3,4,5,6,7,8,9,10];

let fear=ar.forEach(
    function add(val,ind, arr) {
        return 
        
    }
)


//////////////////////////////
//every method 


let ar1=[2, 4, 6, 8, 0, 10, 12, 15, 16];;

let everyarr=ar1.every(checkAllEven);

function checkAllEven(num,index,array){
console.log(num%2==0);
    if(num%2==0){
        return true;                    // if we get any false value then sigle result shwon by false value
    }else{
        return false;
    }
}

console.log("the result of every is : ",everyarr);


////////////////////////////////////////////////////////////////////////////

// some() method 

let ar2=[1,3,,7,9,11,13,12,15];

let somearr=ar2.some((num,index,array)=>{
    console.log(num%2==0);
    if(num%2==0){                       // if any element of array pass the condition result is true  
        return true;

    }else{
        return false;
    }
    

}
);
console.log("result of some method is:",somearr);


//////////////////////////////////////////////////////////////////////////

// find() method 

let ar8=["saurabh","om","ram", "geeta","parnalekha"];

let findar=ar8.find(
    function found(value) {
        return value.length>=8;  // find 1st element which satisfy the function condition
        
    }
);
console.log(findar);
if(findar){
    console.log(findar);
}else{
    console.log("element not found");
}


///////////////////////////////////////////////////////////////////

// indexof() and lastIndexOf()

let ar9=["saurabh","shubham","om","ram", "geeta","parnalekha","abhi", "shubham"]

let indexofar=ar9.indexOf("shubham");
console.log("index of shubham: ",indexofar);  // indexof give 1st index of element if element repeated or not

let lastIndexar=ar9.lastIndexOf("shubham"); //lastindexof give last index of element if element repeated
console.log("last index of shubham: ",lastIndexar);

//////////////////////////////////////////////////////////////////////////////////////












   








 

























