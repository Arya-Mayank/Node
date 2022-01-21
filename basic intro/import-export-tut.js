// import modules
const names = require('./module');
const sayHi = require('./utils');

// mind-grenade
    // when you import a module, you also invoke it 
require('./mind-grenade');    //will print to console automatically


// using imported modules
sayHi(names.name); 
sayHi(names.name2);


