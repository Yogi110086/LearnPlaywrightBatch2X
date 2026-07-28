/*
=====================================================
JAVASCRIPT STRINGS
Single Quotes (' ')
Double Quotes (" ")
Backticks (` `) - Template Literals
=====================================================
*/

/*
-----------------------------------------------------
1. SINGLE QUOTES (' ')
-----------------------------------------------------
*/

const firstName = 'Yogesh';

console.log(firstName); // Yogesh

// Use for simple strings
const city = 'Delhi';
const role = 'QA Engineer';

console.log(city);
console.log(role);


/*
-----------------------------------------------------
2. DOUBLE QUOTES (" ")
-----------------------------------------------------
*/

const lastName = "Yadav";

console.log(lastName);

// Useful when string contains single quote

const message = "I'm a QA Engineer";

console.log(message);


/*
-----------------------------------------------------
3. BACKTICKS (` `)
TEMPLATE LITERALS
-----------------------------------------------------
*/

const name = `Yogesh`;

console.log(name);


/*
-----------------------------------------------------
FEATURE 1: VARIABLE INTERPOLATION
-----------------------------------------------------
*/

const userName = "Yogesh";
const age = 25;

// Old way
console.log("My name is " + userName + " and age is " + age);

// Modern way
console.log(`My name is ${userName} and age is ${age}`);


/*
-----------------------------------------------------
FEATURE 2: EXPRESSIONS INSIDE STRING
-----------------------------------------------------
*/

const a = 10;
const b = 20;

console.log(`Sum = ${a + b}`);
console.log(`Multiply = ${a * b}`);
console.log(`Division = ${b / a}`);


/*
-----------------------------------------------------
FEATURE 3: FUNCTION CALLS
-----------------------------------------------------
*/

function greet(name) {
    return `Hello ${name}`;
}

console.log(`${greet("Yogesh")}`);


/*
-----------------------------------------------------
FEATURE 4: MULTI-LINE STRINGS
-----------------------------------------------------
*/

const address = `
Apogee Precision Lasers
Noida
Uttar Pradesh
India
`;

console.log(address);


/*
-----------------------------------------------------
FEATURE 5: HTML TEMPLATE
-----------------------------------------------------
*/

const employee = "Yogesh";

const html = `
<div>
    <h1>${employee}</h1>
    <p>QA Engineer</p>
</div>
`;

console.log(html);


/*
-----------------------------------------------------
ESCAPE CHARACTERS
-----------------------------------------------------
*/

// Single quote inside single quote

const text1 = 'I\'m Yogesh';

console.log(text1);

// Double quote inside double quote

const text2 = "He said \"Hello\"";

console.log(text2);


/*
-----------------------------------------------------
IMPORTANT INTERVIEW QUESTION
-----------------------------------------------------
*/

const empName = "Yogesh";

console.log('Hello ${empName}');
// Output: Hello ${empName}
// Single quotes do not evaluate variables

console.log("Hello ${empName}");
// Output: Hello ${empName}
// Double quotes do not evaluate variables

console.log(`Hello ${empName}`);
// Output: Hello Yogesh
// Backticks evaluate variables


/*
-----------------------------------------------------
COMPARISON TABLE
-----------------------------------------------------

Single Quotes (' ')
✓ Create strings
✗ Variable interpolation
✗ Multi-line strings

Double Quotes (" ")
✓ Create strings
✗ Variable interpolation
✗ Multi-line strings

Backticks (` `)
✓ Create strings
✓ Variable interpolation (${ })
✓ Multi-line strings
✓ Expression evaluation
✓ HTML templates

-----------------------------------------------------
MODERN JAVASCRIPT RECOMMENDATION
-----------------------------------------------------

Use Single Quotes:
const city = 'Delhi';

Use Backticks:
const name = 'Yogesh';
console.log(`Hello ${name}`);

Backticks are preferred when:
1. Variables are used
2. Expressions are used
3. Multi-line strings are needed
4. HTML templates are created

=====================================================
END OF NOTES
=====================================================
*/