//!                         Error Handling

//? error handling means prepared for the things which may goto wrong

try {
  try {
    console.log(name); // ref because we not a assign value to name
  } catch (err) {
    console.log(
      "give brief explaination about error ........................ "
    );
    console.log(`${err.name} and ${err.message}`);
  }
  let name = "saurabh";
  console.log(name()); // typeerror because we take varible and execute it as function
} catch (err) {
  console.log("if error plz give the details about error................   ");
  console.log(`${err.name} and ${err.message}`);
} finally {
  console.log(
    "execute the code  successfully with or without error..............."
  );
}

// ..............................//......................................

//! here we cannot found error bcoz try catch executed then settimeout function executed  becoz of time
try {
  setTimeout(() => {
    find;
  }, 3000);
} catch (err) {
  console.log(`${err.name} and ${err.message}`);
} finally {
  console.log("..................................................");
}
// another way to resolved the issue we used try catch in the function

setTimeout(() => {
  try {
    feed;
    console.log(feed);
  } catch (err) {
    console.log(err.name);

    console.log(err.message);
  } finally {
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
  }
}, 3000);

// ................///.................................

let json = "{name saurabh}";
try {
  let obj = JSON.parse(json);
  console.log(obj.name);
} catch (err) {
  console.log(`${err.name} and ${err.msg}`);
} finally {
  console.log(".............success.................");
}

//......................//............................//...............................

try {
  let a = 5;

  console.log(a());
} catch (error) {
  console.log(`${error.name} and ${error.message}`);
} finally {
  console.log("success");
}
//................................
//?                                         throw operator

function Division(a, b) {
  if (b === 0) throw new Error("its impossible to divide");

  return a / b;
}
try {
  console.log(Division(10, 0));
} catch (err) {
  console.log(`${err.name} and ${err.message}`);
} finally {
  console.log("executed successfully");
}

//?                               rethrowing

function divide(x, y) {
  try {
    if (y === 0) throw new Error("cannot divide by 0 ");

    return x / y;
  } catch (err) {
    console.log("Caught an error locally");
    console.log(err.msg + "   " + err.message);// handle the error locally 
    throw err  // rethrowing error to global
  }
}
try{
    console.log(divide(10,0));
}
catch(err){
    console.log("Caught an error globally");
    console.log(err.msg + "   " + err.message);// handle the error globally 


}finally{
    console.log("execute the programe successfully");
}
//////////////////////////////////////////////////////


function readData(){
    let jsox="{age:25}";
    try{
        xyz();


    }catch(err){
        if(!(err instanceof SyntaxError)){
            throw err
        }

    }
}
try{
    console.log(readData());
}catch(error){
    console.log("extenal error occurs",error.message);
}finally{
    console.log("done");
}






















