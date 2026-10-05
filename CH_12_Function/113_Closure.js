function outer() {
    let messaage = "hello";
    console.log("Outer Called!");
    function inner() {
        console.log("Message");
    }
    return inner;
}

let fn_inner = outer();
fn_inner(); 