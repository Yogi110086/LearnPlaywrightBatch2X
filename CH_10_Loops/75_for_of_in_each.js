/*
75_for_of_in_each.js
Description:
- for...of is used to iterate over iterable values such as arrays and strings.
- for...in is used to iterate over the keys/properties of an object.
- Array.forEach() runs a callback for each array element, but it cannot break or skip iteration like a normal loop.
*/

const fruits = ['apple', 'banana', 'mango'];

console.log('for...of example:');
for (const fruit of fruits) {
    console.log(fruit);
}

const person = { name: 'Alice', age: 25, city: 'Delhi' };

console.log('for...in example:');
for (const key in person) {
    console.log(key + ': ' + person[key]);
}

console.log('forEach example:');
fruits.forEach((fruit, index) => {
    console.log(index + ': ' + fruit);
});
