const express = require('express')
const path = require('path')
const app = express()
const reactEngine = require ('express-react-views')

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'jsx')
app.set('views', path.join(__dirname, 'views'))
app.engine('jsx', reactEngine.createEngine())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})

app.post('/info', (req, res) => {
    const surname = null ?? req.body.surname
    const email = null ?? req.body.email
    const age = null ?? req.body.age
    if(surname === null || email === null || age === null){
        res.status(400).send("Wprowadź poprawne dane!")
    }
    res.render('info', {surname: surname, email: email, age: age})
})
app.listen(3000, () => console.log('Serwer działa!'))
