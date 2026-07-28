let a = 10;
console.log(a); // Output: 10

// Defining a function
function printhello() {
    console.log("Hello Testing Academy");
    a = 20; // Local Scope
    console.log(a); // Output: 20
    if (true) {
        let a = 30; // Block Scope
        console.log(a); // Output: 30
    }
    console.log("F--> " + a); // Output: 20


}

console.log("G--> " + a); // Output: 10
printhello();