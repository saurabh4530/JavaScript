//!               Recurrsion

// function calling itself again and again called recurrsion


function factorial(num){
    if(num===0||num===1){
        return 1;
    }
    return (num)*factorial(num-1);
}
console.log(factorial(5));


//....................//.....................//..........


function add(num) {
    if(num<=1){
        return num;

    }
    return num+add(num-1)
}
console.log(add(10));















