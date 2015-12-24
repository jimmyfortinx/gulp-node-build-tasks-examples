var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("This server is running, your can get an api example at: /api/awesome-list")
});

app.use('/api', require('./api'));

var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});