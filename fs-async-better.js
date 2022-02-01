const {readFile, writeFile} = require('fs').promises

// using require('fs').promises converted readFile and writeFile into promises

const start = async () =>{  // use try catch block while using async
    try {
        //waiting for readFile promise to resolve
        const first = await readFile('./content/first.txt', 'utf8'); 
        // waiting for next readFile promise to resolve
        const second = await readFile('./content/second.txt', 'utf8'); 

        // we have read file1 and file2 and stored them in vars

        // using writeFile promise to write file 1 and 2 into result file
        await writeFile('./content/result-mind-granade.txt', `This is awesome : ${first},
        ${second}`);

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

// CONVERTING ABOVE FUNC INTO A PROMISE using "util"

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

    // IMPORTANT: using require('fs).promises does above work automatically


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