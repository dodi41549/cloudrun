const http = require('http');

const server = http.createServer((req, res) => {
    console.log('New connection');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p style="font-size: 32px;">Hello for EVERYONE this is a server names deployment for our users.^<>^</p></body></html>');
    res.end();
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log('Listening'));
