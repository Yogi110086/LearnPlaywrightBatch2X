function retry(testName, maxRetry = 3, delay = 1000) {
    console.log(`Retrying test: ${testName}, Max Retry: ${maxRetry}, Delay: ${delay}`);
}

retry("Login Test");
retry("Registration Test", 5, 2000); // Retrying test: Registration Test, Max Retry: 5, Delay: 2000
