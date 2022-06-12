const express = require('express');

// express app 
const app = express();
//listen for requests 
app.listen(3000);

app.get('/', (req, res) => {
    // res.write('');
    // res.end();
    res.sendFile('./views/index.html', { root: __dirname }); // told us that  we are currentl  y inside this file  ..the root should be this folderclient and servers 
});
app.get('/about', (req, res) => {
    // res.write('');
    // res.end();
    res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

// redirects 

app.get('/about-us', (req, res) => {
    res.redirect('/about'); // redirect redrige une commande 
});