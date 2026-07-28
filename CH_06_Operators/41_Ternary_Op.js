let rajkumar_age = 18;
let rj_will_goa = rajkumar_age > 18 ? "RJ will go goa" : "NO goa";
let rj_will_goa1 = rajkumar_age = 18 ? "RJ will go goa" : "NO goa";
console.log(rj_will_goa);
console.log(rj_will_goa1);

let actualstatuscode = 200;
let execptedstatuscode = 200;
let testresult = actualstatuscode === execptedstatuscode ? "Pass" : "Fail";
console.log(testresult);

let environment = "Staging";
let baseurl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseurl);
//first statement for the true condition and second is for false condition.



let isCI = true;
let browserMode = isCI ? "Headless" : "headed";
console.log("Launching Browser in: ", browserMode, "mode");

let responseTime = 850;
let sla = 1000;
let slastatus = responseTime <= sla ? "Within SLA" : "Without SLA";
console.log(`Response: ${responseTime}ms - ${slastatus}`);

let conditionline = true;
let isSRKMale = conditionline ? true : false;
console.log(isSRKMale);



// Nested Ternary * Multiple Conditions

let age = 26;
let is_yogesh_goa = age >= 26 ? "He will go" : "He  will not go";
console.log(is_yogesh_goa);


let age_pramod = 45;
let is_promode_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "Not Drink") : "Not Go GOa";
console.log(is_promode_d);


let statuscode = 400;
let category =
    statuscode < 300 ? "Success" :
        statuscode < 400 ? "Redirect" :
            statuscode < 500 ? "client Error" : "Server Error";
console.log(`StatusCode${statuscode}: ${category}`);


// Find max number b/w 2 numbers.
// Find max number b/w 3 numbers.


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature: ", temp, "| Feel:", feel);