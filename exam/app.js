{
    //
}


//? 2 prime number upto 20
{
    function primeNum(num){
        for(let i=2;i<num;i++){
                    if(num%i!==0){
                        console.log(i);
                    }
                
            
        
        }
    }
    primeNum(20);
}

//? sort array alphabetically

{
function sortArray(arr){
    let min= arr[0]
    for (let i = 0; i <arr.length; i++) {
       
        if (min<arr[i]) {
            console.log(min);
        }
        
    }
}
sortArray(['b','c','d','a']);

}

//? odd count from array
{
    function odd(n){
    for (let i = 0; i < n.length; i++) {
        if (n[i]%2!==0) {
            console.log(n[i]);
        }
        
    }
    }
    odd([1,2,3,4,5])
}
{
//? 4 v0wels
function vowels(str) {
    let str1=str.split('')

    for (let i = 0; i < str1.length; i++) {
        if (str1[i]==='a'||str1[i]==='e'||str1[i]==='i') {
           console.log(str[i]);;
        }
        
    }
}
vowels("jairadhekrishna");
}
{//6
    let input=[{id:"1",name:"kishan",age:23},
    {id:"2",name:"sam",age:24},
    {id:"3",name:"raj",age:25}];
    let sum=input[0].age+input[1].age+input[2].age
    console.log(sum);
}

{
    //11 negative value
    const input=[5,7,-6,-8,1,5,4,-7,-9]
    let negVal=input.filter((value,index,Array)=>{
        if(value<0){
            console.log(index);
        }
    })


}

{
    // 13 reverse string

    const input ="Good Morning";
    const reversestr=input.split("").reverse().join('')

    console.log(reversestr);
}

{//7

    function longWord(str){
        let str1=str.split(" ");
       
        let longw=str1[0];
        for (let i = 0; i < str.length; i++) {
            if (longw>str1[i]) {
                console.log(longw);
               
                
            }
            
        }
    }
    longWord("hello world it is beautiful day");
}

{
    function replace(arr){
        let replacestr=arr.splice("kiwi");
        console.log(replacestr);

    }
    replace(["apple","banana", "orange", "banana"]);
}
{

  let input=[1,2,[3,4,[5,6],8],9]
let [v1,v2,[v3,v4,[v5,v6],v8],v9]=input
for (let i = 0; i < input.length; i++) {
  push(i);
    
}
console.log([v1,v2,v3,v4,v5,v6,v8,v9]);

}

{
    //14
    const input=["jane:1","doe:2"];
    for(let [key ,value] of input.entries()  ){
        console.log(`name:${key} , value:${value}`);
    }
}



{


}