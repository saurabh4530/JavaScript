let elm=document.getElementById("self");
 let h1=document.createElement("h1");// created h1 element
 elm.appendChild(h1)// join after p tag
 h1.className="try pi";// assign class to h1 tag
 h1.id="unique";//assign id to newly created h1 tag
 let text=document.createTextNode("creating new text");// text added in newly created tag
 h1.appendChild(text);// text added in h1 tag 


 // using property
 h1.textContent=" new content added";

 let para=document.getElementById("p1");
 console.log(para.textContent);



 



