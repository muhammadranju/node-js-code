const os= require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.version());
console.log(os.release());
console.log(os.networkInterfaces());
console.log(os.type());

// const freeMemory= os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);


// const freeMemory2= os.totalmem();
// console.log(`${freeMemory2/1024/1024/1024}`);