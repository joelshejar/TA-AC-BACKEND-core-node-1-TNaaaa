const fs = require('fs')
var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type','text/html')
        fs.readFile('./index.html',(err,content) =>{
            if(err)console.log(err)
            else{
                res.end(content)
            }
        })
    } else if (req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-type','text/html')
        fs.readFile('./about.html',(err,content) =>{
            if(err)console.log(err)
            else{
                res.end(content)
            }
        })
    } else if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./stylesheet/style.css', (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
}

server.listen(5000, ()=>{
    console.log('listening to port 5000')
})













