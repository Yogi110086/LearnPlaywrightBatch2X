var v = 23;
let d = 42;
const pi = 3.14;


var browser = "Chrome";
var browser = "Firefox"; // Redeclaration
browser = "Edge"; // Reassignment

console.log(browser);

function test() {
    var browser = "Safari";
}

test();
test();
