//!                Array
//Write a program to calculate the sum of all elements in an array.
{
    function sumElement(num){
      let sum=0;
      for (let i = 0; i < num.length; i++) {
        if (typeof num[i]==="number") {
            sum=sum+num[i]
            
        }
        
      }
      return sum;
    }
    console.log(sumElement([1,2,3,4,5,6,7,8,9,10]));
}

//Write a program to check if an array is sorted in ascending order.

{
    function sort(array) {
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){

                return false;
            }

            
        }
         return true;
        
     }
     console.log(sort([1,2,3,4,5,6,7,8,9,10]));
     console.log(sort([12,23,45,5,68,70,8,9,10]));
}

//  sort array in acsending order
{
    {
        function sort(array) {
           return array.sort((a,b)=>a-b);
            
           
        }
        console.log(sort([12,23,45,5,68,70,8,9,10]));
    }
}

//Write a program to find the maximum and minimum elements in an array.
{
    function maxMin(arr) {
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return { max, min} ;
    }
    
    let result = maxMin([12, 23, 45, 5, 68, 70, 8, 9, 10]);
    console.log("The max number is: " + result.max);
    console.log("The min number is: " + result.min);
    
}

//reverse the elements of an array:

{
    function reverseArr(arr) {
        let reverse=[];
        for (let i = arr.length-1; i >=0; i--) {
            reverse.push(arr[i])
        }
        return reverse;
        
    }
    let arr=[1,2,3,4,5,6,7,8,9];
    console.log(reverseArr(arr));
}
//  remove duplicate elements from an array.
{
    function duplicate(arr) {
        let set=new Set(arr);
        return set;
    }
    let arr=[11,11,22,33,55,66,33,66,99,8586,66,2,656,659,2];
    console.log(duplicate(arr));
}
{
    function kakade(){
        console.log('hi')
        setTimeout(() => {
          console.log('hello.......');
        }, 3000);
        
         }
        kakade()
        new Promise((resolve)=>{
            resolve("narendra bahubali.....")
          }).then((response)=>{
          console.log(response);
        });
        console.log(' chu hello');
}


{
    var x="12";
console.log(Number(x));
}
console.log("last commited");




