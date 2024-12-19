var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = 1111;
const HOST = 'localhost';

let server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    if(req.url == '/')
        fs.createReadStream('./templates/summer.html').pipe(res);
    else if(req.url == '/winter')
        fs.createReadStream('./templates/winter.html').pipe(res);
    else
        fs.createReadStream('./templates/error.html').pipe(res);
})
server.listen(PORT, HOST, function () {
    console.log(`Server is active: http://${HOST}:${PORT}`)
})

// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function (err,data) {
//         if(err){
//             res.writeHead(404,{'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }else{
//             res.writeHead(200, {'Content-Type': 'text/html'});
//
//             res.write(data);
//             return res.end();
//         }
//     });
// }).listen(8080);

