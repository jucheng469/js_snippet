var http = require('http');
var url = require('url');

function server(route) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log(pathname + 'received');

        route(pathname);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello world');
        res.end();
    }

    http.createServer(onRequest).listen(3000);
    console.log('server started');
}

module.exports = server;