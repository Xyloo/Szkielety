const express = require('express')
const app = express()
const date = require('./server-files/getDate.js')
const router = require('./routes/route.js');

const logger = (req, res, next) => {
    console.log(date() + '=== ' + req.method + ' ' + req.url)
    next()
}

app.use(logger)
app.use(router)

app.listen(3000, () => console.log(date() + '=== Serwer zostaje uruchomiony na porcie 3000.'))