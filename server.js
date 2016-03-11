/*
 * Module Dependencies
 */
var express = require('express');
var path = require('path');
var server = express();

var uiRootDir = path.join(__dirname + '/');

var data = require('./data/data.json');

server.set('port', 3001);
// Serve static directory where our angular app is located.
server.use(express.static(__dirname));

server.get('/digits', function (req, res) {
    if (req.url == '/digits') {

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache'
        });

        var i = 0;
        var timer = setInterval(write, 1000);
        write();

        function write() {
            res.write(new Array(1000).join(++i + '') + ' ');
            if (i == 9) {
                clearInterval(timer);
                res.end();
            }
        }
    } else {
        file.serve(req, res);
    }
});

server.get('/data', function (req, res) {
    setTimeout(function() {
        res.send(data)}
    , 1000);
});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});

server.get('/', function (req, res) {
    res.sendFile(uiRootDir + '/index.html');
});
