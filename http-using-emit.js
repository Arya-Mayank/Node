const http = require('http')

// using event emitter API
const server = http.createServer();
// emit request sent
        // createServer function emits 'request', src: documentation

//listen /subscribe / respond to the emit request
server.on('request', (req,res) => {
    res.end('Hello');
})

server.listen(5000);