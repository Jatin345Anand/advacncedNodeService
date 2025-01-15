const fs = require('fs');
const http = require('http');
const server = http.createServer();

console.log(arguments);
console.log(require('module').wrapper);''
server.on('request',(req,res)=>{
    // fs.readFile('./text/abc.txt',(e,d)=>{
    //     if(e) console.log(e);
    //     res.end(d);
    // })

    const readable = fs.createReadStream('./text/abc.txt');
    readable.on('data', chunk => {
        res.write(chunk);
    })
    readable.on('end', () => {
        res.end();
    })
    readable.on('error', err =>{
        console.log(err);
        res.status(500)
        res.end('File not found');
    });
})


server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening...');
})

