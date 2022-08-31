var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var a = url.parse(req.url,true).query;
    res.write('kambing = ' + a.kambing);
    res.write('<br>')
    res.write('ayam =' + a.ayam);
    res.end();
}).listen(8000);