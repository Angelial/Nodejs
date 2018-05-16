// console.log(process.argv);
// 

process.stdin.resume();
process.stdin.on("data", function(data){
	process.stdout.write("read from console: " + data.toString())
})


// console.log('Hello world');
// console.log("byvoid %d ioyo");
// console.log("byvoid %d ioyo", 1991);