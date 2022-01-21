const {readFileSync, writeFileSync} = require('fs');

// reading data off existing files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// writing to a new/existing file 
writeFileSync('./content/result-sync.txt',
 `here is the result: ${first}, ${second}`,
 {flag: 'a'}  // flag : append
);