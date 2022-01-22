const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// we can have multiple event listeners for the same event
    // both listening for 'response'
customEmitter.on('response', (name, id)=>{
    console.log(`data received with username: ${name}, id: ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other functionality`);
})

    // ORDER MATTERS: first we write listener code
        // then we emit
customEmitter.emit('response', 'john', 34);