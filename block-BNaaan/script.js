var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res) {
    console.log(req.method, req.url, req.headers)
    res.end('Welcome')
}

server.listen(3000, () => {
    console.log('server listening on port 3000')
})















