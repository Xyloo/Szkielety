const http = require('http')
const url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let q = url.parse(req.url, true).query
    let a = parseFloat(q.a)
    let b = parseFloat(q.b)
    let c = parseFloat(q.c)
    let txt = Math.sqrt((a+b+c)*(a+b-c)*(a+c-b)*(b+c-a))/4
    res.end("Boki: <br>a: " + a + "<br>b: " + b + "<br>c: " + c + "<br>Pole:" + txt.toPrecision(4))
}).listen(3000)