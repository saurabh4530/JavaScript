//! fetch data using async and await 

async function fetchData(){
try  {  let request=await fetch("https://gorest.co.in/public/v2/users");
    let data= await request.json();
    console.log(data);}
    catch(error){
        console.log("error data not fetched................! ");

    }
}
fetchData();
