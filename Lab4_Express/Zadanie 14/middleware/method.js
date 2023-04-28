const method = (req, res, next) => {
    let str = "Ścieżka: "+ req.protocol + "://" + req.get('host') + req.originalUrl + '\n' + "Metoda: " + req.method
    console.log(str)
    res.locals.info = str
    next()
}

module.exports = method;