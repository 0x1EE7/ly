var http = require('http')
var bl = require('bl')
var pv = process.argv

var count = 0

var outbuf = []
function httpGet(index) {
    http.get(pv[2 + index], function (response) {
        response.setEncoding('utf-8')

        response.pipe(bl(function collect(err, data) {
            if (err) {
                return console.error(err)
            }

            var lines = data.toString()
            // console.log(lines.length)
            outbuf[index] = lines
            count++

            if(count === 3)
                printResponses()

        }))

        response.on('error', console.error)


    }).on('error', console.error)
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}

function printResponses(){for (var i = 0; i < 3; i++) {
    console.log(outbuf[i])
}}