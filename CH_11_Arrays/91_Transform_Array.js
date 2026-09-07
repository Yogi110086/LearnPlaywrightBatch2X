let scores = [45, 82, 90, 60, 73];

// map - transform and retrun a new array
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter - Keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce - Reduces an array to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// Flat - flatterns nested arrays
let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());