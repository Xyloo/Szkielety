const express = require('express')
const http = require('http')
const path = require('path')
const { check, validationResult } = require('express-validator')
const app = express()
app.use(express.urlencoded({
    extended: true
}))

app.get("/form3", (req, res) => {
    res.sendFile(path.join(__dirname, "form3.html"))
})

app.post("/result3", [
    check('username').isLength({ min: 3, max: 25 }).withMessage('Nazwa użytkownika musi zawierać od 3 do 25 znaków!').bail().isAlpha('pl-PL',{ignore: ' '}).withMessage("Nazwa użytkownika musi składać się wyłącznie z liter oraz spacji").bail().trim().stripLow().customSanitizer(value => {
        let words = value.split(' ')
        let result = ''
        for (let i in words) {
            result += words[i].charAt(0).toUpperCase()
        }
        return result
        }),
    check('email').isEmail().withMessage('Niepoprawny adres email!').bail().normalizeEmail(),
    check('age').isInt({min: 0, max: 110}).withMessage('Wiek musi być liczbą z zakresu 0-110!')
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const nazwisko = req.body.username
    const email = req.body.email
    const wiek = req.body.age
    res.send("Użytkownik: " + nazwisko + "<br>Email: " + email + "<br>Wiek: " + wiek)
})
app.listen(3000)