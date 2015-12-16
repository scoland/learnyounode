var args = process.argv.slice(2);
var sum = 0;
args.forEach(function(num) {
	sum += +num;
})
console.log(sum);