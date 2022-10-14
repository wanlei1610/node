const path = require('path');
const fs = require('fs');

//注意  ../ 会抵消前面一层的路径
// const pathStr = path.join('/a', '/b/c', '../../', 'd', './e');
// console.log(pathStr)

// const pathStr2 = path.join(__dirname, '1.txt');
// console.log(pathStr2)

fs.readFile(path.join(__dirname, '1.txt'), 'utf-8', function (err, dataStr) {
	if (err) {
		return console.log(err.message)
	}
	console.log(dataStr)
})