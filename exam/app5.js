{
    // find prime from array with freq
let arr=[2,3,4,5,6,7,8,9]
function primeNumWithCount(arr) {
    let freq=[]
for (let i = 0; i < arr.length; i++) {
    let count=0;
    let num=arr[i]
    for (let j = 2; j <=num/2; j++) {
       if (num%j===0) {
       count++;
       break;
       }
        
    }
    if (count===0) {
     freq.push(num)

    }
}
console.log(freq);
console.log(freq.length);
}
  primeNumWithCount(arr);
}
{
    //?asyc await  sequential execution with promise
    async function task(){
        let one=await Promise.resolve("one");
        console.log(one);
        let two=await Promise.resolve("two")
        console.log("two");
    }
    task()
}
{
        //?asyc await  parallel execution with promise
        async function task() {

            let [a,b]=await Promise.all([
                Promise.resolve("good"),
                Promise.resolve("morning")
            ])
            console.log(a,b);

        }
        task();
}
{       
 //?asyc await  mixing execution with promise

  async  function task () {
        let result=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        result.json().then((data)=>{
            console.log( data);
        })
        .catch((err)=>console.log(err))
        
    }
    task();

}
{
    //todo Example: Suppose you have  an array of product prices and you want to apply a discount to each price. `map()` can be used to create a new array of discounted prices.
    let arr = [100, 200, 300, 350, 500, 600];
let dis = 10; // Discount percentage

let disprice = arr.map((price) => {
    let discountAmount = price * (dis / 100); // Calculate the discount amount
    let discountedPrice = price - discountAmount; // Calculate the discounted price
    return discountedPrice;
});

console.log(disprice);


}
{
    // leap year code

    function leap(arr){
        let leap=[]
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%400==0 || arr[i]%100!==0 && arr[i]%100===0||arr[i]%4===0){
              leap.push(arr[i])
            }
        }
        console.log(leap);

    }
    leap([2000,2004,2008,2010,2012,2016]);
}
{
    let arr1=[3,4,5,6,7] 
    let arr2=[2,3,4,5,6]
    //[5,7,9,11,13]
    function add(arr1,arr2) {
        let sum=[];
        for (let i = 0; i < arr1.length; i++) {
           
            sum.push(arr1[i]+arr2[i])
            
           
            
        }
        console.log(sum);
        
    }
    add(arr1,arr2)
}
{
    let arr=[1,2,3,[4,5,6,[7,8,9,[7,6,5,4],7,9],1,2],1,23,4];
    function concate(arr) {
      let ar=[];
      function flat(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            flat(arr[i])
            
          } else {
            ar.push(arr[i])
            
          }
          
        }
        
      }flat(arr);
      console.log(ar);
    }
    concate(arr)
}