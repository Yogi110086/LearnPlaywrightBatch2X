// Examples of valid JavaScript identifiers using common naming conventions

// camelCase is the most common style for variables and functions in JavaScript
var firstName = "Yogesh";
var userAge = 30;
function calculateTotal() {
  return 100;
}

// PascalCase is commonly used for constructor functions and class names
var EmployeeName = "Rajnish";
function ProductItem() {
  this.price = 0;
}

// snake_case is valid but less common in JavaScript; often seen in some APIs or legacy code
var user_name = "anna";
var max_value = 100;

// UPPER_SNAKE_CASE is often used for constants
var MAX_SPEED = 120;
var API_KEY = "abc123";

// mixedCase is another way to describe camelCase or names with multiple uppercase letters in the middle
var myXMLParser = "parser";
var parseUrlString = "url";

// Hungarian notation uses a prefix describing the type or purpose, though it's discouraged in modern JavaScript
var strName = "Rajnish";
var numCount = 5;

// underscore prefix is valid and sometimes used for private/internal variables
var _internalValue = 42;
var _userId = 101;

// dollar sign prefix is valid and often used in library-specific identifiers
var $price = 50;
var $element = null;

// Identifiers can start with letters, $, or _ and may contain digits after the first character
var score1 = 100;
var item2Name = "item";

// kebab-case is not valid in JavaScript identifiers because hyphens are interpreted as subtraction
// var user-name = "bob"; // invalid identifier
// var 123value = 123;    // invalid identifier because it starts with a digit

console.log(
  firstName,
  userAge,
  user_name,
  MAX_SPEED,
  myXMLParser,
  parseUrlString,
  strName,
  numCount,
  _internalValue,
  $price,
  score1
);