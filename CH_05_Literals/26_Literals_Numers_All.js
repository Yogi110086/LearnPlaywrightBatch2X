/*
=====================================================
JAVASCRIPT LITERALS & NUMBERS
Complete Notes with Examples
=====================================================

What are Literals?
------------------
Literals are fixed values written directly in code.

Examples:
10
20.5
"Yogesh"
true
null
[1,2,3]
{ name: "Yogesh" }

=====================================================
1. NUMBER LITERALS
=====================================================
*/

// Integer Numbers

const age = 25;
const salary = 50000;

console.log(age);
console.log(salary);


// Floating Point Numbers

const price = 99.99;
const percentage = 95.75;

console.log(price);
console.log(percentage);


/*
=====================================================
2. NEGATIVE NUMBERS
=====================================================
*/

const temperature = -10;
const balance = -500;

console.log(temperature);
console.log(balance);


/*
=====================================================
3. EXPONENTIAL NUMBERS
=====================================================
*/

const million = 1e6;      // 1 × 10^6
const billion = 1e9;      // 1 × 10^9

console.log(million);
console.log(billion);


/*
=====================================================
4. HEXADECIMAL NUMBERS
=====================================================
*/

const hexValue = 0xFF;

console.log(hexValue); // 255


/*
=====================================================
5. BINARY NUMBERS
=====================================================
*/

const binaryValue = 0b1010;

console.log(binaryValue); // 10


/*
=====================================================
6. OCTAL NUMBERS
=====================================================
*/

const octalValue = 0o12;

console.log(octalValue); // 10


/*
=====================================================
7. BIGINT
Used for very large numbers
=====================================================
*/

const bigNumber = 123456789123456789123456789n;

console.log(bigNumber);


/*
=====================================================
NUMBER METHODS
=====================================================
*/

const num = 123.456;


/*
-----------------------------------------------------
toFixed()
-----------------------------------------------------
*/

console.log(num.toFixed(2));
// Output: 123.46


/*
-----------------------------------------------------
toString()
-----------------------------------------------------
*/

console.log(num.toString());
// Output: "123.456"


/*
-----------------------------------------------------
Number()
-----------------------------------------------------
*/

const value = "100";

console.log(Number(value));
// Output: 100


/*
=====================================================
SPECIAL NUMBERS
=====================================================
*/

/*
-----------------------------------------------------
Infinity
-----------------------------------------------------
*/

console.log(1 / 0);
// Output: Infinity


/*
-----------------------------------------------------
-Infinity
-----------------------------------------------------
*/

console.log(-1 / 0);
// Output: -Infinity


/*
-----------------------------------------------------
NaN (Not a Number)
-----------------------------------------------------
*/

console.log("Hello" * 10);
// Output: NaN


/*
=====================================================
CHECKING NUMBERS
=====================================================
*/

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

/*
Output:
true
false
*/


/*
=====================================================
MATH OPERATORS
=====================================================
*/

const a = 10;
const b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Power


/*
=====================================================
MATH OBJECT
=====================================================
*/

console.log(Math.PI);

console.log(Math.round(10.6));

console.log(Math.floor(10.9));

console.log(Math.ceil(10.1));

console.log(Math.sqrt(64));

console.log(Math.pow(2, 3));

console.log(Math.max(10, 20, 30));

console.log(Math.min(10, 20, 30));


/*
=====================================================
RANDOM NUMBER
=====================================================
*/

console.log(Math.random());


// Random number between 1 and 10

const randomNum = Math.floor(Math.random() * 10) + 1;

console.log(randomNum);


/*
=====================================================
STRING LITERALS
=====================================================
*/

const firstName = "Yogesh";
const city = 'Delhi';
const role = `QA Engineer`;

console.log(firstName);
console.log(city);
console.log(role);


/*
=====================================================
BOOLEAN LITERALS
=====================================================
*/

const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);


/*
=====================================================
NULL LITERAL
=====================================================
*/

const user = null;

console.log(user);


/*
=====================================================
UNDEFINED
=====================================================
*/

let mobileNumber;

console.log(mobileNumber);


/*
=====================================================
ARRAY LITERAL
=====================================================
*/

const skills = [
    "Java",
    "JavaScript",
    "Playwright",
    "Appium"
];

console.log(skills);

console.log(skills[0]);
console.log(skills[1]);


/*
=====================================================
OBJECT LITERAL
=====================================================
*/

const employee = {
    name: "Yogesh",
    role: "QA Engineer",
    experience: 2
};

console.log(employee);

console.log(employee.name);
console.log(employee.role);


/*
=====================================================
TEMPLATE LITERAL
=====================================================
*/

const empName = "Yogesh";
const company = "Apogee";

console.log(`Hello ${empName}`);
console.log(`Welcome to ${company}`);


/*
=====================================================
TYPEOF OPERATOR
=====================================================
*/

console.log(typeof 100);
console.log(typeof 100.5);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});


/*
Output

number
number
string
boolean
object
undefined
object
object

*/


/*
=====================================================
INTERVIEW QUESTIONS
=====================================================

Q1. Difference between Number and BigInt?

Number:
9007199254740991

BigInt:
9007199254740991123456789n


Q2. What is NaN?

NaN = Not a Number

Example:
"Hello" * 10


Q3. What is Infinity?

Result of dividing by zero.

Example:
1 / 0


Q4. How to check integer?

Number.isInteger(value)


Q5. What is an Object Literal?

const person = {
    name: "Yogesh"
};

=====================================================
SUMMARY
=====================================================

Literals Types:

1. Number Literal
2. String Literal
3. Boolean Literal
4. Null Literal
5. Undefined
6. Array Literal
7. Object Literal
8. Template Literal
9. BigInt Literal

Number Formats:

1. Integer
2. Floating Point
3. Binary
4. Octal
5. Hexadecimal
6. Exponential
7. BigInt

=====================================================
END OF NOTES
=====================================================
*/