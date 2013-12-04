var express = require('express');
var app = express();
app.use('/', express.static(__dirname+'/public'));
//app.listen(1337, function() { console.log('listening')});
app.listen(1337, '192.168.1.9', function() { console.log('listening')});