const express = require('express')
const app = express()
const PORT = 3000
const routes = require("./api/routes.js")
const auth = require("./middleware/auth.js")
const method = require("./middleware/method.js")

app.use(express.json())
app.use(auth)
app.use(method)
app.use("/api/users", routes)


app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))