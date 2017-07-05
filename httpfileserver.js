var http = require('http')
var fs = require('fs')
var filename = process.argv[3]


var server = http.createServer(function (req, res) {
    var f = fs.createReadStream(filename)
    res.writeHead(200, { 'content-type': 'text/plain' })
    f.pipe(res)
})

server.listen(process.argv[2])