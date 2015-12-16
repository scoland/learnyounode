var fs = require('fs');
 fs.readFile(process.argv[2], function(error, data) {
	if (!error) {
		var lines = data.toString().split('\n').length - 1;
		console.log(lines);
	}
});