//! fetch data using async and await 

async function fetchData(){
try  {  
    let request=await fetch("https://gorest.co.in/public/v2/users");
    console.log(request);

    let data= await request.json();
    console.log(data);}
    catch(error){
        console.log("error data not fetched................! ");

    }
}
fetchData();
{
    var if =123;
    console.log(if);
}