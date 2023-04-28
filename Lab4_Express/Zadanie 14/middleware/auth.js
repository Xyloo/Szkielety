const isAuthorized = (req, res, next) => {
    let password = null ?? req.body.password;
    console.log(`Password = ${password}`)
    if (password === "secretpaswd" && password != null) {
        next()
    } else {
        res.status(401).send("Dostęp zabroniony");
    }
};

module.exports = isAuthorized;