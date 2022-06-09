const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data); // abuffer is packageof data when we read this file blog1.txt
    console.log(data.toString());

});
console.log('last line');
//wrti,g files 
fs.writeFile('./docs/blog1.txt', 'hello gangs', () => {
    console.log('file was written');
});
fs.writeFile('./docs/blog2.txt', 'hello gangs', () => {
    console.log('file was written');
});
//directories 
if (!fs.existsSync('./assets')) { //  synchronous methos meaning it wll block the code it's only gonna take a vey short ammount of tie tothought and it's check if sth exists
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files 
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => { //this method we use to delete a file
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

// finallyy
// pkay cool that's how simple it to work with file systems with nodejs BUt if we're reading from really really large files  then it becomes more efficient to use straeams