/*let age = 28;

if (age >= 18) {
    console.log("You are adult")
}
else {
    console.log("You are not adult")

}
*/

let isLoggedIn = true;

let userRole = "Admin";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Admin can do all anythings");
    }
    else if (userRole === "Editor") {
        console.log("Editor can edit only");
    }
    else if (userRole === "Viewer") {
        console.log("Viewer can only view");
    }
    else {
        console.log("Your role is not decide yet. ");
    }
}
else {
    console.log("User is not logged in");
}