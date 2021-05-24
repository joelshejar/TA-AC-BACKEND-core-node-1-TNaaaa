const { resolveSoa } = require('dns')
var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.method,req.url)
    if(req.method === 'GET' && req.url ==='/'){
        res.write('Welcome to Index Page')
        res.end()
    }else if(req.method ==='GET' && req.url ==='/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>About Page</h1>')
    }else if(req.method === 'POST' && req.url === '/about'){
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: this, is, a, post, request}))
    }else{
        res.writeHead(404, {'Content-Type':"text/html"})
        res.end('<h2>Page not Found</h2>')
    }
} 

server.listen(5000,()=>{
    console.log('server listening on port 5000')
})


















