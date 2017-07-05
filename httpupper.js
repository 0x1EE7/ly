var http = require('http')
var map = require('through2-map')


var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send POST\n')
    }
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(map(function filterStream(data) {
        return data.toString().toUpperCase()
    })).pipe(res)
})

server.listen(process.argv[2])