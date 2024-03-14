let menu=document.getElementById("menu");
let cloneelm=menu.cloneNode(true); // ul copied but li not copied
console.log(cloneelm);
cloneelm.id="mobile-menu"
document.body.appendChild(cloneelm);


