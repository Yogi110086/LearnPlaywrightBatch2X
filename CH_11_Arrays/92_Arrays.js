let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
fruits.sort();
console.log(fruits);


let numbers = [1, 5, 3, 2, 4];
numbers.sort();
console.log(numbers);

let num = [12, 3, 23, 63];
num.sort();
console.log(num);

// Natural Sorting, Laxicographical Sorting
// Ascending Order
num.sort((a, b) => a - b);
console.log(num);

// Descending Order
num.sort((a, b) => b - a);
console.log(num);
