var fs = require('fs');
var cool = fs.readFileSync(process.argv[2]);
console.log(cool.toString().split('\n').length -1 );