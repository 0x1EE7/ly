var lsmodule = require('./lsmodule.js')

lsmodule(process.argv[2], process.argv[3], function (err, filteredFiles) {
    if(err){
        return console.error('There is an error', err)
    }
    filteredFiles.forEach(function(f) {
        console.log(f)
    }, this);
})
