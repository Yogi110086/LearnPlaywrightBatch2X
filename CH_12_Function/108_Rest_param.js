// Rest of the param.

function logResult(suiteName, ...testResults) {
    console.log(suiteName);
    console.log(testResults);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod",);




function logResult(suiteName, ...testResults) {
    console.log(`Suite: ${suiteName}`);
    testResults.forEach((result, index) => {
        console.log(`  Test ${index + 1}: ${result}`);
    });
}