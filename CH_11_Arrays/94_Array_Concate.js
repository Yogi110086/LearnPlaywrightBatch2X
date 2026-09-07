let a = 'Ram ';
let b = "Singh";

//let c = a + b;

let c = a.concat(b);
console.log(c);

// Spread (mordern way) - concatenation, (.......)
let d = [...a, ...b];
console.log(d);

// Join
let s = ["Pass", "Fail", "Skip"].join("|");
console.log(s);

