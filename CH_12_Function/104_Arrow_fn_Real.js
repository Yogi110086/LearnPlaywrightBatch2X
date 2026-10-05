function validatestatuscode(status) {
    if (status >= 200 && status < 300) {
        console.log("Status Code is Fine");
    }
}

// This is an function as an expression.
const validateResponseTime_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Response Time is less than 2000ms");
    }
}

// This is an arrow function.
const validateResponseTime_Exp1 = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Response Time is less thaxn 2000ms");
    }
}

// Immedialtely Invoked Function Expression (IIFE). They dont need to call.
function Callit() {
    console.log("HII");
}
Callit(); // HII

(function () {
    console.log("Hello");
})();