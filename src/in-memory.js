import http from 'node:http';
import url from 'node:url';
import { Database } from './database';

const database = new Database();

const server = http.createServer((req, res) => {
    const { method, url: reqUrl } = req;
    const parsedUrl = url.parse(reqUrl, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (method === 'GET' && pathname === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users));
    } else if (method === 'GET' && pathname.startsWith('/users/')) {
        const userId = parseInt(pathname.split('/')[2], 10);
        const user = users.find(user => user.id === userId);
        if (user) {
            return res.end(JSON.stringify(user));
        }
        return res.end('User not found!');
    } else if (method === 'POST' && pathname === '/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const { name } = JSON.parse(body);
                const newUser = {
                    id: users.length + 1,
                    name
                };
                users.push(newUser);
                return res.end(JSON.stringify(newUser));
            } catch (e) {
                return res.end('Invalid JSON');
            }
        });
    } else {
        return res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
