// there are a couple of different types of streams 
//reach streams and write streams


const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');


readStream.on('data', (chunk) => {
    console.log('------NEW chunk');
    console.log(chunk);

});