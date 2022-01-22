const {readFile, writeFile} = require('fs').promises

// doing our work of line 43

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

    // IMPORTANT: using require('fs).promises does above work automatically

const start = async () =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-granade.txt', `This is awesome : ${first},
        ${second}`);

        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();

// ---------------------------------------------------------------------------

// previous approach
    //can get messy with loads of callbacks

// readFile('./content/first.txt', 'utf8', (err,data) => {
//     if(err){
//         return;
//     }
//     console.log(data);
// })

// ---------------------------------------------------------------------------

// returning a promise

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf8', (err, data) =>{
//             if(err){
//                 reject(err)
//             }
//             resolve(data);
//         })
//     })
// }

// using promise

// getText('./content/second.txt')
//     .then((result) =>console.log(result))
//     .catch((err) =>console.log(err))


// ---------------------------------------------------------------------------