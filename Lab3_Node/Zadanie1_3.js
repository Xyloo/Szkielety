const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
function serveStaticFile(res, path, contentType, responseCode = 200){
    fs.readFile(__dirname + path, (err, data) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain'})
            return res.end('500 - Blad wewnetrzny')
        }
        res.writeHead(responseCode, { 'Content-Type':contentType})
        res.end(data)
    })
}
const server = http.createServer((req, res) => {
    switch(req.url){
        case '/':
            serveStaticFile(res, '/public/home.html', 'text/html' )
            break
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html' )
            break
        case '/img/img1':
            serveStaticFile(res, '/public/img/img1.jpg', 'image/jpeg' )
            break
        case '/img/img2':
            serveStaticFile(res, '/public/img/img2.jpg', 'image/jpeg' )
            break
        case '/img/img3':
            serveStaticFile(res, '/public/img/img3.jpg', 'image/jpeg' )
            break
        default:
            serveStaticFile(res, '/public/404.html','text/html' )
            break
    }
})
server.listen(port, () => console.log(`Serwer działa na porcie ${port}; `+ 'naciśnij Ctrl+C, aby zakończyć')
)