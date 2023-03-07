const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // req.header -> returns all the headers in the url
    // req.method -> return the method of the url like GET, POST
    // req.url -> returns everything after the host address(localhost:3000), if you add test in the url it returns /test
});

server.listen(3000);