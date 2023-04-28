const express = require('express')
const app = express()
const port = 3000

app.get('/name/:imie/:drugieImie', (req, res) => {
    res.send('<h1>Cześć '+req.params.imie+' i ' + req.params.drugieImie + '</h1>')
})

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`)
})