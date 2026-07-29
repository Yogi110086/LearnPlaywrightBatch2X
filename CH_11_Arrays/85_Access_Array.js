// Accessing and Modifying

let statuses = ["Pass", "Fail", "Skip"];

console.log(statuses[0])
console.log(statuses[2])

console.log(statuses.at(-1))
console.log(statuses.at(-2))
console.log(statuses.at(-3))
console.log(statuses.at(-4))

// Modifying
statuses[3] = "Blocked";
console.log(statuses)