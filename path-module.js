const path = require('path')

// what separator the system uses
console.log(path.sep);

// get address of current directory
const absolute = path.resolve(__dirname);
console.log(absolute);