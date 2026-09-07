// Checking Array

// Check if sometihng is an array
let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("Hello");
console.log(result1);


// Every and some
[80, 90, 95].every(s => s >= 70); // true
[80, 60, 95].some(s => s < 70); // true

// Playwright API

[200, 201, 204].every(statuscode => statuscode > 200);


// Some - At least one element should pass the test

[80, 60, 95].some(s => s < 70); // true
[80, 90, 95].some(s => s >= 70); // true