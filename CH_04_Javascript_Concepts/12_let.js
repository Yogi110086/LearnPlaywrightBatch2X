let a = 32;
console.log(a); // Output: 32 // Global Scope


let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;

console.log(retrycount); // Output: 1

//let retrycount = 5;

let teststatus = "Pass";
if (teststatus === "Pass") {
    let exectiontime = 1200;
    console.log("Inside block:", exectiontime)
}

//console.log("Inside block:", exectiontime)