const greet = function (name) {
    console.log(`Hello, ${name}`);
}

let r = greet("Ram");
console.log(r);

// Type 4
function greet1(name1) {
    return `Hello, ${name1}`;
}

const greet2 = function (name2) {
    return `Hello, ${name2}`;
};

console.log(greet1("Bob"));
console.log(greet2("Bob"));
