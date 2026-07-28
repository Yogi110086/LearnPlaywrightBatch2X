// let is Block-scoped

let x = "Global";
if (true) {
    console.log(x);
    /*
TDZ Starts here



TDZ ends Here (Until the let is declear it is in TDZ, you cannot use x until you created it.)
    */
    let x = "Block";
    console.log(x);
}

console.log("F--->" + x);