

// configurations
var urlGfwList = 'http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt';

var http = require('http');

var fetchList = function(urlList, callback) {
    http.get(urlList, function(res) {
        var body = '';
        res.on('data', function(data) {
            body += data;
        });
        res.on('end', function() {
            var b64Body = new Buffer(body, 'base64');
            callback(null, b64Body.toString());
        });
    }).on('error', function(err) {
        console.log('Got error: ' + err.message);
        callback(err, null);
    });
}

fetchList(urlGfwList, function(err, body) {
    console.log(body);
});
