// const fs = require('fs');
const crypto = require('crypto');

// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 4;

// crypto.pbkdf2Sync('password', 'salt', 1000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted');
// })
// crypto.pbkdf2Sync('password', 'salt', 1000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted');
// })
// crypto.pbkdf2Sync('password', 'salt', 1000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted');
// })
// setTimeout(() => { console.log('Set time out') }, 0);
// setImmediate(() => { console.log('Set timeimmediate') });
// // setTimeout(() => { console.log('Set time outafter 1s') }, 1000);

// console.log('---------------start-----------');

// fs.readFile('./text/abc.txt', () => {
//     console.log('---------------Io-start-----------');
//     setTimeout(() => { console.log('Set time outafter 1s') }, 1000);
//     setTimeout(() => { console.log('Set time out') }, 0);
//     setImmediate(() => { console.log('Set timeimmediate') });
//     process.nextTick(() => { console.log('next tick') });

//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, 'Password encrypted');
//     })
//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, 'Password encrypted');
//     })
//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, 'Password encrypted');
//     })
//     // crypto.pbkdf2('password','salt',100000, 1024, 'sha512',()=>{
//     //     console.log(Date.now()-start,'Password encrypted');
//     // })
//     // crypto.pbkdf2('password','salt',100000, 1024, 'sha512',()=>{
//     //     console.log(Date.now()-start,'Password encrypted');
//     // })
//     // crypto.pbkdf2('password','salt',100000, 1024, 'sha512',()=>{
//     //     console.log(Date.now()-start,'Password encrypted');
//     // })
// })

// console.log('---------------end-----------');