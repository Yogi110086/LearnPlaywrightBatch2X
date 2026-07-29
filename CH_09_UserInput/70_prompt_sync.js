// Simple runnable example
// You can pass values directly when running the script:
// node CH_09_UserInput/70_prompt_sync.js Alice 25

const name = process.argv[2] || 'Guest';
const age = process.argv[3] || '18';

console.log(`Hello ${name}! You are ${age} years old`);
