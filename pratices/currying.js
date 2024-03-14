// @ts-nocheck
//!                                     currying
/*
Currying is a technique in which a function that takes multiple arguments 
is converted into multiple function calls back to back that each take a single argument.
*/

function curry(sum){
    return function(x){                     // currying using higher order function
        return function(y){
            return sum(x,y)
        }
    }

}
function summ(a,b){
    return a+b;

}
// mostly used
//let currysum=curry(summ)(20)(25);
//console.log(currysum);

let currysum=curry(summ);

console.log(currysum(15)(5));

// .........................//............................///......................///..................

function createRequest(method){
    return function (url) {
        return function (data){
            console.log(`creating method ${method} for ${url} having data : ` ,data);
        }
        
    }
}
let postRequest=createRequest("POST");

let requesttouser=postRequest("/user");
requesttouser({name:"saurabh"});
requesttouser({name:"ram"});
requesttouser({name:"gaurav"});
requesttouser({name:"prasad"});
requesttouser({name:"shubham"});
requesttouser({name:"xyz"});

let postRequest2=createRequest("GET");
let requesttouser2=postRequest2("/user");
requesttouser2({name:"saurabh"});
requesttouser2({name:"ram"});
requesttouser2({name:"gaurav"});
requesttouser2({name:"prasad"});
requesttouser2({name:"shubham"});
requesttouser2({name:"xyz"});
// ...//..............................




console.log(".................................................");
//real life example


function sendAutoEmail (To){
    return function (Subject){
        return function (body){
            console.log(`sending email to ${To} with ${Subject} and ${body} `);
        }
    }
}
//oneline above code
const sendAutoEmail = (To) => (Subject) => (body) =>  `sending email to ${To} with ${Subject} and ${body} `;


let first = sendAutoEmail("lokeshdeore@gmail.com");
let second = first("New order confirmation");
console.log( second("Hello lokesh, here is somethimg for you"));











