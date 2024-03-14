
//getElementsByID
let elm=document.getElementById("first");
console.log(elm);
console.log(elm.innerHTML); //using innerhtml we get and set the value
elm.innerHTML="<p>hello , welocome to DOM <p>";// here we set the value/ text for list 2 so "list2" text replace by "hello , welocome to DOM"
//....................//..............
//getElementsByClassName

let elm1=document.getElementsByClassName("cl");// here we change multiple nodetext using these 
for (let i = 0; i < elm1.length; i++) {
    elm1[i].innerHTML="<p>learning DOM<p>";//we used for loop bcoz it create collection of li 
    
}
//.....................//..................
//getElementsByTagName

let elm2=document.getElementsByTagName("h2");// here we changed all h2 text 
for (let i = 0; i < elm2.length; i++) {
     elm2[i].innerHTML="heyy.....";
    
}

let divelm=document.getElementById("div1");
let elm3=divelm.getElementsByTagName("h2");// here we change only div h2 
for (let i = 0; i < elm3.length; i++) {
    elm3[i].innerHTML="changing heading 2 to HELLO"
    
}
//.....................//..............
// Query selector 

//let elm4=document.querySelector("p.intro"); // change only single element
let elm4=document.querySelectorAll("p.intro");// use for multiple 
for (let i = 0; i < elm4.length; i++) {
 elm4[i].innerHTML=" here we change the text by using Query Selector ";
    
}

//...............///.....................
// traversing elements








 









