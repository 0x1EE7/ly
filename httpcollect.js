var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf-8')

    response.pipe(bl(function collect(err, data) {
        if (err) {
            return console.error(err)
        }

        var lines = data.toString()
        console.log(lines.length)
        console.log(lines)
    }))

    response.on('error', console.error)

    
}).on('error', console.error)