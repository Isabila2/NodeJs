var hhtp = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var DataAtual = new Date();
    var DataPt = DataAtual.toLocaleDateString(pt-BR);
    res.end('Isabella Texeira dos Santos' + DataPt + "" + DataAtual);

}).listen(8006);