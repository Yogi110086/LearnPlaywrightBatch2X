// Template Literals

let firstName = "Yogesh";
let fullname = `Hi ${firstName} Yadav`;
console.log(fullname);



let env = "staging";
env = "prod";
const userId = 12345;
const apiurl = `https://api-${env}.tekion.com/users/${userId}`;

console.log(apiurl);