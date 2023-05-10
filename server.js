const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello DEV this is production for server Developer.')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
