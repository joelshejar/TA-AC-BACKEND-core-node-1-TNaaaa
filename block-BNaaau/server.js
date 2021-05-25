const { RSA_NO_PADDING } = require('constants')
var http = require('http')

var server = http.createServer(handleRequest)


function handleRequest(req,res){
    console.log(req)
    console.log(res)
}

server.listen(5000,()=>{
    console.log('listening on port 5000')
})

var server1  = http.createServer(handleRequest1)

function handleRequest1(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.write('Welcome to nodejs')
        res.end()
    }
}
server1.listen(5100, ()=>{
    console.log('listening on port 5100')
})

var server2 = http.createServer(handleRequest2)

function handleRequest2(req,res){
    console.log(req.headers)
}

server2.listen(5555,()=>{
    console.log('server listening to port 5555')
})

var server3 = http.createServer(handleRequest3)

function handleRequest3(req,res){
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/plain')
    res.end(req.method,req.url)
}
server3.listen(5566, ()=>{
    console.log('Server listening to port 5566')
})

var server4 = http.createServer(handleRequest4)

function handleRequest4(req,res){
    res.setHeader('Content-Type', 'text/plain')
    res.end(req.headers)
}
server4.listen(7000, ()=>{
    console.log(`server listening on port 7000`)
})

var server5 = http.createServer(handleRequest5)

function handleRequest5(req,res){
    res.statusCode = 202
}

server5.listen(3333, ()=>{
    console.log('listening to port 3333')
})

var server6 = http.createServer(handleRequest6)

function handleRequest6(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h3>Welcome to altcampus</h3>`)
}

server6.listen(8000, ()=>{
    console.log('server listening to port 8000')
})


var server7 = http.createServer(handleRequest7)

function handleRequest7(req,res){
    if(req.method === 'POST' && req.url === '/index'){
        res.writeHead(200), {'Content-Type':'text/html'}
        res.end('<h2>posted for first time</h2>')
    }
}


server7.listen(5050, ()=>{
    console.log('listening to port 5050')
})



















