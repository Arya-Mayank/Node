const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home')
    }
    if(req.url == '/contact'){
        res.end('Contact')
    }
    res.end(`<h1>Sorry</h1>
        <p>Cant serve the page you're looking for</p>
    `)
})

server.listen(3000)
