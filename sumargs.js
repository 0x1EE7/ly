var sum = 0
var pv = process.argv
for (var i=2; i<pv.length; i++) {
    var n = Number(pv[i])

        sum += n
    
}

console.log(sum)