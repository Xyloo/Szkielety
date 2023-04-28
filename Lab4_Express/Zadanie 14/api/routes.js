const express = require('express')
const router = express.Router()
require("validator")
let users = require('../users.js')


router.get("", (req, res) => {
    res.json({ users: users, data: res.locals.info })
})

router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json({
            users: users.filter(user => user.id === parseInt(req.params.id)),
            data: res.locals.info
        })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`, data: res.locals.info })
    }
})

router.post('', (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: "aktywny"
    }
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'Wprowadź poprawne imię i nazwisko oraz email!', data: res.locals.info })
    }
    users.push(newUser)
    res.json({ users: users, data: res.locals.info })
})

router.patch('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        const updUser = req.body
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name
                user.email = updUser.email ? updUser.email : user.email
                res.json({ msg: 'Dane użytkownika zaktualizowane', user, data: res.locals.info })
            }
        })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!`, data: res.locals.info })
    }
})


router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        users = users.filter(user => user.id !== parseInt(req.params.id))
        res.json({
            msg: 'Użytkownik został usunięty',
            users: users,
            data: res.locals.info
        })
    }
    else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!`, data: res.locals.info })
    }
})

module.exports = router;