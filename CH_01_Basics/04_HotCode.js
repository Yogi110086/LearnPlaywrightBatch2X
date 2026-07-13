for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("Hello World");
function add(a, b){
    return a+b;     
}

let result;
for (let i = 0; i < 1000; i++) {
    result = add(i, i+1);
}
console.log("After 1000 iterations calls: " + result);