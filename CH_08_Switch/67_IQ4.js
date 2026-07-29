let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 Matched");
        break;
    case "5":
        console.log("String 5");
        break;

}

let status = 0;
console.log(typeof status)
switch (status) {
    case false:
        console.log("False Matched")
        break;
    case 0:
        console.log("0 is Matched")
        break;
}