var http = require('http')
var url = require('url')


var server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('send GET\n')
    }
    var u = url.parse(req.url, true)
    var date = new Date(u.query.iso)

    res.writeHead(200, { 'content-type': 'text/json' })
    if (u.pathname === '/api/parsetime')
        var data = JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() })
    if (u.pathname === '/api/unixtime')
        var data = JSON.stringify({ unixtime: date.getTime() })
    res.end(data)
})

server.listen(process.argv[2])