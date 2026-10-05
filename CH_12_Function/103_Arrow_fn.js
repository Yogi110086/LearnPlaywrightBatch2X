const greet = function (name1) {
    return name1;
}

let result = greet("Ram");
console.log(result); // Ram

const greet2 = (name2) => "HI" + name2;
let result2 = greet2("Pramod");
console.log(result2);

// If you want to make a normal function to arrow function, you can do it like this:
// Remove the function keyword, add an arrow (=>) between the parameter and the function body, and remove the curly braces if the function body contains a single expression. The expression's value will be returned automatically.

const doubleInt = n => n * 2;
console.log(doubleInt(10)); // 20


const printInt = n => console.log(n);
printInt("Dutta"); // Dutta

