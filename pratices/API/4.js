
async function fetchData() {
  try { let respose=await fetch("https://dummyjson.com/quotes");
    let data=await respose.json();
    return data;}
    catch(err){
        console.log(err);
    }
}
 fetchData().then(data => console.log(data)).catch(error => console.error(error));