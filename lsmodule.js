var fs = require('fs')
var path = require('path')

module.exports = function (dirname, fileext, listingDone) {
    fs.readdir(dirname, function (err, list) {
        if (err) {
            return listingDone(err)
        }

        list = list.filter(function(f){
            return path.extname(f) === '.' + fileext
        })

        listingDone(null, list)

    })
}