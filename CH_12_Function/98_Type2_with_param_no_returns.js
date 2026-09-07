function greetByname(name) {
    console.log("Hello, " + name + "! How are you?");
}

greetByname("Ram"); // Calling with argument "Ram"
let result = greetByname("Singh"); // Calling with argument "Singh"
console.log(result); // undefined

function baggers(Money) {
    console.log("Thanks", Money);
}

let returnMesomething = baggers(100);
console.log(returnMesomething);