var fs = require('fs');

process.argv.forEach(function(value, index, args) {
  console.log('process.argv[' + index + '] = ' + value);
});
console.log("The current file is: "+ __filename);
console.log("The current file is: "+ __dirname);
console.log("xxx"+fs.readFile(__filename, 'utf8', function(error,result){
	console.log("zzz"+result);
}));