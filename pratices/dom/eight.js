let parent=document.getElementById("menu");
let item=document.createElement("li");
// product is replace by services
item.textContent="services";
let replace=parent.firstElementChild.nextElementSibling;
parent.replaceChild(item,replace);

