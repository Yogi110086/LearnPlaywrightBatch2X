function makeRetryTracker(max) {
    let attempts = 0;
    function tryagain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max entries (${max})`;
        }

        return `Attempt ${attempts} / ${max} for ${testName}`;
    }
    return tryagain;
}
let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));