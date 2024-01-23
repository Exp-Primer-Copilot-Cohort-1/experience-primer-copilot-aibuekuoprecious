<<<<<<< HEAD
// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');
var comments = require('./comments');

var server = http.createServer(function (req, res) {
    // parse URL
    var urlObj = url.parse(req.url, true);
    // get path
    var path = urlObj.pathname;
    // get query string as object
    var query = urlObj.query;

    // get method
    var method = req.method;

    // if path is /index.html and method is GET
    if (path === '/' || path === '/index.html') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    } else if (path === '/getComments' && method === 'GET') {
        // if path is /getComments and method is GET
        var commentsStr = JSON.stringify(comments);
        res.end(commentsStr);
    } else if (path === '/addComment' && method === 'GET') {
        // if path is /addComment and method is GET
        // get query string
        var comment = query.comment;
        // get current time
        var date = new Date();
        var time = date.getTime();
        // create comment object
        var commentObj = {
            comment: comment,
            time: time
        };
        // add comment to comments
        comments.push(commentObj);
        // convert comments to JSON string
        var commentsStr = JSON.stringify(comments);
        // write comments to file
        fs.writeFile('./comments.json', commentsStr, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('write comments.json success');
            }
        });
        // response with comments
        res.end(commentsStr);
    } else {
        // other path
        fs.readFile('.' + path, function (err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(9090, function () {
    console.log('Server is running on http://localhost:9090');
});
=======
// Create web server

// Path: comments.js
const comments = {
    getComments(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Comments');
    }
};

module.exports = comments;
// Path: index.js
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, World!');
            break;
        case '/comments':
            comments.getComments(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end();
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
// Path: comments.js
const comments = {
    getComments(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Comments');
    }
};

module.exports = 'comments';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
>>>>>>> ed9376f18dbdc6fed8979dd5ae8c4ed6153cdef5
