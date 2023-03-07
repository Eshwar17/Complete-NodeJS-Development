const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // req.header -> returns all the headers in the url
    // req.method -> return the method of the url like GET, POST
    // req.url -> returns everything after the host address(localhost:3000), if you add test in the url it returns /test
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From my node js server!!</h1></body>');
    res.write('</html>');
    // res.end();
    //res.write() -> writes data to the response
    //res.setHeaders -> sets the content type
    //res.end() -> mandatory to end(Done automatically by node js)

    
});

server.listen(3000);