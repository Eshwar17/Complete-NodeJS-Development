const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
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
};

// module.exports = requestHandler;

//If you have multiple exports use below notation

// module.exports = {
//     handler: requestHandler,
//     someText: "This is a dummy text"
// };

//OR
module.exports.handler = requestHandler;
module.exports.someText = "This is a dummy text";
