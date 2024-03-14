
A();
function A(){
    b();
console.log("A");

function b(){
    console.log("from b");
    c();

    function c(){
        console.log("from c");
    }
}
}
