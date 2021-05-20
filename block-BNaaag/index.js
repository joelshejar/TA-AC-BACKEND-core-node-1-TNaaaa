var fs = require('fs')



fs.readFile('./content.md',(err,content)=>{
    console.log(err, content)
})


console.log('execute me first')
setTimeout(()=>{
    console.log('timeout executed')
    console.timeEnd('task1');
}, 1000)








var buff1 = Buffer.alloc(10)
buff1.write("welcome to Node.js")
buff1.toString()




