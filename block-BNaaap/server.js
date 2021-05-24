var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.writeHead(201, {'Content-type':'text/html'})
    res.write('Hello')
    res.write('World')
    res.end('<h1>Welcome</h1>')
}

server.listen(4444,()=>{
    console.log('server listening on port 4444')
})



























