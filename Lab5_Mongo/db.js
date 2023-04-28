const mongoose = require("mongoose")
const student = require("./models/student.js")

mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true })
    .then((result) => {
        console.log("Połączono z bazą")
    }).catch((err) => {
    console.log("Nie można połączyć się z MongoDB. Błąd: " + err)
})