
// async programming helps us to offload tasks and
// continue with the rest of the code

// async fs
const {readFile, writeFile} = require('fs');

// we will start reading the files 1 and 2 but will completely offload this task
    // and continue with the rest of the code
        // we hit line 12, offload, move to line 35, eventually get done w task and hit line 30
console.log('starting this task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting new task');
