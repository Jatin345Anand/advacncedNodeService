const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const utils = require('./utils/global');

const textIn = fs.readFileSync('./text/abc.txt', 'utf-8');
console.log(textIn);

const textOut = `This is the main file, we have it`;
fs.writeFileSync('./text/output.txt', textOut);
console.log('file written!');
// Async way

fs.readFile('./text/abc.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.readFile('./text/abc1.txt', 'utf-8', (err, data) => {
        console.log(data);
        fs.readFile('./text/abc2.txt', 'utf-8', (err, data) => {
            console.log(data);
            fs.readFile('./text/abc3.txt', 'utf-8', (err, data) => {
                console.log(data);
                fs.writeFile('./text/nested.txt', 'this is new things we have nested output', 'utf-8', (err) => {
                    console.log(err, 'nested done.');
                })
            })
        })
    })
})
console.log('Before asynch task!');
console.log(url.format(__dirname));
// E:\PS\switch\last\Node\complete-node-bootcamp\1-node-farm\starter\dev-data\data.json
console.log(path.join(__dirname,'../complete-node-bootcamp/1-node-farm/starter/dev-data/data.json'));
const templateOveriew = fs.readFileSync('./templates/overview.html','utf-8');
const jsonData = fs.readFileSync(path.join(__dirname,'../complete-node-bootcamp/1-node-farm/starter/dev-data/data.json'),'utf-8');
const dataObj = JSON.parse(jsonData);
const tempCard = fs.readFileSync('./templates/template-card.html','utf-8');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        console.log(url.parse(req.url,true));
        res.writeHead(200,{'Content-type':'text/html'});
        const credsHtml = dataObj.map(el => utils.replaceTemplete(tempCard, el)).join('');
        console.log(credsHtml);
        const output = templateOveriew.replace('{%PRODUCT_CREDS%}',credsHtml);
        res.end(output);
    } else if (pathName === '/api') {
        // res.end({"name":"Jatin","age":"27"});
        console.log('in api end');
        fs.readFile(path.join(__dirname,'../complete-node-bootcamp/1-node-farm/starter/dev-data/data.json'),'utf-8',(err,data)=>{
            console.log(data);
            const dataResponse = JSON.parse(data);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        })
        // res.end('in Api');
    } else {

        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>In others, page not found</h1>');
    }
    // console.log(Object.keys(req),JSON.stringify(Object.keys(req)));
    // res.end(JSON.stringify(Object.keys(req)));
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})