const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // set header type content type
    res.setHeader('Content-Type', 'text/html');
    // send an html file 
    let path = './views';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            // redirects 
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default:
            falsepath += '404.html';
            res.statusCode = 404;
            break;
    }



    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
        // res.write(data);
        res.statusCode = 200;
        res.end(data);
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listenig for requuets on port 3000');
});

// 200 ok
// 301 resource moved 
//404 not found 
//500 internal sever error




// nodeman is a package which helps us to create a live reload server and tha's really gonna  speed up development process