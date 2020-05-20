const fs = require('fs');
const path = require('path');
const countLinesInFile = require('count-lines-in-file');


const myAccessLog = ()=>{
	// create a write stream (in append mode)
	let i = 1;
	let targetFilePath = path.join('app/var/log', `access_${i}.log`);
	let accessLogStream = fs.createWriteStream(targetFilePath, { flags: 'a' });

	// last access log
	while (fs.existsSync(targetFilePath)){
		i++;
		targetFilePath = path.join('app/var/log', `access_${i}.log`);
	}
	i--;
	targetFilePath = path.join('app/var/log', `access_${i}.log`);
	accessLogStream = fs.createWriteStream(targetFilePath, { flags: 'a' });



	countLinesInFile(targetFilePath,  (err, numberOfLines) => {
		if(numberOfLines >= 200){
			i++;
			targetFilePath = path.join('app/var/log', `access_${i}.log`);
			accessLogStream = fs.createWriteStream(targetFilePath, { flags: 'a' });
		}
	});
	return accessLogStream;
};




module.exports = myAccessLog();



