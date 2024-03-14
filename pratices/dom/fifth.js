// let list1=document.getElementById("list");
// let item=document.createElement("li");
// item.textContent="new list 5";
// list1.appendChild(item); //added at the last

// let pos=list1.firstElementChild.nextElementSibling;

// list1.insertBefore(item,pos);

let parent=document.body;
let elm=document.createElement("h2");
elm.textContent="this is new element";

let list=document.getElementById("list");
parent.insertBefore(elm,list);




