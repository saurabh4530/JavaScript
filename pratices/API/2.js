

let request=function countries(all) {
    fetch(`https://restcountries.com/v3.1/${all}`)

    
.then((respose)=>{
    console.log(respose);
    return respose.json();

}).then((data)=>{
    
    console.log(data);
    
})
}
request("all");
