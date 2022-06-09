const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // set header type content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('hello gang');
    res.write('<p>Hello again</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listenig for requuets on port 3000');
});

// local host is like a domain name on the web
//port numbers are like doors into a computer


// The response.setHeader(name, value) method is an inbuilt application programming interface of the ‘http‘ module which sets a single header value for implicit headers. If this header already exists in the to-be-sent headers, its value will be replaced.