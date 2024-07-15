const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>First Page</title></head>')
    res.write('</html>')
})

server.listen(3000)