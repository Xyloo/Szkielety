const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    let meta = `<meta charset="UTF-8">`
    switch (req.url) {
        case "/home":
            res.end(meta + "<h4>Strona domowa</h4>")
            break
        case "/about":
            res.end(meta + "<h4>O mnie</h4>")
            break
        default:
            res.end(meta + "<h4>Nie znaleziono</h4>")
            break
    }
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})