{function trial() {
    setTimeout(()=>{
        console.log("hello.................");
    }, 2000);
}
trial();}


function trial() {
  
        console.log("hello good morning.................");
   
}
trial();
let x=setInterval(trial,2000);

setTimeout(() => {
    clearInterval(x);
}, 10000);










