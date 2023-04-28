const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
app.use(express.urlencoded({extended: true}))

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})

app.get("/form2", (req, res) => {
    res.sendFile(path.join(__dirname, "form2.html"))
})


app.post("/result", (req, res) => {
    let username = req.body.username ? req.body.username : "Uzupełnij dane!"
    let password = req.body.password ? req.body.password : "Uzupełnij dane!"
    res.send("Użytkownik: " + username + "<br>Hasło: " + password)
})

app.post("/result2", (req, res) => {
    let fullname = req.body.fullname ? req.body.fullname : "Uzupełnij dane!"
    let languages = req.body.languages ? req.body.languages : []
    let txt = "Imię i nazwisko: " + fullname + "<br><ul>Języki: "
    for(let i in languages)
    {
        txt += "<li>"+languages[i] + "</li>"
    }
    txt += "</ul>"
    res.send(txt)
})
app.listen(PORT, ()=> console.log(`Serwer działa na porcie ${PORT}`))
