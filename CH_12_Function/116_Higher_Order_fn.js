// Higher Order Functions

function runWithLogin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} ${result}`);

}

function loginTest() {
    return "Pass";
}

function loginTestFailed() {
    return "Fail";
}

runWithLogin(loginTest, "Login Test");