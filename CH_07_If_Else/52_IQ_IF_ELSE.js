/*
if ("Hello") console.log("String is truthly");
if (42) console.log("Number is truthly");
if ({}) console.log("Empty Object is truthly");
if ([]) console.log("Empty array is truthly");

if ("") console.log("Empty String is falsy");
if (null) console.log("Null is falsy");
if (undefined) console.log("Undefined is falsy");
if (NaN) console.log("NaN is falsy");
if (0) console.log("Number is truthly");
*/

let name = undefined
if (name) {
    console.log("Hi")
}
else {
    console.log("Byeee")
}