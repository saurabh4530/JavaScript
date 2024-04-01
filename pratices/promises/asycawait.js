//? asyc await

{
  async function task() {
    console.log("this is asyc await concept");
    try {
      let result = await fetch(
        "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/3"
      );
      let data = await result.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  task();
}

{
  async function task1() {
    try {
      let [result1, result2] = await Promise.all([
        Promise.resolve("successfully resolved"),
        Promise.reject(" reject"),
      ]);

      console.log(result1, result2);
    } catch (error) {
      console.log(error);
    }
  }
}

{
    async function tast3() {
        try {
            let result=await ("hi")
        } catch (error) {
            
        }
        
        
    }
}
{
    async function task4() {
        console.log('Start');
        await new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
        console.log('After 2 seconds');
    }
    
    task4();
    
      
}
{

  async function task() {
    console.log("this is asyc await concept");
    try {
      let result1 = await fetch(
        "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/3"
      );
      let data = await result1.json();
      console.log(data);
      let result2 = await fetch(
        "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/2"
      );
      let data1 = await result2.json();
      console.log(data1);

    } catch (err) {
      console.log(err);
    }
  }
  task();


}
