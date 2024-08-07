import http from 'node:http';

const server = http.createServer((req, res) => {
    return res.end('Hello, Tiago!');
});

server.listen(8000)
