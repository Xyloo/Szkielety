const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let metoda = (req, res, next) => {
    let sciezka = "Ścieżka: "+ req.protocol + "://" + req.get('host') + req.originalUrl + '\n' + "Metoda: " + req.method
    res.send(sciezka)
}
app.use('/metoda',metoda)

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))