#!/usr/bin/env node
// Import domains from GfwList by @leaskh

// configurations
var urlGfwList = 'http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt';

// load requirements
var http = require('http');

var base64Decode = function(base64) {
    return new Buffer(base64, 'base64').toString();
};

var fetchStdin = function(callback) {
    var stdinChunk = null;
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        stdinChunk += chunk ? chunk : '';
    });
    process.stdin.on('end', function() {
        callback(null, base64Decode(stdinChunk));
    });
};

var fetchList = function(callback) {
    http.get(urlGfwList, function(res) {
        var body = '';
        res.on('data', function(data) {
            body += data;
        });
        res.on('end', function() {
            callback(null, base64Decode(body));
        });
    }).on('error', function(err) {
        console.log('Got error: ' + err.message);
        callback(err, null);
    });
};

var parseList = function(err, body) {
    if (err) {
        console.log('Error: ' + err);
        process.exit(1);
    }
    var domains = {}
    body = body.split('\n');
    for (var i in body) {
        body[i] = body[i].trim().toLowerCase();
        if (!body[i]                 // drop empty rules
         ||  body[i].match(/^!/ )    // drop comments
         ||  body[i].match(/^@@/)    // drop white list items
         ||  body[i].match(/^\//)) { // drop regular expressions
        } else {
            body[i] = body[i].replace(/^\|\|/            , '')
                             .replace(/^\|http[s]?\:\/\//, '')
                             .replace(/^\*\./            , '')
                             .replace(/^\./              , '')
                             .replace(/\*.*$/            , '')
                             .replace(/\/.*$/            , '')
                             .replace(/\%2f.*$/          , '');
            if (body[i].match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/)
             || body[i].match(/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/)) {
                domains[body[i]] = true;
            } else {
                // console.log('Leaved: ' + body[i]);
            }
        }
    }
    console.log(domains);
};

// patch prototypes
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/gm, '');
    };
}

// main
if (process.stdin._readableState.highWaterMark) {
    fetchStdin(parseList);
} else {
    fetchList(parseList);
}
