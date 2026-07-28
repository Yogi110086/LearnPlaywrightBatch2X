/* 
Javascript Basics
1. Keywords
2. Identifiers
3. Literals
4. Operators

Keywords: Reserved words in JS, cannot be used as identifiers.

Identifiers: Names given to variables, functions, classes, etc. Must start with a letter, underscore (_), or dollar sign ($). 
Cannot start with a number. Cannot be a reserved keyword.

Literals: Fixed values that are directly written in the code. Examples include numbers (42), strings ("Hello"), booleans (true/false), arrays ([1, 2, 3]), and objects ({ key: "value" }).

Operators: Symbols that perform operations on values. Examples include arithmetic operators (+, -, *, /), comparison operators (==, ===, !=, !==, >, <), logical operators (&&, ||, !), and assignment operators (=, +=, -=).       

Variable: It is like a container that holds data. In JavaScript, variables can be declared using var, let, or const.
The value of a variable can change over time (except for const).
*/





/*
var if =10;
console.log(if);
we cannot use if(reserved keyword) as variable name. It will give error.
*/

/*
Rules of Identifiers:
• Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
• Subsequent characters may also include digits (0–9).
• Cannot start with a digit.
• Cannot be a reserved keyword.
• Are case-sensitive.
• May contain Unicode letters and Unicode escape sequences.
• Cannot contain spaces, hyphens, or special characters (except _ and $).
*/

// --- Code Examples ---

/**
 * Checks if a number is a prime number.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, otherwise false.
 */
function isPrime(num) {
    // Prime numbers must be greater than 1.
    if (num <= 1) {
        return false;
    }

    // 2 is the only even prime number.
    if (num === 2) {
        return true;
    }

    // All other even numbers are not prime.
    if (num % 2 === 0) {
        return false;
    }

    // Check for odd divisors from 3 up to the square root of the number.
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    // If no divisors were found, the number is prime.
    return true;
}

console.log("Is 7 prime?", isPrime(7)); // Output: Is 7 prime? true
console.log("Is 10 prime?", isPrime(10)); // Output: Is 10 prime? false
console.log("Is 29 prime?", isPrime(29)); // Output: Is 29 prime? true