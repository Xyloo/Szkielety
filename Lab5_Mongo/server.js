const express = require("express")
const path = require("path")
const handleBars = require("handlebars")
const exphbs = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access")
const Student = require("./models/student.js")
require("./db.js")
const router = require("./controllers/StudentController.js")
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(router)

app.set("views", path.join(__dirname, "/views"))
app.engine(
    "hbs",
    exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handleBars),
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: path.join(__dirname, "/views"),
    })
)
app.set("view engine", "hbs")

app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000")
})