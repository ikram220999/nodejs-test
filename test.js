var http = require('http')
var dc = require('./dc')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!' + dc.DateCal(1));
    // res.write(dc.DateCal());
    res.end()
}).listen(8000);




