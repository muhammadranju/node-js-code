const chalk = require('chalk');
const {add,sub,mult,duve,duve2}= require("./oper");


// console.log(sub);

console.log(chalk.green.inverse(add(5,5)));
console.log(chalk.red.inverse(sub(10,5)));
console.log(chalk.yellow.inverse(mult(10,5)));
console.log(chalk.blue.inverse(duve(10,5)));
console.log(chalk.gray.inverse(duve2(10,10)));