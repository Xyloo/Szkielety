const express = require('express')
const router = express.Router()
const path = require('path');
const path_project = path.join(__dirname, '..');
const path_html = path.join(path_project, 'html');
const html_template = require(path.join(path_project, '/html/template.js'));

router.get("/", (req, res) => {
    let toRad = null ?? req.query.toRad
    let value = null ?? req.query.value
    let color = req.query.bg ?? "#FFFFFF" 

    if (toRad == null || value == null) {
        res.status(200).send(html_template(color, "Nie podano parametrow"));
    }

    console.log(color);

    if (toRad == "true") {
        res.status(200).send(html_template(color, `Stopnie: ${value} -> Radiany: ${(value * Math.PI / 180)}`));
    } else {
        res.status(200).send(html_template(color, `Radiany: ${value} -> Stopnie: ${(value * 180 / Math.PI)}`));
    }

})

router.get("/first", (req, res) => {
    res.sendFile(path.join(path_html, 'first.html'));
})

router.get("/second", (req, res) => {
    res.sendFile(path.join(path_html, 'second.html'));
})

router.get("/third", (req, res) => {
    res.sendFile(path.join(path_html, 'third.html'));
})

router.get("/fourth", (req, res) => {
    res.sendFile(path.join(path_html, 'fourth.html'));
})

router.get("/fifth", (req, res) => {
    res.sendFile(path.join(path_html, 'fifth.html'));
})

router.all('*', (req, res) => {
    res.send('Dziala');
});

module.exports = router;
