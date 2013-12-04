var http = require('http');
    fs   = require('fs');
    express = require('express');

function start() {
    function onRequest(request, response) {
	response.write('Hello World\n');
	response.end();
    }
    http.createServer(onRequest).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/');
}
exports.start = start;
