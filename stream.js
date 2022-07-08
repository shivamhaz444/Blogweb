const fs = require('fs');

const readstream= fs.createReadStream('./blog3.txt',{encoding:'utf8'});
const writestream = fs.createWriteStream('./blog4.txt');
// readstream.on('data',(chunk)=>{
//     console.log('-------new chunk---------');
//     console.log(chunk);
//     writestream.write('\n new chunk\n');
//     writestream.write(chunk);
// });

readstream.pipe(writestream);