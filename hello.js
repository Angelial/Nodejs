function Hello() {
	var name;

	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};
// exports.Hello = Hello; 
// 在其他文件中需要通过 require('./singleobject').Hello来获取Hello对象
// 略显冗余 

module.exports = Hello;
//使用module.exports = Hello 代替 exports.Hello = Hello,
//在外部引用改模块时，其接口对象就是要输出的Hello对象本身，而不是原先的exports