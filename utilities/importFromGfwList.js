

// configurations
var urlGfwList = 'http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt';

// load requirements
var http = require('http');

// patch prototypes
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/gm, '');
    };
}

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
    if (err) {
        console.log(err);
        process.exit(1);
    }
    var domains = {}
    body = body.split('\n');
    for (var i in body) {
        body[i] = body[i].trim().toLowerCase().replace(/\/$/, '');
        if (!body[i]                 // drop empty rules
         ||  body[i].match(/^!/)     // drop comments
         ||  body[i].match(/^@@/)) { // drop white list items
        } else if (body[i].match(/^\//)) {
            console.log(body[i]);
        } else if (body[i].match(/^\|\|/)) {
            body[i] = body[i].replace(/(^\|\|)/, '');
            domains[body[i]] = true;
        } else if (body[i].match(/^\|http[s]?\:\/\//)) {
            body[i] = body[i].replace(/^\|http[s]?\:\/\/|^\*\./, '').replace(/([^\/]*).*/, '$1');
            domains[body[i]] = true;
        } else {
            // console.log(body[i]);
            // console.log('Leaved: ' + body[i]);
        }
    }
});
