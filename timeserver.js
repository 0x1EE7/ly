var net = require('net')
function pad(number) {
    return number < 10 ? '0' + number : '' + number
}
var server = net.createServer(function listener(socket) {
    var d = new Date()
    var date = '' + d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + '\n'
    socket.write(date)
    socket.destroy()
})

server.listen(process.argv[2])

