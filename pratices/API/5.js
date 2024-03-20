//!      api CRUD opearation

//?  fetch data

fetch("https://dummyjson.com/products/1").then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//? post 

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        name:"saurabh",
        age:25,
        userId:11,address:"pune"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}).then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

console.log("..........................................");
fetch("https://jsonplaceholder.typicode.com/posts/2", {
    method:"POST",
    body:JSON.stringify({
        id:2,
        userId:2,
        name:"narendra",
        age:50,
        address:"nashik"
    }),    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}).then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
console.log("..........................................");


//? put 




fetch("https://jsonplaceholder.typicode.com/posts/2",{
    method:"PUT",
    body:JSON.stringify({
        id:1,
        title:"cipla",
        body:"ok",
        userId:150696
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}).then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
console.log("..........................................");


//? patch
fetch("https://jsonplaceholder.typicode.com/posts/3",{
    method:"PATCH",
    body:JSON.stringify({
        id:1,
        title:"cipla",
        body:"well",
        userId:150696
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}).then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
console.log("..........................................");






