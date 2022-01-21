const {readFileSync, writeFileSync} = require('fs');

// reading data off existing files
console.log('starting the task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// writing to a new/existing file 
writeFileSync('./content/result-sync.txt',
 `here is the result: ${first}, ${second}`,
 {flag: 'a'}  // flag : append
);

console.log('done with this task');
console.log('starting new task');