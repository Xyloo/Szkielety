const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
        `
    <html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <h2>Aplikacja w Node</h2>
        <h4>To jest odpowiedź HTML</h4>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </body>
    </html>
    `
)
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})