/*
Switch is always use (===) comparison.

*/
let Day = 4

switch (Day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    case 4:
        console.log("Thursday");

        console.log("Friday");

    case 5:
        console.log("Saturday");

    case 6:
        console.log("Sunday");

    default:
        console.log("invalid Day Value");
}
// If we dont use break it execute all the below statement.