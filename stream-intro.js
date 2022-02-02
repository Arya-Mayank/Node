// STREAMS: used when variables are not enough to store file data
        // writeable
        // readable
        // duplex
        // transform


        // CREATE A BIG TEXT FILE
// const {writeFileSync} = require('fs');

// for(let i=0;i<10000;i++){
//     writeFileSync('./content/bigFile.txt', `hello world ${i}\n`, {flag:'a'});
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt');
// stream will emit some events by default: eg. data
    // by default data size is in chunks of 64kb

// stream.on('data', (result)=>{
//     console.log(result);
// })

    // changing chunk size to 90kb 
const stream_two = createReadStream('./content/bigFile.txt', {highWaterMark:90000})
stream_two.on('data', (result)=>{
    console.log(result);
})

// lsitening for error events
stream_two.on('error', (err)=>{console.log(err);})