getuserstatus();

function getuserstatus() {
    console.log(status_code); // Output: undefined (Hoisting behavior)
    var status_code = "Active";
    console.log(status_code);
}

getuserstatus();
getuserstatus();
getuserstatus();
getuserstatus(); 