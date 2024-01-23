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
