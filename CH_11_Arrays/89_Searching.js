let results = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

// Indexof - returns first index, or -1 if not found

results.indexOf('Edge'); // 2
results.indexOf('Brave'); // -1

// lastIndexof - searches from the end.
results.lastIndexOf('Edge'); // 2
results.lastIndexOf('Opera'); // 4

// find - returns the first  matching element

let nums = [10, 20, 35, 40, 55, 60];
nums.find(x => x > 20); // 35


// Find Index
nums.findIndex(n => n > 20); // 2


nums.findLast(n => n > 20); // 60
nums.findLastIndex(n => n > 20); // 5