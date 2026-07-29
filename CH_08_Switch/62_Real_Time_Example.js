let statuscode = 4342;

switch (statuscode) {
    case 200:
        console.log("OK");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("Code not matched");
}