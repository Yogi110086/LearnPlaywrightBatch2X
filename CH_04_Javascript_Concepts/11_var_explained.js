var a = 10;




console.log(a); // Output: 10 // Global Scope


function printhello() {
    console.log("Hello Testing Academy");
    a = 20; // Local Scope
    console.log(a); // Output: 20
}

printhello();